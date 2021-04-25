require 'rails_helper'

RSpec.describe 'Courses API', type: :request do
  let(:user) { create(:user) }
  let!(:courses) { create_list(:course, 10) }
  let(:course_id) { courses.first.id }

  let(:headers) { valid_headers }

  describe 'GET /api/v1/courses' do
    before { get '/api/v1/courses', params: {}, headers: headers }
    it 'returns courses' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /api/v1/courses/:id' do
    before { get "/api/v1/courses/#{course_id}", params: {}, headers: headers }

    context 'when the record exists' do
      it 'returns the course' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(course_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:course_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Course/)
      end
    end
  end

  describe 'POST /api/v1/courses' do
    let(:valid_attributes) { { name: 'HTML5', desc: 'asdf lasdf asfas' }.to_json }

    context 'when the request is valid' do
      before { post '/api/v1/courses', params: valid_attributes, headers: headers }

      it 'creates a course' do
        expect(json['name']).to eq('HTML5')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      let(:invalid_attributes) { { name: nil }.to_json }
      before { post '/api/v1/courses', params: invalid_attributes, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(json['message'])
          .to match(/Validation failed: Name can't be blank/)
      end
    end
  end

  describe 'PUT /api/v1/courses/:id' do
    let(:valid_attributes) { { name: 'HTML5.1' }.to_json }

    context 'when the record exists' do
      before { put "/api/v1/courses/#{course_id}", params: valid_attributes, headers: headers }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  describe 'DELETE /api/v1/courses/:id' do
    before { delete "/api/v1/courses/#{course_id}", params: {}, headers: headers }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end

  describe 'GET /api/v1/courses/mine' do
    it 'set a course and returns my courses with status 200' do
      user.courses << courses.first
      get '/api/v1/courses/mine', params: {}, headers: headers
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
      expect(response).to have_http_status(200)
    end
  end
end
