const { resolve } = require("path");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output:  {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js",".jsx"]
    },
    module: {
        rules: [
            //extension de js y jsx
            {
                test: /\.js$|jsx/,
                exclude: / node_modules /,
                use: {
                    loader: "babel-loader"
                }
            },
            //extension de html
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            //extension de css
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"

                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    devServer: {
        static: path.join(__dirname,"dist"),
        compress: true,
        port: 3006
    }
}