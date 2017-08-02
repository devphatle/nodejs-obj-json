var book = {
    "name": "nodejs-freetuts",
    "version": "1.0.0",
    "description": "NodeJS Free Course",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "ThehalfHeart",
    "license": "ISC",
    "dependencies": {
        "node-persist": "0.0.8"
    }
}

console.log("======= Call attribute name obj book type json ========");

console.log(book.name);


var book1 = function(name){
    console.log(name)
}

book1("node js basic");