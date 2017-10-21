json.id event.id
json.price event.price
json.date event.date
json.presented_by event.presented_by
json.poster_creator event.poster_creator
json.venue event.venue
json.city event.city
json.address event.address
json.image_url asset_path(event.image.url)

event.bands.each do |band|
  json.set! "bands" do
    json.set! band.id do 
      json.name band.name
    end
  end 
end