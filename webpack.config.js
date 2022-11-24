const { resolve } = require("path");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output:  {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js",
        publicPath:  "./"
    },
    resolve: {
        extensions: [".js",".jsx"],
        alias: {
            "@components": path.resolve(__dirname,"./src/components/"),
            "@styles": path.resolve(__dirname,"./src/styles/")
        }
    },
    mode: "production",
    module: {
        rules: [
            //extension de js y jsx
            {
                test: /\.js|jsx$/,
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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
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
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    }
}