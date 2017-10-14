Rails.application.routes.draw do
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show]
    resources :flyers, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy, :show, :index]
  end

  root "static_pages#root"
end
