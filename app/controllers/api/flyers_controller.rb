class Api::FlyersController < ApplicationController
  before_action :set_flyer, only: [:show, :edit, :update, :destroy]

  # GET /flyers
  # GET /flyers.json
  def index
    @flyers = Flyer.all
    render :index
  end

  # GET /flyers/1
  # GET /flyers/1.json
  def show
    @flyer = Flyer.find(params[:id])
  end

  # GET /flyers/1/edit
  def edit
  end

  def create
    @flyer = flyer.new(flyer_params)
    @flyer.user_id = current_user.id
    if @flyer.save
      render 'api/flyers/show'
    else
      render json: @flyer.errors.full_messages, status: 422
    end
  end

  # PATCH/PUT /flyers/1
  # PATCH/PUT /flyers/1.json
  def update
    @flyer = Flyer.find(params[:id])
    if @flyer.update_attributes(flyer_params)
      render :show
    else
      render json: @flyer.errors.full_messages, status: 422
    end
  end

  # DELETE /flyers/1
  # DELETE /flyers/1.json
  def destroy
    @flyer = Flyer.find(params[:id])
    if @flyer.destroy
      render json: ['success']
    else
      render json: ['error'], status: 404
    end
  end

  private
    def flyer_params
      params.require(:flyer).permit(:creator, :date, :price, :presented_by)
    end
end
