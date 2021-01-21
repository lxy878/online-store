class User < ApplicationRecord
    has_many :products
    has_many :orders
    has_secure_password
    validates :email, uniqueness: true
    validates :email, :name, presence: true

    def order_count
        self.orders.size
    end

    def product_count
        self.products.size
    end
end
