class ProductsController < ApplicationController
    before_action :authorization_required, only: [:create, :update, :destroy]

    def index
        if log_in?
            products = @current_user.products
            render json: products.to_json(json_option)
        else
            products = Product.all
            render json: products.to_json(json_option)
        end
    end

    def create
        newProduct = @current_user.products.new(product_params)
        if newProduct.save
            render json: newProduct.to_json(json_option)
        else
            render json: {errors: newProduct.errors.full_messages}.to_json
        end
    end
    
    def update
        if product = @current_user.products.find_by(id: params[:id])
            if product.update(product_params)
                render json: product.to_json(json_option)
            else
                render json: {errors: product.errors.full_messages}.to_json
            end
        else
            render json: {errors: 'Product not found'}.to_json
        end
    end

    def destroy
        if product = @current_user.products.find_by(id: params[:id])
            id = product.id
            product.destroy
            render json: {id: id}.to_json
        else
            render json: {errors: 'Product not found'}.to_json
        end
    end

    private 
    def product_params
        params.require(:product).permit(:name, :description, :price, :qty, category_attributes:[:name])
    end

    def json_option
        {include: {category: {only: [:name]}}, except: [:user_id, :category_id]}
    end
end
