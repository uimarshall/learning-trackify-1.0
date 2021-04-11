require 'rails_helper'

RSpec.describe 'UserCourses', type: :request do
  let(:user) { create(:user) }
  let!(:courses) { create_list(:course, 10) }
  let(:headers) { valid_headers }

  describe 'POST /api/v1/register_course' do
    let(:valid_attributes) { { course_id: courses.last.id }.to_json }

    context 'when the request is valid' do
      before { post '/api/v1/register_course', params: valid_attributes, headers: headers }

      it 'creates a user course relationship' do
        expect(json['id']).to eq(courses.last.id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the request is duplicated' do
      before { post '/api/v1/register_course', params: valid_attributes, headers: headers }

      it 'creates a user course just the first time relationship' do
        expect(json['id']).to eq(courses.last.id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'try to duplicate' do
        post '/api/v1/register_course', params: valid_attributes, headers: headers
        expect(json['id']).to eq(courses.last.id)
        expect(response).to have_http_status(200)
        expect(user.courses.count).to eq(1)
      end
    end

    context 'when the request is invalid' do
      let(:invalid_attributes) { { course_id: 0 }.to_json }
      before { post '/api/v1/courses', params: invalid_attributes, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'DELETE /api/v1/unregister_course/:id' do
    let(:course_valid) { user.courses << courses.first }
    let(:course_valid2) { user.courses << courses.first }

    context 'when the request is valid' do
      before { delete "/api/v1/unregister_course/#{course_valid[0].id}", headers: headers }

      it 'remove relationship user - course' do
        expect(user.courses.count).to eq(0)
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end

    context 'when the request is invalid' do
      before { delete '/api/v1/unregister_course/0', headers: headers }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end
  end
end
