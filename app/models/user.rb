class User < ApplicationRecord
  has_many :articles
  validates :username, presence: true, 
                       length: {minimum: 3, maximum: 25}, 
                       uniqueness: true
  validates :email, presence: true, 
                    length: {maximum: 105}, 
                    uniqueness: true, 
                    format: { with: URI::MailTo::EMAIL_REGEXP } 
end
