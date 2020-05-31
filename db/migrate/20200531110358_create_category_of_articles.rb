class CreateCategoryOfArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles_categories do |t|
      t.references :category
      t.references :article
    end
  end
end
