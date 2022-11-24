const { resolve } = require("path");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        static: path.join(__dirname,"dist"),
        compress: true,
        port: 3006
    }
}