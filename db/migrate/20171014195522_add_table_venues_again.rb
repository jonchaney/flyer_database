class AddTableVenuesAgain < ActiveRecord::Migration[5.1]
  def change
    create_table :venues do |t|
      t.string :name, null: false
      t.string :city, null: false
      t.string :address
      t.timestamps
      end
  end
end
