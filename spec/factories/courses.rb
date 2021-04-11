FactoryBot.define do
  factory :course do
    name { Faker::Educator.course }
    desc { Faker::Lorem.paragraph(sentence_count: 2) }
  end
end
