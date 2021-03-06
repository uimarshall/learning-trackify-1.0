class CourseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image, :desc, :created_at

  has_many :measurements, dependent: :destroy
  has_many :enrolments
  has_many :users, through: :enrolments
end
