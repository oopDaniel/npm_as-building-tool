
var app = module.exports = require('koa')();

var html =
    `<html>
        <head>
          <meta charset="UTF-8">
          <title>testing pages</title>
          <script src="//localhost:9091"></script>
        </head>
        <body>
            Page loaded at: <span id="demo"></span>
        </body>
        <script>
            document.getElementById('demo').innerHTML = new Date();
        </script>
    </html>`;

app.use(function *() {
  if (this.request.path === '/client') {
      this.body = html;
      return;
  }
    this.body = 'KOA works!';
    // this.body += 'KOA works well!';
});

var port = process.env.PORT || (process.argv[2] || 3000);
port = (typeof port === "number") ? port : 3000;

if (!module.parent) { app.listen(port); }

console.log('App started. Listening on port:' + port);
