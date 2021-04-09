# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create!(name: 'John', email: 'john@test.com', password: 'pass123', password_confirmation: 'pass123')

courses = [
  ['fab node-js', 'NodeJs', 'A good career course'],
  ['fab css3', 'CSS3', 'A better course'],
  ['fab react', 'React', 'A developmental course'],
  ['fab java', 'Java', 'Beginner course'],
  ['fab python', 'Python', 'Intermediate course'],
  ['fab html5', 'HTML 5', 'For advance learners'],
  ['fab js', 'JavaScript', 'For advance learners'],
  ['fab database',  'Mongodb', 'A higher level course'],
  ['fab trello', 'Project management', 'For advance learners'],
  ['fab amazon', 'AWS', 'For advance learners'],
  ['fab android', 'Mobile', 'For advance learners'],
  
]
courses.each do |x|
  user.courses << Course.create(name: x[1], desc: x[2], image: x[0])
end

user.courses.each do |course|
  14.times do
    course.measurements.create({
      date_m: Faker::Date.backward(days: 14),
      units: Faker::Number.number(digits: 2),
      user_id: user.id
      })
  end
end
