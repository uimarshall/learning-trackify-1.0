source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.6'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.3', '>= 6.0.3.5'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 4.1'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.7'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
gem 'bcrypt', '~> 3.1.7'
# Use 'jwt' for authentication
gem 'jwt'
# gem "rack-cors"
# Use faker for fake data
gem 'faker', git: 'https://github.com/stympy/faker'

# Use figaro to set ENV variables
# gem 'dotenv-rails', '~> 2.7', '>= 2.7.6'
gem 'figaro', '~> 1.2'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'
# Use 'fast_jsonapi' for serilaize api generation
gem 'fast_jsonapi'

# Use rubocop for linting
gem 'rubocop', '~>0.81.0'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.2', require: false

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
# gem 'rack-cors'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'rspec-rails', '~> 5.0', '>= 5.0.1'
end

group :development do
  gem 'hirb', '~> 0.7.3'
end

group :production do
  gem 'rails_12factor'
end

group :test do
  gem 'database_cleaner'
  gem 'factory_bot_rails', '~> 6.1'
  gem 'shoulda-matchers', '~> 4.5', '>= 4.5.1'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
