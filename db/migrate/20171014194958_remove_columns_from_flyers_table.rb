class RemoveColumnsFromFlyersTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :flyers, :date
    remove_column :flyers, :price
    remove_column :flyers, :presented_by
  end
end
