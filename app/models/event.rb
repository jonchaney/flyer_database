class Event < ApplicationRecord
  validates :date, presence: true
  has_and_belongs_to_many :bands

  has_attached_file :image, default_url: "default_poster.jpeg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def generate_transcription!
    return unless self.image.try(:url)

    response = RestClient.post 'https://api.ocr.space/parse/image',
      apikey: ENV['OCR_SPACE_API_KEY'],
      url: self.image.url

    self.poster_transcription = response['ParsedResults'].first['ParsedText']
    self.save
  end
end
