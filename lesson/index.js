/*
 * @Author: Tmier
 * @Date: 2021-02-09 11:08:02
 * @LastEditTime: 2021-02-09 14:09:19
 * @Description:
 * @LastModifiedBy: Tmier
 */
// ES Module 的模块引入方式
// import Header from './header'
// import Content from './content'
// import Sidebar from './sidebar'

// CommonJS的模块引入
var Header = require('./header.js')
var Sidebar = require('./sidebar.js')
var Content = require('./content.js')
new Header();
new Content();
new Sidebar();