import Cat from "../src/index.js";

//
var cat = new Cat();
cat.use("./style.css");
cat.use("./ex1.js");    //同步加载
cat.useAsync("./ex2.js");   //异步加载
cat.useDef("./ex3.js");   //异步加载，使用Def模式

var s = cat.com.div();
s.style = {

}

s.class = "";

s.onclick = fn;

var i = s.com.input();
i.bind();

// 为页面元素定义动作
var com = cat.com.div()
com.act("zoom",(elem) => {
    elem.class = "";
    elem.style.width = "";
})


//watch 监视数据的变化
cat.watch("").before("fn1", (obj) => {
    obj.before;
    obj.after;
});        //数据变化之前调用
var id = cat.watch(["one","two","three"]).after((arry) => {
    //这里无法对任何被检测的对象进行修改
    arry["one"].before;
    arry["one"].after;
});                //数据变化之后调用

cat.unwatch("");  //取消所有监视
cat.watch("").unbind("fn1")             //取消某一个方法的绑定
cat.watch("").unbind(id)             //取消某一个方法的绑定


//状态管理
cat.status.add("init");     //添加状态
cat.status.init("init");    //设置初始状态
cat.status.triggerBefore("init",fn(pre,next));    //状态改变前触发，回调有两个参数，分别为前一状态和后一状态
cat.status.triggerAfter("init",fn(pre,next));     //状态改变后触发
//定义状态变化
cat.status.from("one").next("two")

class inputGroup extends Cat.com {
    super();
    constructor(){
        this.layout = Cat.layout.grid;
    }
}

//or

var inputGroup = Cat.com();
inputGroup.layout = Cat.layout.grid;

var s = inputGroup.instance();

cat.lie();

//动作
//状态
//变量监听
//数据绑定
//组件 class
//---在定义好组件后，通过new来创建实例，创建实例时会分配一个id