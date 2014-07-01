$LOAD_PATH.unshift(File.join(File.dirname(__FILE__), 'lib'))

activate :bower
activate :bourbon
activate :livereload

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
