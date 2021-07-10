const CracoLessPlugin = require('craco-less');

module.exports = {
    babel: {
        plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }], //装饰器
            [
                'import',
                {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true, //设置为true即是less
                },
            ],
        ],
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#EB5C62' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    //配置代理解决跨域
    devServer: {
        proxy: {
            '/api': {
                target: 'http://baidu.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
};
