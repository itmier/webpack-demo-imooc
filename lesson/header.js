/*
 * @Author: Tmier
 * @Date: 2021-02-09 11:14:38
 * @LastEditTime: 2021-02-09 14:10:04
 * @Description:
 * @LastModifiedBy: Tmier
 */
function Header() {
  var dom = document.getElementById('root');
  var header = document.createElement('div')
  header.innerText = 'header'
  dom.append(header)
}
// export default Header
module.exports = Header