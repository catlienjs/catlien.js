import Cat from "../src/index.js";

var cat = new Cat();
cat.use("./style.css");

var s = cat.com.div();
s.style = {

}

s.class = "";

s.onclick = fn;

var i = s.com.input();
i.bind();
cat.watch("",fn);
cat.watch([],fn);
cat.lie();

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