# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.destroy_all
Band.destroy_all

event = Event.create!(price: 5, 
                      date: "04/01/2017", 
                      poster_creator: "Rebecca Diablo", 
                      venue: "Pleasure Cove", 
                      city: "San Francisco")
event.image = File.open('app/assets/images/1.jpg')
event.save!

b1 = Band.create!(name: "Swayed")
b2 = Band.create!(name: "Mr. Wrong")
b3 = Band.create!(name: "Froogies Groovies")

event.bands << b1
event.bands << b2
event.bands << b3
