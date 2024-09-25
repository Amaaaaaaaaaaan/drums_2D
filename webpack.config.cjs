// webpack.config.js
const path = require('path');

module.exports = {
    mode: 'production', // or 'development'
    entry: './src/index.js', // Adjust this path to your entry file
    output: {
        filename: 'main.js', // Output bundle filename
        path: path.resolve(__dirname, 'dist'), // Output path
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Assuming you are using Babel
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
};
