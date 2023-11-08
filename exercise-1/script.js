function createHelloWorld (){
    Array.from(arguments);
    return (function (){
    return 'hello world';
})();
}



console.log(createHelloWorld({},null,42));