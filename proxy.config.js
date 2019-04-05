const Agent = require('agentkeepalive');

module.exports = {
        '/Api': {
            target: 'http://localhost:8080',
            secure: false,
            pathRewrite: {
              '^/Api': ''
            },
            agent: new Agent({
                maxSockets: 100,
                keepAlive: true,
                maxFreeSockets: 10,
                keepAliveMsecs: 100000,
                timeout: 6000000,
                freeSocketTimeout: 90000
            }),
            onProxyRes: proxyRes => {
                let key = 'www-authenticate';
                proxyRes.headers[key] = proxyRes.headers[key] &&
                    proxyRes.headers[key].split(',');
            }
        }
};
