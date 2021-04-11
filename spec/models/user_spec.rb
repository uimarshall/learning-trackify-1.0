RSpec.describe User, type: :model do
  describe 'associations' do
    it { should have_many(:measurements) }
    it { should have_many(:courses) }

    it { should have_db_column(:created_at) }
    it { should have_db_column(:updated_at) }
  end
  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password) }
  end
end
