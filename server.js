import express from 'express';

const port = 1982;

let app = new express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.use('/src', express.static(__dirname + '/public'));

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

export default app;
