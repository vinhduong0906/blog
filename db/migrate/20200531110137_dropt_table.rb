class DroptTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :category_of_articles
  end
end
