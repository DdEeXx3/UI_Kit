module.exports = {
    entry: ["./site/app.js"],//path relative to this file
    output: {
        filename: "./dist/app.bundle.js"//path relative to this file
    },
    devServer: {
        hot: true
    },
    
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
              },
            ],
          },
        ]
    }
};