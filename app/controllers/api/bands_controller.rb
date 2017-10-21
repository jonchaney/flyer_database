class Api::BandsController < ApplicationController
  def show
    @band = Band.find(params[:id])
  end

  def create
    @band = Band.new(band_params)
    if @band.save
      render 'api/bands/show'
    else
      render json: @band.errors.full_messages, status: 422
    end
  end

  def index
    @bands = Band.all
    render :index
  end

  def update
    @band = Band.find(params[:id])
    if @band.update_attributes(band_params)
      render :show
    else
      render json: @band.errors.full_messages, status: 422
    end
  end

  def destroy
    @band = Band.find(params[:id])

    if @band.destroy
      render json: ['success']
    else
      render json: ['error'], status: 404
    end
  end

  private

  def band_params
    params.require(:band).permit(:name)
  end
end
