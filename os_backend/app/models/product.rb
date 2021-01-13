class Product < ApplicationRecord
    belongs_to :user
    belongs_to :category
    has_many :orders
    
    validates :name, presence: true
    validates :price, :qty, numericality: {greater_than_or_equal_to: 0}
    validates :qty, numericality: {only_integer: true}
    
    accepts_nested_attributes_for :category
end
