const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ["./sass/app.scss"],
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../build/ui_kit.css',
        }),
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'

            ],
        }]
    }
};
