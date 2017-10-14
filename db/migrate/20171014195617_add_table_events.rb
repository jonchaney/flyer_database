class AddTableEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.integer :price
      t.string :date, null: false
      t.string :presented_by
      t.timestamps
      end
  end
end
