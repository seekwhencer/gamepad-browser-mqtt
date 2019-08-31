const
    fs = require('fs-extra'),
    ConfigClass = require('./config.js');

module.exports = class extends ConfigClass {
    constructor() {
        super();

        this.config = {
            mode: 'production',
            entry: './src/app.js',
            output: {
                filename: 'js/bundle.js',
                path: `${this.appPath}/dist/prod`,
            },
            plugins: [
                {
                    apply: (compiler) => {
                        compiler.hooks.afterEmit.tap('Complete', (compilation) => {
                            console.log('>>> HOOKED');
                            fs.removeSync(`${this.appPath}/docs`);
                            fs.mkdirSync(`${this.appPath}/docs`);
                            fs.mkdirSync(`${this.appPath}/docs/js`);

                            fs.copyFileSync(`${this.appPath}/dist/prod/js/bundle.js`, `${this.appPath}/docs/js/bundle.js`);
                            fs.copyFileSync(`${this.appPath}/public/index.html`, `${this.appPath}/docs/index.html`);
                        });


                    }

                }
            ]
        };
        return this.mergeConfig();
    };
};