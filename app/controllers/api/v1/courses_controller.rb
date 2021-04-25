module Api
  module V1
    class CoursesController < ApplicationController
      before_action :set_course, only: %i[show update destroy]
      # skip_before_action :verify_authenticity_token

      def index
        @courses = Course.all
        json_response(@courses)
      end

      def my_courses
        @courses = current_user.courses
        json_response(@courses)
      end

      def create
        @course = Course.create!(course_params)
        json_response(@course, :created)
      end

      def show
        json_response(@course)
      end

      def update
        @course.update(course_params)
        head :no_content
      end

      def destroy
        @course.destroy
        head :no_content
      end

      private

      def course_params
        params.permit(:name, :desc)
      end

      def set_course
        @course = Course.find(params[:id])
      end
    end
  end
end
