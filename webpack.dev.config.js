const merge = require('webpack-merge');
const config = require('./webpack.base.config.js');

module.exports = merge(config, {
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devServer: {
        host: 'localhost',
        inline: true,
        port: 3310,
        open: true
    },
    mode: 'development'
});
