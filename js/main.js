// designed by stevenli 20161219
var app = new Vue({
  el:'#app',
  data:{
    message:'Hello Vue!'
  }
})

var app2 = new Vue({
  el:'#app-2',
  data:{
    message:'你登录这个页面的时间是'+ new Date()
  }
})

var app3 = new Vue({
  el:'#app-3',
  data:{
    seen:true
  }
})

var app4 = new Vue({
  el:'#app-4',
  data:{
    seen:false
  }
})
