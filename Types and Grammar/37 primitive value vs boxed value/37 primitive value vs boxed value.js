function foo(x){
	x=x+1;
	x;
}

var a = 2;
var b = new Number( a ); // or equivalently `Object(a)`

foo(b);
console.log(b);

// primitive value vs boxed value 
// https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/

// freecodecamp forum link
// https://forum.freecodecamp.org/t/primitive-value-cannot-be-altered-in-js/169574