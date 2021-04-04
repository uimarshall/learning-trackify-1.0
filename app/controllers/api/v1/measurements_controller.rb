module Api
  module V1
    class MeasurementsController < ApplicationController
      before_action :set_course, except: %i[my_measurements]
      before_action :set_course_measurement, only: %i[show update destroy]
      def index
        @measurements = Measurement
          .where(course_id: @course.id, user_id: current_user.id).last_week.order(id: :desc)
        # render json: MeasurementSerializer.new(@measurements).serialized_json
        json_response(@measurements)
      end

      def my_measurements
        measurements = current_user.measurements.date_m(params[:date] || '')
        # render json: MeasurementSerializer.new(measurements).serialized_json
        json_response(measurements)
      end

      # Show single measurement

      def show
        json_response(@measurement)
      end

      def create
        p params
        params = measurement_params
        params['user_id'] = current_user.id
        measure = @subject.measurements.create!(params)
        json_response(measure, :created)
        render json: MeasurementSerializer.new(measure, :created).serialized_json
      end

      def update
        @measurement.update(measurement_params)
        head :no_content
      end

      def destroy
        if @measurement.destroy
          head :no_content
        else
          render json: { error: @measurement.errors.messages }, status: 422

        end
      end

      private

      def measurement_params
        params.require(:measurement).permit(:units, :date_m)
      end

      def set_course
        @course = Course.find(params[:course_id])
      end

      def set_course_measurement
        @measurement = @course.measurements.find_by!(id: params[:id]) if @course
      end
    end
  end
end
