class User < ApplicationRecord
    has_many :products
    has_many :orders
    has_secure_password
    validates :email, uniqueness: true
    validates :email, :name, presence: true
end
