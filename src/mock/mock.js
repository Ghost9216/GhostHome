import Mock from 'mockjs'
export default Mock.mock('msg',getdata)
function getdata() {
  let article = [ ]
  for (let i = 0; i<20; i++){
       let newArticle ={
         title:Mock.mock('@ctitle'),
          content:Mock.mock('@cparagraph(10,20)')

       }
     article.push(newArticle)
  }
  return article

}
