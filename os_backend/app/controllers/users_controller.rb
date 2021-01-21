class UsersController < ApplicationController
  
  def create
    newUser = User.new(user_params)
    if newUser.save
      token = token_create({id: newUser.id})
      render json: {uid: token}.to_json
    else
      render json: {errors: newUser.errors.full_messages}.to_json
    end
  end


  def update
    if log_in? && @current_user.update(user_params)
      render json: @current_user.to_json(user_option)
    else
      render json: {errors: 'Update Failed'}.to_json
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

  def user_option
    {methods: [:order_count, :product_count], except: [:id, :password_digest,:created_at, :updated_at]}
  end
end
