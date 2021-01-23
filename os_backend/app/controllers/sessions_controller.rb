class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:user][:email])
    if user && user.authenticate(params[:user][:password])
      token = token_create({id: user.id})
      render json: {uid: token}.to_json
    else
      render json: {errors: ['Log in failed']}.to_json
    end
  end

  def get_current_user
    if log_in?
      render json: @current_user.to_json(user_option)
    else
      render json: {errors: ['Access Failed']}.to_json
    end
  end
  
  private
  def user_option
    {methods: [:order_count, :product_count], except: [:id, :password_digest,:created_at, :updated_at]}
  end
  
end
