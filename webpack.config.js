const path =  require("path");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'loader1',
            enforce: 'pre'
        },{
            test: /\.js$/,
            use: 'loader2'
        },{
            test: /\.js$/,
            use: 'loader3',
            enforce: 'post'
        }]
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'loaders')]
    }
}