module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            //配置别名 这里配置了别名
            alias: {
                //   '@':'src' 默认配置的别名
                server: '@/server',
                // assets: '@/assets',
                utils: '@/utils',
                components: '@/components',
                teaComponents: '@/teaComponents',
                router: '@/router',
                tViews: '@/tViews',
                comViews: '@/comViews',
                // 'img':'@/assets/img'
            },
        },
    },
    publicPath: '/',
    // 开发代理
    // devServer: {
    //     proxy: 'http://localhost:4000',
    // },
}
