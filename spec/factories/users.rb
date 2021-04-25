FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    email { 'exampleuser@test.com' }
    password { 'userpass' }
  end
end
