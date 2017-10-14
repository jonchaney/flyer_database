class CreateFlyers < ActiveRecord::Migration[5.1]
  def change
    create_table :flyers do |t|
      t.string :creator
      t.string :date
      t.integer :price
      t.string :presented_by
      t.timestamps
    end
  end
end
