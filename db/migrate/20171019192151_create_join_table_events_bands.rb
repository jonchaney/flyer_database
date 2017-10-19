class CreateJoinTableEventsBands < ActiveRecord::Migration[5.1]
  def change
    create_join_table :events, :bands do |t|
      # t.index [:event_id, :band_id]
      # t.index [:band_id, :event_id]
    end
  end
end
