module.exports = {
    devServer: {
        proxy: {
            '/': {
                target: 'http://192.168.31.110:8081/',
                changeOrigin: true,
                pathRewrite: {
                    '^/':''
                }
            }
        }
    }
}