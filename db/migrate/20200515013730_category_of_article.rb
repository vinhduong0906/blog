class CategoryOfArticle < ActiveRecord::Migration[6.0]
  def change
    create_table :category_of_articles do |t|
      t.integer :category_id
      t.integer :article_id
    end
  end
end
