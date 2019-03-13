
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    module: {
        rules: [
            {
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader: "babel-loader"
            }
        },{
            test:/\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    modules:true,
                    importLoader:1,
                    localIdentName:"[name]_[local]_[hash:64]",
                    sourceMap:true,
                    minimize:true
                }
            }]
            }]
    },
    plugins: [  new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    })]
};