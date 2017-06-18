// designed by stevenli 20161219
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '你登录这个页面的时间是' + new Date()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        seen: false
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        todos: [
            { text: '权力的游戏' },
            { text: '冰与火之歌' },
            { text: '异鬼' }
        ]
    }
})

// 处理用户输入
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: "Hello Google!"
    },
    methods: {
        reversemessage: function() {
            this.message = this.message.split('').reverse().join('') //完整动作将message分拆，反向排列，组合成字符串
                //this.message=this.message.split('')  //将message分拆成字符加上''
                //this.message=this.message.split('').reverse() //将message字符反向排列
            console.log(typeof 'message')
        }
    }
})

//双向数据绑定
// js中严格区分大小写Vue
var app7 = new Vue({
    el: '#app-7',
    data: {
        message: 'GOOGLE MAP'
    }
})

// 定义Vue组件
Vue.component('todo-item', {
    // todo-item 组件现在接受一个"prop"类似于一个自定义属性这个属性名为 todo
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app8 = new Vue({
    el: '#app-8',
    data: {
        groceryList: [
            { text: '蔬菜' },
            { text: '奶酪' },
            { text: '随便其他什么人吃的东西' }
        ]
    }
})

//
Vue.component('eat-something', {
    // template: '<li>郭德纲郭德纲郭德纲郭德纲于谦于谦</li>'
    template: '<p>郭德纲郭德纲郭德纲郭德纲于谦于谦</p>'
})

var app9 = new Vue({
    el: '#app-9',
    data: { //当template里面有东西你又不需要额外添加内容时data可要可不要
        seen: true
    }
})

var app10 = new Vue({
    el: "#app-10",
    data: {
        message: 'Google'
    },
    computed: {
        fanxiangmessage: function() {
            return this.message.split('').reverse().join('')
        }
    }
})