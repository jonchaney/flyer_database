class RemoveCityFromBandsTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :bands, :city
  end
end
