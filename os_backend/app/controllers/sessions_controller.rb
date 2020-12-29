class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:user][:email])
    if user && user.authenticate(params[:user][:password])
      token = token_create({id: user.id})
      render json: {uid: token}.to_json
    else
      render json: {errors: 'Log in failed'}.to_json
    end
  end

  def get_current_user
    if log_in?
      data = {name: @current_user.name, email: @current_user.email, nOrders: 0, nProducts: 0}
      render json: {user: data}.to_json
    else
      render json: {errors: 'Access Failed'}.to_json
    end
  end

end
