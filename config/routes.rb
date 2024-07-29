Rails.application.routes.draw do
  get 'posts/index'
  get 'posts/create'
  get 'posts/new'
  get 'posts/edit'
  get 'posts/show'
  get 'posts/update'
  get 'posts/destroy'
  get '/login', to:'user_sessions#new'
  post '/login', to:'user_sessions#create'
  delete '/logout', to:'user_sessions#destroy'
  root 'home#top'
  resources :users, only: [:new, :create]
  resources :posts
end
