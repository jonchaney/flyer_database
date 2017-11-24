class AddPosterTranscriptionToEvent < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :poster_transcription, :string, index: true
  end
end
