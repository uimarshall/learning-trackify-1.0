module Api
  module V1
    class UsersController < ApplicationController
      skip_before_action :authorize_request, only: :create
      # skip_before_action :verify_authenticity_token, only: :create

      def create
        user = User.create!(user_params)
        auth_token = AuthenticateUser.new(user.email, user.password).call
        response = { message: Message.account_created, auth_token: auth_token }
        json_response(response, :created)
      end

      private

      def user_params
        params.permit(
          :name,
          :email,
          :password,
          :password_confirmation
        )
      end
    end
  end
end
