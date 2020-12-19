class UsersController < ApplicationController

  # def index
  #   users = User.all
  #   render json: users.to_json()
  # end

  def create
    newUser = User.new(user_params)
    render json: newUser.save ? newUser.to_json : 'failed'.to_json
  end

  def show
    render json: {:response => 'log in'}.to_json
  end

  def edit
  end

  def update
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
