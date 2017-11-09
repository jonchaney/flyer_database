# == Schema Information
#
# Table name: events
#
#  id                   :integer          not null, primary key
#  price                :integer
#  date                 :string           not null
#  presented_by         :string
#  poster_creator       :string
#  venue                :string
#  city                 :string
#  address              :string
#  image_file_name      :string
#  image_content_type   :string
#  image_file_size      :integer
#  image_updated_at     :datetime
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  poster_transcription :text
#

class Event < ApplicationRecord
  validates :date, presence: true
  has_and_belongs_to_many :bands

  has_attached_file :image, default_url: "default_poster.jpeg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  after_save :transcribe!, if: :image_updated_at_changed?

  def transcribe!
    PosterTranscriptionJob.perform_later(self.id)
  end

  def generate_transcription!
    return unless self.image.try(:url)

    response = RestClient.post 'https://api.ocr.space/parse/image',
      apikey: ENV['OCR_SPACE_API_KEY'],
      url: clean_url

    parsed = JSON.parse(response.body)
    # Splits into space delimited tokens.
    # Should `poster_transcription` be a different datatype?
    tokens = split_ocr_results(parsed['ParsedResults'].first['ParsedText'])
    self.poster_transcription = tokens
    self.save
  end

  private

  def clean_url
    self.image.url.split('?').first
  end

  def split_ocr_results(text)
    text.split(/\W/).join(' ')
  end
end
