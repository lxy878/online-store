class ProductsController < ApplicationController
    def index
        if current_user
            # byebug
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
        # byebug
        if log_in?
            newProduct = @current_user.products.new(product_params)
            # byebug
            if newProduct.save
                render json: {product: newProduct}.to_json
            else
                render json: {errors: newProduct.errors.full_messages}.to_json
            end
        else
            render json: {errors: 'Unauthorized'}.to_json
        end
    end

    def edit
    end
    
    def update
    end

    def destroy
    end

    private 
    def product_params
        params.require(:product).permit(:name, :description, :price, :qty, category_attributes:[:name])
    end
end
