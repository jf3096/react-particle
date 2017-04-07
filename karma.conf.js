const path = require('path');
module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'test/**/*.js'
        ],
        preprocessors: {
            'test/**/*.js': ['webpack', 'sourcemap']
        },
        babelPreprocessor: {
            options: {
                presets: ['airbnb']
            }
        },
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                loaders: [
                    {
                        test: /\.css$/,
                        loader: 'style-loader!css-loader?modules&localIdentName=[local]',
                        exclude: path.resolve(__dirname, 'node_modules'),
                    },
                ]
            },
            externals: {
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            }
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,

        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-sourcemap-loader',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],
    })
};