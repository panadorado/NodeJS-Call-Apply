//const Emitter = require("./emitter/emitter");
const Emitter = require("events");

const util = require('util');

const emitter = new Emitter();

const obj = {
    name: "Phạm Quốc Cường",
    message: function(type, listener) {

        console.log(`\n${this.name}`);

        emitter.on(`${type}`, ()=> {
            console.log(`${listener}`);
        });

        emitter.emit(`${type}`);
    }
}

obj.message("welcome", "Chào mừng bạn đến với lập trình NodeJS");

obj.message.call( { name: "Trần Đức Lĩnh" }, "contact", "my blog https://dev-note.cf");

obj.message.apply( { name: "Cao Xuân Viễn" }, ["info", "Đam mê về  nghệ thuật múa bài tây !"]);

// Dialog Kế thừa  emitter
function Dialog()  {
    this.message = "\nHello World";
}

util.inherits(Dialog, Emitter);

Dialog.prototype.sayhello = function() {
    console.log(this.message);
    this.emit("hello");
}

const dialog = new Dialog();

dialog.on("hello", () => {
    console.log("Welcome to NodeJS");
})  

dialog.sayhello();