const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            environment: path.resolve(__dirname, 'src', 'environment'),
            styles: path.resolve(__dirname, 'src', 'styles'),
        },
    },
    devServer: {
        contentBase: './src',
        publicPath: '/output',
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }, {
                test: /\.(jpg|png|svg)$/,
                exclude: /node_modules/,
                use: [{
                  loader: 'file-loader',
                  options: {
                      name: "[name].[ext]",
                      outputPath: "imgs/"
                  }
                }]
            }
        ]
    }
}