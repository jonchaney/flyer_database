class DropVenuesAndFlyersTables < ActiveRecord::Migration[5.1]
  def change
    drop_table :venues
    drop_table :flyers
  end
end
