const
    ConfigClass = require('./config.js');

module.exports = class extends ConfigClass {
    constructor() {
        super();

        this.config = {
            mode: 'development',
            output: {
                filename: 'js/bundle.js',
                path: `${this.appPath}/dist/dev`,
                hotUpdateChunkFilename: `../../.hot/hot-update.js`,
                hotUpdateMainFilename: `../../.hot/hot-update.json`
            },

            devServer: {
                contentBase: ['public', 'dist/dev'],
                publicPath: '/',
                compress: true,
                port: 9000,
                hot: true,
                index: 'public/index.html',
                writeToDisk: true,
                watchOptions: {
                    poll: true
                },
                watchContentBase: true
            }
        };
        return this.mergeConfig();
    };
};