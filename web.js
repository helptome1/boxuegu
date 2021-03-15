// 1.导入express模块
const express = require('express');
// 创建express的服务器实例
const app = express();

// 托管静态资源文件夹
app.use(express.static('views'));

// 调用app.listen方法，指定端口号并启动web服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})