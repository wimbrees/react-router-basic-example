var webpack = require('webpack');

var debug = false;

module.exports = {
    devtool: "#inline-source-map",
    entry: debug ? [
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        "./src/app.js"
    ] : "./src/app.js",
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    plugins: debug ? [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),        
    ] : [],
    module: {
        loaders: [
            {
                test:/.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: debug ? ['react-hot', 'babel'] : ['babel'],
                // 'babel-loader' is also a legal name to reference,
                // react-hot must appear before babel 
            }
        ]
    },
    resolve: {
        // You can now require('file') instead of require('file.jsx')
        extensions: ['', '.js', '.jsx'] 
    },
    devServer: {
        hot:true
    }
};

// Set debug var to true and $ webpack-dev-server
// OR Use http-server
// historyApiFallback needed when using browserHistory instead of hashHistory (in React Router)