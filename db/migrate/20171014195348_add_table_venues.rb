class AddTableVenues < ActiveRecord::Migration[5.1]
    def change
      create_table :venues do |t|
        t.string :name, null: false
        t.string :city, null: false
        t.string :string
        t.timestamps
      end
    end
end
