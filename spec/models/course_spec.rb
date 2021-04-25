RSpec.describe Course, type: :model do
  describe 'associations' do
    it { should have_many(:measurements).dependent(:destroy) }
    it { should have_many(:users) }

    it { should have_db_column(:created_at) }
    it { should have_db_column(:updated_at) }
  end
  describe 'validations' do
    it { should validate_presence_of(:name) }
  end
end
