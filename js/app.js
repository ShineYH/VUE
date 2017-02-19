/**
 * Created by shine on 2017/2/14.
 */

var list = [
    /*{title:"吃饭", isChecked:false},   //状态为false 则为不选中
    {title:"睡觉",isChecked:true}     //状态为true 则为选中*/
];

new Vue({
    el:".main",
    data:{
        list:list,
        todo:""
    },
    methods:{                     // ！！！！！Vue 逻辑代码里面，尽量不要再操作dom，要使用vue本身双向绑定的功能，dom的任何变化，都可以在数据里面绑定体现，直接取数据即可！！！！！
        addTodo:function(){       //如何既传参数，也将事件处理函数传过来  html页面 传一个$event对象
           // console.info(ev);
           // if(ev.keyCode ===13){               <!-- keyup.enter  事件修饰符，判断enter键 这里即可不做判断-->
               /* this.list.push({                   //this 指向的都是Vue的根实例
                    title:ev.target.value
                });*/
          //  }
            // 上面方法还是操纵了dom元素，以下设计一个方法，不用操纵dom，data里面自定义一个属性，与input值绑定，然后取这个里面的值
            this.list.push({
                title:this.todo,
                isChecked:false
             });
            this.todo = "";   //渲染之后 还要清空
        },
         deleteTodo(todo){    //es6 可以这么写    删除任务，只要删除list列表里面的值就好了，不要操作dom！！
            var index = this.list.indexOf(todo);
            this.list.splice(index,1);
         }
    }
});