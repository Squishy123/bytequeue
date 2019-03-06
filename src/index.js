const bytenode = require('bytenode');

/*
//pass function as param
let main = (() => {
    function func() { console.log("Hello World!") };
    func();
})();


//compile function using bytenode
let compiled = bytenode.compileCode(main);

console.log(`Original: ${main}`)
console.log(`Compiled: ${compiled}`);

let decompiled = bytenode.runBytecode(compiled);
console.log(decompiled);
//store in database

*/
(async() => {
    let compiledScope = (async() => {
        return await new Promise((resolve, reject) => {setTimeout(() => {
            return 3;
        }, 1000) });
    }).toString();

    let hello = (scope) => {
        console.log("Hello World!");
        return scope + 1;
    }
    
    let compiledHello = hello.toString();
    
    console.log(eval(compiledHello).call(await eval(compiledScope)))
  
})();
