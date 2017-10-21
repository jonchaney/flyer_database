class Event < ApplicationRecord
  validates :date, presence: true
  has_and_belongs_to_many :bands

  has_attached_file :image, default_url: "default_poster.jpeg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
