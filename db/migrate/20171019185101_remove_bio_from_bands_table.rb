class RemoveBioFromBandsTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :bands, :bio
  end
end
