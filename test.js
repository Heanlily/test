// ================= Quetion1 ======================
//create a function take a string as input and output the reverse string.
//example:
//input: 'abcd e'
//ouput: 'e dcba'

function foo(input) {
  // implement the logic below
    return input.split("").reverse().join("");
}


// test case
console.log(foo('abcd e')); // should output 'e dcba' in the console
console.log(foo('233c de')); // should output 'ed c332' in the console
// ================== Quetion1 end ===================

// ================= Quetion2 ======================
//create a function take a string as input and remove the duplicate.
//example:
//input: 'abbbcd'
//ouput: 'abcd'

function foo1(input) {
  // implement the logic below
   var unique='';
    for(var i=0; i<input.length; i++){
        if(unique.indexOf(input[i])==-1){
            unique += input[i];
        }
    }
    return unique;
}

// test case
console.log(foo1('abbbcd')); // should output 'abcd' in the console
console.log(foo1('abcddaea')); // should output 'abcde' in the console
// ================== Quetion2 end ===================

// ================= Quetion3 ======================
//create a function take a string as input and return a double string.
//example:
//input: 'abc'
//ouput: 'abcabc'

function foo2(input) {
  // implement the logic below
  return input+input;
}

// test case
console.log(foo2('abc')); // should output 'abcabc' in the console
console.log(foo2('eff')); // should output 'effeff' in the console
// ================== Quetion3 end ===================

// ================= Quetion4 ======================
//create a function take a string as input and return a double string.
//example:
//input: 'abc'
//ouput: 'aabbcc'

function foo3(input) {
  // implement the logic below
  var res = "";
  for(var i = 0; i<input.length;i++){
  	res += input[i];
  	res += input[i];
  }
  return res;
}

// test case
console.log(foo3('abc')); // should output 'aabbcc' in the console
console.log(foo3('a12f')); // should output 'aa1122ff' in the console
// ================== Quetion4 end ===================


// ================= Quetion6 ======================
//create a function take a string statement as input and return a reverse word of the statement
//example:
//input: 'hi i am sam'
//ouput: 'sam am i hi'

function foo5(input) {
  // implement the logic below
  return input.split(" ").reverse().join(" ");
}

// test case
console.log(foo5('hi i am sam')); // should output 'sam am i hi' in the console
console.log(foo5('abc bcd')); // should output 'bcd abc' in the console
// ================== Quetion6 end ===================

// ================= Quetion7 ======================
//create a function take a string as input and replace 'a' to '*'.
//example:
//input: 'hi i am sam'
//ouput: 'hi i *m s*m'

function foo6(input) {
  // implement the logic below
  return input.replace("a","*");
}

// test case
console.log(foo6('hi i am sam')); // should output 'hi i *m s*m' in the console
console.log(foo6('abc bcd')); // should output '*bc bcd' in the console
// ================== Quetion7 end ===================

// ================= Quetion8 ======================
//create a function take a string array as input and return an object that contain the frequence of each string in the array.
//example:
//input: ['a','b','c','a']
//ouput: {a:2,b:1,c:1}

function foo7(input) {
  // implement the logic below
  var counts = {};
  for(var i = 0; i<input.length;i++){
  	ch = input[i];
  	counts[ch] = counts[ch]? counts[ch]+1 : 1;
  }
  return counts;
}

// test case
console.log(foo7(['a', 'b', 'c', 'a'])); // should output {a:2,b:1,c:1} in the console
console.log(foo7(['sam', 'jane', 'sam', 'sam'])); // should output {sam:3,jane:1} in the console
// ================== Quetion8 end ===================

// ================= Quetion9 ======================
//create a function take a object array as input and sort it based on the object.id .
//example:
//input: [{id:1,name:'sam1'},{id:3,name:'sam3'},{id:4,name:'sam4'},{id:2,name:'sam2'}]
//ouput: [{id:1,name:'sam1'},{id:2,name:'sam2'},{id:3,name:'sam3'},{id:4,name:'sam4'}]

function foo8(input) {
  // implement the logic below
  return input.sort(function(a, b) { 
  return  ( a.id - b.id );
});
}

// test case
console.log(
  foo8([
    {id: 1, name: 'sam1'},
    {id: 3, name: 'sam3'},
    {id: 4, name: 'sam4'},
    {id: 2, name: 'sam2'},
  ])
); // should output [{id:1,name:'sam1'},{id:2,name:'sam2'},{id:3,name:'sam3'},{id:4,name:'sam4'}]in the console
// ================== Quetion9 end ===================

// ================= Quetion10 ======================
//create a function take a Object array as input and flat that array to an object.
//example:
//input: [{name:'sam',age:18},{name:'jane',age:10},{name:'john',age:20}]
//ouput: {sam:18,jane:10,john:20}

function foo9(input) {
  // implement the logic below
  var output = {};
    for (var i=0; i < input.length ; ++i){
    	var key = input[i].name;
    	var value = input[i].age;
        output[key] = value;
    }
    return output;
}

// test case
console.log(
  foo9([
    {name: 'sam', age: 18},
    {name: 'jane', age: 10},
    {name: 'john', age: 20},
  ])
); // should output {sam:18,jane:10,john:20} in the console

// ================== Quetion10 end ===================
