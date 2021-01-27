class OrdersController < ApplicationController
    before_action :authorization_required

    def index
        render json: @current_user.orders.to_json(orders_option)
    end

    def create 
        new_order = @current_user.orders.new(order_params)
        
        if new_order.save
            product = new_order.update_product(new_order.qty)
            render json: product.to_json(product_option)
        else
            render json: {errors: new_order.errors.full_messages}.to_json 
        end
    end

    def destroy
        if order = @current_user.orders.find_by(id: params[:id])
            id = order.id
            order.update_product(-order.qty)
            order.destroy
            render json: {id: id}.to_json
        else
            render json: {errors: ['Order did not find']}.to_json
        end
    end

    private
    def order_params
        params.require(:order).permit(:product_id, :qty, :amount)
    end

    def product_option
        {include: {orders: {only: [:qty]}}, methods: [:image_path, :category_attributes], except: [:user_id, :category_id,:created_at, :updated_at]}
    end

    def orders_option
        {include: {product: {only: [:name]}}, except: [:updated_at, :product_id, :user_id]}
    end
end
