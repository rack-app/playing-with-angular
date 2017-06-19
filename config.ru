require 'rack/app'

class PlayWithAngular < Rack::App
  serve_files_from '/dist'

  get do
    serve_file Rack::App::Utils.pwd('dist', 'index.html')
  end
end

run PlayWithAngular
