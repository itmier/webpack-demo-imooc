/*
 * @Author: Tmier
 * @Date: 2021-02-09 11:14:43
 * @LastEditTime: 2021-02-09 13:00:36
 * @Description:
 * @LastModifiedBy: Tmier
 */
function Content() {
  var dom = document.getElementById('root');
  var content = document.createElement('div')
  content.innerText = 'content'
  dom.append(content)
}
export default Content
