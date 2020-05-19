class Article < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  belongs_to :user
  has_many :category_of_articles
  has_many :categories, through: :category_of_articles
  
end
