class ProductsController < ApplicationController
    before_action :authorization_required, only: [:create, :update, :destroy]

    def index
        if log_in?
            products = @current_user.products
            # add number of ordered product
            render json: products.to_json(json_option)
        else
            products = Product.all
            # orders remove
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
            render json: {errors: ['Product not found']}.to_json
        end
    end

    def destroy
        if product = @current_user.products.find_by(id: params[:id])
            id = product.id
            # delete image
            product.image.purge

            product.destroy
            render json: {id: id}.to_json
        else
            render json: {errors: ['Product not found']}.to_json
        end
    end

    private 

    def product_params
        # params.require(:product).permit(:name, :description, :price, :qty, :image, category_attributes:[:name])
        params.permit(:name, :description, :price, :qty, :category_attributes, :image)
    end

    def json_option
        # fix: order counts
        {include: {orders: {only: [:qty]}}, methods: [:image_path, :category_attributes], except: [:user_id, :category_id,:created_at, :updated_at]}
    end
end
