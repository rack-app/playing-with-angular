
desc 'start the dev server'
task :start do
  exec('foreman start -f Procfile.development')
end

desc 'build the SPA'
task :build do
  exec('ng build -prod')
end

desc 'run specs'
task :spec do
  require 'open3'

  [
    'rspec',
    'ng test --single-run',
    'ng e2e'
  ].each do |command|
    Open3.popen3(command) do |_stdin, stdout, stderr, wait_thr|
      while line = stdout.gets
        STDOUT.puts(line)
      end

      STDERR.puts(stderr.read)

      exit_status = wait_thr.value
      unless exit_status.success?
        require 'pp'
        pp exit_status
        exit(1)
      end
    end
  end
end
