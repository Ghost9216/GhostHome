export function text1() {
  var imgList= document.getElementsByClassName('imglist')
  console.log('hello world')
  for (var i=0; i<imgList.length; i++) {
    console.log(i)
    (function f(i) {
     imgList[i].onclick = function () {
       console.log('hello world')
     }
  })(i)
  }

}
