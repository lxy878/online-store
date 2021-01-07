class Category < ApplicationRecord
    has_many :products
    # add uniqueness
    validates :name, presence: true
end
