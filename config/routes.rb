Rails.application.routes.draw do
  get 'login', to: 'sessions#new'
  delete 'logout',to: 'sessions#destroy'
  post 'login', to: 'sessions#create'
  get 'password_confirm', to: 'users#password_confirm'
  resources :sessions
  resources :users
  resources :articles
  resources :categories, except: [:destroy]
  root 'pages#home'
  get 'about', to: 'pages#about'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
