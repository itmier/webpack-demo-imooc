/*
 * @Author: Tmier
 * @Date: 2021-02-09 11:14:50
 * @LastEditTime: 2021-02-09 13:00:26
 * @Description:
 * @LastModifiedBy: Tmier
 */
function Sidebar() {
  var dom = document.getElementById('root');
  var sidebar = document.createElement('div')
  sidebar.innerText = 'sidebar'
  dom.append(sidebar)
}
export default Sidebar
