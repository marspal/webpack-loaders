const path =  require("path");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test:  /\.less$/,
            use: [path.resolve(__dirname, './loaders/style.js'),path.resolve(__dirname, './loaders/less.js')]
        }]
    }
}