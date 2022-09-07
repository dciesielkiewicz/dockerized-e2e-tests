FROM ruby:3.1.2

RUN apt-get update -qq && apt-get install -y postgresql-client

RUN mkdir /cypress_rails
WORKDIR /cypress_rails

COPY Gemfile Gemfile.lock ./
RUN gem install bundler --no-document
RUN bundle install --no-binstubs --jobs $(nproc) --retry 3

ADD . /cypress_rails

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
