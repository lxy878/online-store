Rails.application.routes.draw do
  get 'login' => 'sessions/create'
  resources :users, only: [:create, :show, :update, :edit]
  # get 'users' => 'users#index'
end
