class UsersController < ApplicationController

  # before_action :authentication_required, only: [:show, :edit, :update]

  def create
    newUser = User.new(user_params)
    if newUser.save
      render json: {uid: token_create(newUser.id)}.to_json
    else
      render json: {error: newUser.errors.full_messages}.to_json
    end
  end


  def update
    if log_in? && @current_user.update(user_params)
      render json: {user: @current_user}.to_json
    else
      render json: {errors: 'Update Failed'}.to_json
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
