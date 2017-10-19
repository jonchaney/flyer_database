class Event < ApplicationRecord
  validates :date, presence: true
  has_and_belongs_to_many :bands
end
