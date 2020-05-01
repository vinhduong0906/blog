include BCrypt
class User < ApplicationRecord
  before_save {self.email=email.downcase}
  before_save {self.password_digest=BCrypt::Password.create(password_digest)}
  has_many :articles
  has_secure_password
  has_one_attached :image

  validates :image, presence: true
  validates :username, presence: true, 
                       length: {minimum: 3, maximum: 25}, 
                       uniqueness: true
  validates :email, presence: true, 
                    length: {maximum: 105}, 
                    uniqueness: true
  

end
