compass_config do |config|
  config.output_style = :compact
end

require 'slim'
require 'dotenv'
Dotenv.load

activate :livereload
activate :directory_indexes

set :js_dir, 'assets/javascripts'
set :css_dir, 'assets/stylesheets'
set :images_dir, 'assets/images'

page '/templates/*', :layout => false
# Add bower's directory to sprockets asset path
after_configuration do

  #@bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
  #sprockets.append_path File.join "#{root}", @bower_config["directory"]

end

# Build-specific configuration
configure :build do

  #activate :minify_css
  #activate :minify_javascript
  activate :asset_hash

  # activate :relative_assets
  # set :relative_links, true

end

activate :s3_sync do |s3_sync|
  s3_sync.bucket                      = ENV['S3_BUCKET'] # The name of the S3 bucket you are targetting. This is globally unique.
  s3_sync.region                      = 'eu-west-1'      # The AWS region for your bucket.
  s3_sync.aws_access_key_id           = ENV['ACCESS_KEY_ID']
  s3_sync.aws_secret_access_key       = ENV['SECRET_ACCESS_KEY']
  #s3_sync.delete                     = false # We delete stray files by default.
  #s3_sync.after_build                = false # We do not chain after the build step by default.
  #s3_sync.prefer_gzip                = true
  #s3_sync.path_style                 = true
  #s3_sync.reduced_redundancy_storage = false
  #s3_sync.acl                        = 'public-read'
  #s3_sync.encryption                 = false
  #s3_sync.prefix                     = ''
end
