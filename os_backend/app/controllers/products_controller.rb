class ProductsController < ApplicationController
    def index
        if current_user
            products = @current_user.products
            render json: {products: products}.to_json
        else
            products = Product.all
            render json: {products: products}.to_json
        end
    end

    def show
    end

    def create
    end

    def edit
    end
    
    def update
    end

    def destroy
    end
end
