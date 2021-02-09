/*
 * @Author: Tmier
 * @Date: 2021-02-09 15:07:45
 * @LastEditTime: 2021-02-09 15:20:25
 * @Description:
 * @LastModifiedBy: Tmier
 */
// 引入node的path模块
const path = require('path')
module.exports = {
  entry: './src/index.js', // 打包入口
  output: {
    filename: 'bundle.js', // 打包文件名
    path: path.resolve(__dirname,'dist') // 打包文件路径
  }
}
