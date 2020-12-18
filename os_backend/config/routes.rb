Rails.application.routes.draw do
  post 'login' => 'users#create'
  get 'users/:id' => 'users#edit'
  post 'users/:id' => 'users#update'
  # get 'users' => 'users#index'
end
