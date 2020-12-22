class ApplicationController < ActionController::API
    
    private
    def authentication_required
        render json: {errors: 'authentication failed'}.to_json if !log_in?
    end

    def log_in?
        !!current_user    
    end

    def current_user
        data = params[:user] ? token_decode(params[:user][:token]) : nil
        byebug
        User.find_by(data) if data
    end

    def secret_key
        Rails.application.credentials.secret_key
    end

    def token_create(hash)
        JWT.encode(hash, secret_key, 'HS256')
    end

    def token_decode(token)
        JWT.decode(token, secret_key, true, {algorithm: 'HS256'})
    end
    
end
