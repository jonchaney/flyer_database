class AddTableBands < ActiveRecord::Migration[5.1]
  def change
    create_table :bands do |t|
      t.string :name, null: false
      t.string :city, null: false
      t.text :bio
      t.timestamps
    end
  end
end
