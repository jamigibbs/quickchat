var Hapi = require('hapi'),
    path = require('path'),
    //port = process.env.PORT || 3000,
    server = new Hapi.Server(process.env.PORT || 3000, '0.0.0.0'),
    routes = {
        css: {
            method: 'GET',
            path: '/css/{path*}',
            handler: createDirectoryRoute('css')
        },
        js: {
            method: 'GET',
            path: '/js/{path*}',
            handler: createDirectoryRoute('js')
        },
        assets: {
            method: 'GET',
            path: '/assets/{path*}',
            handler: createDirectoryRoute('assets')
        },
        templates: {
            method: 'GET',
            path: '/templates/{path*}',
            handler: createDirectoryRoute('templates')
        },
        spa: {
            method: 'GET',
            path: '/{path*}',
            handler: {
                file: path.join(__dirname, '/dist/index.html')
            }
        }
    };

server.route([ routes.css, routes.js, routes.assets, routes.templates, routes.spa ]);
server.start( onServerStarted );

function onServerStarted() {
  console.log('Server started at [' + server.info.uri + ']');
}

function createDirectoryRoute( directory ) {
    return {
        directory: {
            path: path.join(__dirname, '/dist/', directory)
        }
    };
}

module.exports = server;
