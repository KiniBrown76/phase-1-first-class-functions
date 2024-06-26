//index.js
function receivesAFunction(callback){

//Call the callback function
callback();
}
function returnsANamedFunction(){
    return 'before all'
}
function returnsANamedFunction(){
    function namedFunction() {}
        return namedFunction;
    
      }
      function returnsAnAnonymousFunction() {
        return function() {}
      }