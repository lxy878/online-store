Rails.application.routes.draw do
  post 'login' => 'sessions#create'
  get 'current_user' => 'sessions#get_current_user'
  post 'users/update' => 'users#update'
  resources :users, only: [:create]
  resources :products, only: [:index, :create, :update, :destroy]
  resources :orders, only: [:index, :destroy, :create]
end
