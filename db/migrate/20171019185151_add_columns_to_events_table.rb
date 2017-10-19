class AddColumnsToEventsTable < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :poster_creator, :string
  end
end
