class Product < ApplicationRecord
    belongs_to :user
    belongs_to :category
    has_many :orders
    has_one_attached :image

    # Note: validating category_id to prevent category as nil
    validates :name, :category_id, presence: true
    validates :price, :qty, numericality: {greater_than_or_equal_to: 0}
    validates :qty, numericality: {only_integer: true}
    # accepts_nested_attributes_for :category

    def category_attributes=(attributes_string)
        attributes = JSON.parse(attributes_string)
        if category = Category.find_by(attributes)
            self.category = category
        else
            # Note: do not use build_category because category won't save
            self.create_category(attributes)
        end
    end

    # testing the method
    def image_path
        Rails.application.routes.url_helpers.rails_blob_path(self.avatar, only_path: true)
    end
end
