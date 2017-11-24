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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
