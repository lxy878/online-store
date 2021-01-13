class Order < ApplicationRecord
    belongs_to :product
    belongs_to :user
    validates :qty, numericality: {only_integer: true, greater_than: 0}

    def update_product(qty)
        product = self.product
        product.update(qty: product.qty-qty)
        product
    end
end
