const { whenProd } = require("@craco/craco");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const fs = require('fs')
const path = require('path');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    webpack: {
        plugins: [
            new HtmlWebpackPlugin(
                {
                    inject: true,
                    filename: resolveApp('build/ssifragment.html'),
                    scriptLoading: 'defer',
                    template: resolveApp('public/ssifragment.html'),
                    minify: {
                        removeComments: true,
                        collapseWhitespace: true,
                        removeRedundantAttributes: true,
                        useShortDoctype: true,
                        removeEmptyAttributes: true,
                        removeStyleLinkTypeAttributes: true,
                        keepClosingSlash: true,
                        minifyJS: true,
                        minifyCSS: true,
                        minifyURLs: true,
                    },
                }
            )
        ],
        configure: (webpackConfig, { env, paths }) => { return webpackConfig; }
    },
}