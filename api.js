var restify = require("restify");
 
var swagger = require('./lib/swagger-restify');

var port = 8081

var server = restify.createServer({
    name: 'mh_api',
    version: 'v1.0.0'
});



// 配置swagger
swagger.init(server, {
    swagger: '2.0', // or swaggerVersion as backward compatible
    info: {
        version: 'v1.0',
        title: 'MH API',
        description: 'mh rest api',
        contact: {
            name: 'Songlijun',
            email: 'songlijun@itjh.com.cn'
        }
    },
    schemes: [
        'http',
        'https'
    ],
    tags: [
        {
            name: 'user',
            description: 'user api'
        }
    ],
    basePath:"/v1.0",

    host: 'localhost:' + port,
    // apis: ['./movieApi.js'],

    produces: [
        'application/json',
        'text/xml'
    ],
    consumes: [
        'application/json',
        'text/xml'
    ],

    // swagger-restify proprietary
    swaggerURL: '/swagger',
    swaggerJSON: '/swagger.json',
    swaggerUI: './public'
});


server.listen(port, function() {
    console.log('%s listening at %s', server.name, server.url);
});