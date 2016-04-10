var express = require('express'),
  app = express(),
  exec = require('child_process').exec;

  // app.use(app.router);
  //app.use(express.static(__dirname + '/public'));

  //exec("../docker_start.sh", function(err, stdout, stderr) {
  //  console.log("docker_start.sh error \nerr:" + err + "\nstdout:" + stdout + "\nstderr:" + stderr);
  //});

  app.listen(3000);
  console.log('server starting');

  app.all('/webhook', function(req, res) {
    console.log('push hook!!');
    exec("../docker_start.sh", function(err, stdout, stderr) {
      console.log("docker_start.sh error \nerr:" + err + "\nstdout:" + stdout + "\nstderr:" + stderr);
    });
  });

//  app.listen(3000);
/*
  app.all('/webhook', function(req, res) {
    var cmd = exec("git pull", {
        cwd: conf.deploy.dir
    }, function(error, stdout, stderr) {
        if (error) {
            debug(">  ERROR (error): " + error);
        }
        if (stderr && error) {
            debug(">  ERROR (error): " + error);
        }
        debug("> DONE! " + stdout);
    });
	res.send("success");
});
*/
