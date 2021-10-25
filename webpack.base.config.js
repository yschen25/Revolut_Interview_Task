const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({size: 5});

module.exports = {
    entry: [
        './src/main.js'
    ],
    output: {
        path: `${__dirname}/dist`,
        filename: 'assets/js/bundle.[hash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: [
                    path.resolve(__dirname, '/node_modules/')
                ]
            },
            {
                test: /\.(gif|jpg|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './assets/images',
                            name: 'i.[hash].[ext]',
                            publicPath: '/assets/images'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/src/index.html`,
            filename: 'index.html',
            inject: 'body'
        }),
        // Multiple threads
        new HappyPack({
            id: 'babel',
            threadPool: happyThreadPool,
            loaders: ['babel-loader?cacheDirectory']
        })
    ],
    resolve: {
        extensions: ['.js', 'jsx'],
        modules: [
            path.resolve('./node_modules')
        ]
    },
    optimization: {
        runtimeChunk: {
            name: 'm'
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'v',
                    chunks: 'all'
                }
            }
        }
    }
};
