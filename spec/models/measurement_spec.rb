RSpec.describe Measurement, type: :model do
  describe 'associations' do
    it { should belong_to(:course) }
    it { should belong_to(:user) }
    it { should have_db_column(:user_id) }
    it { should have_db_column(:course_id) }
  end
  describe 'validations' do
    it { is_expected.to validate_presence_of(:units) }
    it { is_expected.to validate_presence_of(:date_m) }
  end
end
