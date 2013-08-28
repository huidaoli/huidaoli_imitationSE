function pic(id1,id2) {
  var obj1 = document.getElementById(id1);
  var obj2 = document.getElementById(id2);
  var lists = obj1.getElementsByTagName("img");
  var j = 0;
  for(var i=0; i < lists.length; i++){
    lists[i].onmouseover = (function(i){
      return function(){
        j = i;
        obj2.src = obj1.getElementsByTagName('img')[j].attributes['pic'].value;
	obj2.parentNode.href = obj1.getElementsByTagName('img')[j].parentNode.href;
      }
    })(i)
  }
  return  setInterval(function() {
    if(j > lists.length-1) {
      j = 0;
    }
    obj2.src = obj1.getElementsByTagName('img')[j].attributes['pic'].value;
    obj2.parentNode.href = obj1.getElementsByTagName('img')[j].parentNode.href;
    j++;
  },5000);
}