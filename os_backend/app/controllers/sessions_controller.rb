class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:user][:email])
    if user && user.authenticate(params[:user][:password])
      token = token_create({id: user.id})
      render json: {uid: token}.to_json
    end
  end

end
