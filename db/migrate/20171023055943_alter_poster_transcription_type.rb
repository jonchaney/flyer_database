class AlterPosterTranscriptionType < ActiveRecord::Migration[5.1]
  def change
    change_column :events, :poster_transcription, :text
  end
end
