const fastify = require('fastify')();
  
fastify.get('/g', function (req, res) {
    res.redirect("https:/google.com");
  })
  
fastify.listen(3000);