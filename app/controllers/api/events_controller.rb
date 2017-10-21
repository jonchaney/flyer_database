class Api::EventsController < ApplicationController
  def show
    @event = Event.find(params[:id])
  end

  def create
    @event = Event.new(event_params)
    puts @event
    p @event
    if @event.save
      render 'api/events/show'
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def index
    @events = Event.all
    render :index
  end

  def update
    @event = Event.find(params[:id])
    if @event.update_attributes(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])

    if @event.destroy
      render json: ['success']
    else
      render json: ['error'], status: 404
    end
  end

  private

  def event_params
    params.require(:event).permit(:price, :date, :presented_by, :poster_creator, :venue, :city, :address, :image)
  end
end
