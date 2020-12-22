class UsersController < ApplicationController

  before_action :authentication_required, only: [:show, :edit, :update]

  def create
    newUser = User.new(user_params)
    if newUser.save
      render json: {uid: token_create(newUser.id)}.to_json
    else
      render json: {error: newUser.errors.full_messages}.to_json
    end
  end

  def show
    render json: {:response => 'logged in'}.to_json
  end

  def edit
    # render current user data
  end

  def update
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
