class PosterTranscriptionJob < ApplicationJob
  queue_as :default

  def perform(event_id)
    Event.find(event_id).generate_transcription!
  end
end
