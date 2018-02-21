const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        index: ["babel-polyfill", path.join(__dirname, 'src/index.ts')],
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }),
    ],
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js",
        libraryTarget: "umd",
    },
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: [/__tests__/, /__mocks__/, /node_modules/],
            use: [
                {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["es2015", { modules: false }],
                        ],
                        plugins: ["syntax-dynamic-import"],
                        cacheDirectory: true,
                    },
                },
                {
                    loader: "ts-loader",
                    options: {
                        compilerOptions: {
                            // import 文を require に書き換えない.
                            "module": "esnext",
                            "moduleResolution": "node",
                        },
                    },
                },
            ]
        }],
    },
    target: "node",
};