RSpec.describe Measurement, type: :model do
  describe "associations" do
     it { should belong_to(:course) }
  it { should belong_to(:user) }
  end
  describe "validations" do
    it { is_expected.to validate_presence_of(:units) }
    it { is_expected.to validate_presence_of(:date_m) }
  end
end