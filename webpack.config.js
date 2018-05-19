const options = {
    APP_VERSION: "1.0.0",
    PORT: 5000,
    HOST: "0.0.0.0"
};

module.exports = function (env) {
    if (env) {
        options.sourceMap = "source-map";
        return require(`./webpack.${env}.js`)(options)
    } else {
        options.sourceMap = "source-map";
        return require(`./webpack.dev.js`)(options)
    }
}