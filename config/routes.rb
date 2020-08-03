Rails.application.routes.draw do
  # get 'game/index'
  # root 'game#index'
  devise_for :users
  # get 'messages/index'
  # resources :articles
  root 'groups#index'
  resources :game, only: [:index]
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  end
end
