import React from "react";
import { Chapter, Highlighted, Point, Heading, Image, Divider } from "../components";
import CodeBlock from "../components/CodeBlock";

// Images
import e1 from "./../assets/images/e1.jpg";
import e2 from "./../assets/images/e2.jpg";
import e3 from "./../assets/images/e3.jpg";
import e4 from "./../assets/images/e4.jpg";
import e5 from "./../assets/images/e5.jpg";
import e6 from "./../assets/images/e6.jpg";
import e7 from "./../assets/images/e7.jpg";
import e8 from "./../assets/images/e8.jpg";
import e9 from "./../assets/images/e9.jpg";

const Javascript = () => {
    return (
        <div className="flex justify-center w-full h-full min-h-screen p-4">
            <section className="flex flex-col w-full h-full max-w-3xl gap-2 p-4">
                <Chapter number={1}>
                    <Heading link="https://youtu.be/ZvbzSrg0afE?si=V4NqLZ3NHeUehIlK">Episode 1 : Execution Context</Heading>
                    <Point>
                        Everything in JS happens inside the execution context. Imagine a sealed-off container inside which JS
                        runs. It is an abstract concept that hold info about the env. within the current code is being executed
                    </Point>

                    <Image src={e1} />
                    <Point>
                        In the container the first component is <Highlighted>memory component</Highlighted> and the 2nd one is{" "}
                        <Highlighted>code component</Highlighted>
                    </Point>
                    <Point>
                        Memory component has all the variables and functions in key value pairs. It is also called{" "}
                        <Highlighted>Variable environment</Highlighted>
                    </Point>
                    <Point>
                        Code component is the place where code is executed one line at a time. It is also called the{" "}
                        <Highlighted>Thread of Execution</Highlighted>
                    </Point>
                    <Point>
                        JS is a <Highlighted>synchronous, single-threaded</Highlighted> language
                    </Point>
                    <div>
                        <Point subPoint>Synchronous:- In a specific synchronous order</Point>
                        <Point subPoint>Single-threaded:- One command at a time</Point>
                    </div>
                </Chapter>
                <Divider />
                <Chapter number={2}>
                    <Heading link="https://youtu.be/iLWTnMzWtj4?si=ePKn-tKkXW0_3b8V">
                        Episode 2 : How JS is executed & Call Stack
                    </Heading>
                    <Point>
                        When a JS program is ran, a <Highlighted>global execution context</Highlighted> is created
                    </Point>

                    <Point>The execution context is created in two phases</Point>
                    <div>
                        <Point subPoint>Memory creation phase - JS will allocate memory to variables and functions</Point>
                        <Point subPoint>Code execution phase</Point>
                    </div>
                    <Point>Let's consider the below example and its code execution steps</Point>

                    <CodeBlock>
                        {`var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);`}
                    </CodeBlock>
                    <Point isParagraph>
                        The very first thing which JS does is <Highlighted>memory creation phase</Highlighted>, so it goes to line
                        one of above code snippet, and <Highlighted>allocates a memory space</Highlighted> for variable{" "}
                        <Highlighted>'n'</Highlighted> and then goes to line two, and{" "}
                        <Highlighted>allocates a memory space for function 'square'</Highlighted>. When allocating memory{" "}
                        <Highlighted>for n it stores 'undefined'</Highlighted>, a special value for 'n'.{" "}
                        <Highlighted>For 'square', it stores the whole code of the function inside its memory space</Highlighted>.
                        Then, as square2 and square4 are variables as well, it allocates memory and stores 'undefined' for them,
                        and this is the end of first phase i.e. memory creation phase.
                    </Point>
                    <Point isParagraph>So O/P will look something like</Point>
                    <Image src={e2} isParagraphImg />
                    <Point isParagraph>
                        Now, in <Highlighted>2nd phase</Highlighted> i.e. code execution phase, it starts going through the whole
                        code line by line. As it encounters var n = 2, it assigns 2 to 'n'. Until now, the value of 'n' was
                        undefined. For function, there is nothing to execute. As these lines were already dealt with in memory
                        creation phase.
                    </Point>
                    <Point isParagraph>
                        Coming to line 6 i.e. <Highlighted>var square2 = square(n)</Highlighted>, here{" "}
                        <Highlighted>functions are a bit different than any other language</Highlighted>. A new execution context
                        is created altogether. Again in this new execution context, in memory creation phase, we allocate memory
                        to num and ans the two variables. And undefined is placed in them. Now, in code execution phase of this
                        execution context, first 2 is assigned to num. Then var ans = num * num will store 4 in ans. After that,
                        return ans returns the control of program back to where this function was invoked from.
                    </Point>
                    <Image src={e3} isParagraphImg />

                    <Point isParagraph>
                        When <Highlighted>return</Highlighted> keyword is encountered, It returns the control to the called line
                        and also <Highlighted>the function execution context is deleted</Highlighted>. Same thing will be repeated
                        for square4 and then after that is finished, the global execution context will be destroyed. So the final
                        diagram before deletion would look something like:
                    </Point>
                    <Image src={e4} isParagraphImg />

                    <Point>
                        Javascript manages code execution context creation and deletion with the the help of{" "}
                        <Highlighted>Call Stack</Highlighted>
                    </Point>
                    <Point>Call Stack is a mechanism to keep track of its place in script that calls multiple function</Point>
                    <Point>
                        <Highlighted>
                            Call Stack maintains the order of execution of execution contexts. It is also known as Program Stack,
                            Control Stack, Runtime stack, Machine Stack, Execution context stack
                        </Highlighted>
                    </Point>
                </Chapter>
                <Divider />
                <Chapter number={3}>
                    <Heading link="https://youtu.be/Fnlnw8uY6jo?si=xfZ5kwlPcVBuoA7f">
                        Episode 3 : Hoisting in JavaScript (variables & functions)
                    </Heading>

                    <Point>Let's observe the below code and it's explaination:</Point>
                    <CodeBlock>{`getName(); // Namaste Javascript
console.log(x); // undefined
var x = 7;
function getName() {
  console.log("Namaste Javascript");
}`}</CodeBlock>

                    <Point isParagraph>
                        It should have been an outright error in many other languages, as it is not possible to even access
                        something which is not even created (defined) yet But in JS, We know that in{" "}
                        <Highlighted>
                            memory creation phase it assigns undefined and puts the content of function to function's memory
                        </Highlighted>
                        . And in execution, it then executes whatever is asked. Here, as execution goes line by line and not after
                        compiling, it could only print undefined and nothing else. This phenomenon, is not an error. However, if
                        we remove var x = 7; then it gives error. Uncaught ReferenceError: x is not defined
                    </Point>

                    <Point>
                        <Highlighted>Hoisting</Highlighted> is a concept which enables us to extract values of variables and
                        functions even before initialising/assigning value without getting error and this is happening due to the
                        <Highlighted>1st phase (memory creation phase)</Highlighted> of the Execution Context
                    </Point>
                    <Point>
                        So in previous lecture, we learnt that execution context gets created in two phase, so even before code
                        execution, memory is created so in case of variable, it will be initialized as undefined while in case of
                        function the whole function code is placed in the memory. Example:
                    </Point>

                    <CodeBlock>
                        {`getName(); // Namaste JavaScript
console.log(x); // Uncaught Reference: x is not defined.
console.log(getName); // f getName(){ console.log("Namaste JavaScript); }
function getName() {
  console.log("Namaste JavaScript");
}`}
                    </CodeBlock>

                    <Point>Now let's observe a different example and try to understand the output.</Point>
                    <CodeBlock>
                        {`getName(); // Uncaught TypeError: getName is not a function ( as it is undefined here )
console.log(getName);
var getName = function () {
  console.log("Namaste JavaScript");
};
// The code won't execute as the first line itself throws an TypeError.`}
                    </CodeBlock>
                </Chapter>
                <Divider />
                <Chapter number={4}>
                    <Heading link="https://youtu.be/gSDncyuGw0s?si=irZLWu0SDaP8gYhy">
                        Episode 4 : Functions and Variable Environments
                    </Heading>
                    <CodeBlock>{`var x = 1;
a();
b(); // we are calling the functions before defining them. This will work properly, as seen in Hoisting.
console.log(x);

function a() {
  var x = 10; // local scope because of separate execution context
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

// OUTPUT -:

// 10
// 100
// 1
`}</CodeBlock>

                    <Point>Code Flow in terms of Execution Context</Point>
                    <Point subPoint>
                        The Global Execution Context (GEC) is created (the big box with Memory and Code subparts). Also GEC is
                        pushed into Call Stack
                    </Point>
                    <CodeBlock>{`Call Stack : GEC`}</CodeBlock>
                    <Point subPoint>
                        In first phase of GEC (memory phase), variable x:undefined and a and b have their entire function code as
                        value initialized
                    </Point>
                    <Point subPoint>
                        In second phase of GEC (execution phase), when the function is called, a new local Execution Context is
                        created. After x = 1 assigned to GEC x, a() is called. So local EC for a is made inside code part of GEC
                    </Point>
                    <CodeBlock>{`Call Stack: [GEC, a()]`}</CodeBlock>
                    <Point subPoint>
                        For local EC, a totally different x variable assigned undefined(x inside a()) in phase 1 , and in phase 2
                        it is assigned 10 and printed in console log. After printing, no more commands to run, so a() local EC is
                        removed from both GEC and from Call stack
                    </Point>
                    <CodeBlock>{`Call Stack: GEC`}</CodeBlock>
                    <Point subPoint>Cursor goes back to b() function call. Same steps repeat</Point>
                    <CodeBlock>{`Call Stack :[GEC, b()] -> GEC (after printing yet another totally different x value as 100 in console log)`}</CodeBlock>
                    <Point subPoint>Finally GEC is deleted and also removed from call stack. Program ends</Point>
                    <Point subPoint>Reference:</Point>

                    <Image src={e5} isParagraphImg />
                </Chapter>
                <Divider />
                <Chapter number={5}>
                    <Heading link="https://youtu.be/QCRpVw2KXf8?si=sqDy-CbTc1LL_qEE">
                        Episode 5 : Shortest JS Program, window & this keyword
                    </Heading>
                    <Point>
                        The <Highlighted>shortest JS program is empty file</Highlighted>. Because even then, JS engine does a lot
                        of things. As always, even in this case, it <Highlighted>creates the GEC</Highlighted> which has memory
                        space and the execution context
                    </Point>
                    <Point>
                        JS engine <Highlighted>creates something known as 'window'</Highlighted>. It is an object, which is
                        created in the global space. It contains lots of functions and variables. These functions and variables
                        can be accessed from anywhere in the program. JS engine also{" "}
                        <Highlighted>creates a this keyword</Highlighted>, which points to the window object at the global level.
                        So, in summary, along with GEC, a global object (window) and a this variable are created
                    </Point>
                    <Point>
                        In different engines, the name of global object changes. Window in browsers, but in nodeJS it is called
                        something else. At global level, this === window
                    </Point>
                    <Point>
                        If we create any variable in the global scope, then the variables get attached to the global object.
                    </Point>
                    <Point>Example : </Point>
                    <CodeBlock>{`var x = 10;
console.log(x); // 10
console.log(this.x); // 10
console.log(window.x); // 10`}</CodeBlock>
                </Chapter>
                <Divider />
                <Chapter number={6}>
                    <Heading link="https://youtu.be/B7iF6G3EyIk?si=Cel3G7lDHyWgxlim">
                        Episode 6 : undefined vs not defined in JS
                    </Heading>
                    <Point>
                        In <Highlighted>first phase</Highlighted> (memory allocation){" "}
                        <Highlighted>JS assigns each variable</Highlighted> a placeholder called{" "}
                        <Highlighted>undefined</Highlighted>
                    </Point>
                    <Point>
                        <Highlighted>undefined</Highlighted> is when memory is allocated for the variable, but no value is
                        assigned yet
                    </Point>
                    <Point>
                        If an object/variable is not even declared/found in memory allocation phase, and tried to access it then
                        it is <Highlighted>Not defined</Highlighted>
                    </Point>
                    <Point>Not Defined !== Undefined</Point>
                    <Point>
                        When variable is declared but not assigned value, its current value is undefined. But when the variable
                        itself is not declared but called in code, then it is not defined.
                    </Point>
                    <CodeBlock>{`console.log(x); // undefined
var x = 25;
console.log(x); // 25
console.log(a); // Uncaught ReferenceError: a is not defined`}</CodeBlock>

                    <Point>
                        JS is a <Highlighted>loosely typed / weakly typed language</Highlighted>. It doesn't attach variables to
                        any datatype. We can say var a = 5, and then change the value to boolean a = true or string a = 'hello'
                        later on.
                    </Point>
                    <Point>
                        <Highlighted>Never</Highlighted> assign undefined to a variable manually. Let it happen on it's own accord
                    </Point>
                </Chapter>
                <Divider />
                <Chapter number={7}>
                    <Heading link="https://youtu.be/uH-tVP8MUs8?si=jnL38bewuay1ouMm">
                        Episode 7 : The Scope Chain, Scope & Lexical Environment
                    </Heading>

                    <Point>
                        <Highlighted>Scope</Highlighted> in Javascript is directly related to{" "}
                        <Highlighted>Lexical Environment</Highlighted>
                    </Point>
                    <Point>Let's observe the below examples:</Point>

                    <CodeBlock>{`// CASE 1
function a() {
  console.log(b); // 10
  // Instead of printing undefined it prints 10, So somehow this a function could access the variable b outside the function scope.
}
var b = 10;
a();`}</CodeBlock>
                    <CodeBlock>{`// CASE 2
function a() {
  c();
  function c() {
    console.log(b); // 10
  }
}
var b = 10;
a();`}</CodeBlock>

                    <CodeBlock>{`// CASE 3
function a() {
  c();
  function c() {
    var b = 100;
    console.log(b); // 100
  }
}
var b = 10;
a();`}</CodeBlock>

                    <CodeBlock>{`// CASE 4
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); // 10
  }
}
a();
console.log(b); // Error, Not Defined`}</CodeBlock>

                    <Point>Let's try to understand the output in each of the cases above.</Point>
                    <Point subPoint>
                        In <Highlighted>case 1</Highlighted>: function a is able to access variable b from Global scope
                    </Point>
                    <Point>
                        In <Highlighted>case 2</Highlighted>: 10 is printed. It means that within nested function too, the global
                        scope variable can be accessed
                    </Point>
                    <Point>
                        In <Highlighted>case 3</Highlighted>: 100 is printed meaning local variable of the same name took
                        precedence over a global variable
                    </Point>
                    <Point>
                        In <Highlighted>case 4</Highlighted>: A function can access a global variable, but the global execution
                        context can't access any local variable
                    </Point>

                    <CodeBlock>{`To summarize the above points in terms of execution context:
call_stack = [GEC, a(), c()]
Now lets also assign the memory sections of each execution context in call_stack.
c() = [[lexical environment pointer pointing to a()]]
a() = [b:10, c:{}, [lexical environment pointer pointing to GEC]]
GEC =  [a:{},[lexical_environment pointer pointing to null]]`}</CodeBlock>
                    <Image src={e6} />
                    <Image src={e7} />

                    <Point>
                        So, <Highlighted>Lexical Environment</Highlighted> = local memory + lexical environment of its parent.
                        Hence, Lexical Environement is the local memory along with the lexical environment of its parent
                    </Point>
                    <Point>
                        <Highlighted>Lexical</Highlighted>: In hierarchy, In order
                    </Point>
                    <Point>
                        Whenever an Execution Context is created, a Lexical environment(LE) is also created and is referenced in
                        the local Execution Context(in memory space)
                    </Point>
                    <Point>
                        The process of going one by one to parent and checking for values is called{" "}
                        <Highlighted>scope chain or Lexcial environment chain</Highlighted>
                    </Point>

                    <CodeBlock>{`function a() {
  function c() {
    // logic here
  }
  c(); // c is lexically inside a
} // a is lexically inside global execution`}</CodeBlock>

                    <Point>
                        Lexical or Static scope refers to the accessibility of variables, functions and object based on physical
                        location in source code
                    </Point>

                    <CodeBlock>{`Global {
    Outer {
        Inner
    }
}
// Inner is surrounded by lexical scope of Outer`}</CodeBlock>

                    <Point>
                        <Highlighted>TLDR</Highlighted>: An inner function can access variables which are in outer functions even
                        if inner function is nested deep. In any other case, a function can't access variables not in its scope
                    </Point>
                </Chapter>
                <Divider />
                <Chapter number={8}>
                    <Heading link="https://youtu.be/BNC6slYCj50?si=i0C3PJ_bcz2Ki7mp">
                        Episode 8 : let & const in JS, Temporal Dead Zone
                    </Heading>
                    <Point>let and const declarations are hoisted. But its different from var</Point>
                    <CodeBlock>{`console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // prints undefined as expected
let a = 10;
console.log(a); // 10
var b = 15;
console.log(window.a); // undefined
console.log(window.b); // 15`}</CodeBlock>

                    <Point isParagraph>
                        It looks like let isn't hoisted, <Highlighted>but it is</Highlighted>, let's understand
                    </Point>
                    <Point>
                        Both a and b are actually initialized as undefined in hoisting stage. But <Highlighted>var b</Highlighted>{" "}
                        is inside the storage space of <Highlighted>GLOBAL</Highlighted>, and <Highlighted>a</Highlighted> is in a
                        separate memory object called <Highlighted>script</Highlighted>, where it can be accessed only after
                        assigning some value to it first ie. one can access 'a' only if it is assigned. Thus, it throws error
                    </Point>

                    <Point>
                        <Highlighted>Temporal Dead Zone</Highlighted> : Time since when the let variable was hoisted until it is
                        initialized some value
                    </Point>
                    <Point subPoint>So any line till before "let a = 10" is the TDZ for a</Point>
                    <Point subPoint>
                        Since a is not accessible on global, its not accessible in window/this also. window.b or this.b {` ->`}{" "}
                        15; But window.a or this.a {`->`}undefined, just like window.x {`->`} undefined (x isn't declared
                        anywhere)
                    </Point>

                    <Point>
                        <Highlighted>Reference Error</Highlighted> are thrown when variables are in temporal dead zone
                    </Point>
                    <Point>
                        <Highlighted>Syntax Error</Highlighted> doesn't even let us run single line of code
                    </Point>
                    <CodeBlock>{`let a = 10;
let a = 100;  //this code is rejected upfront as SyntaxError. (duplicate declaration)
------------------
let a = 10;
var a = 100; // this code also rejected upfront as SyntaxError. (can't use same name in same scope)
`}</CodeBlock>
                    <Point>
                        <Highlighted>Let</Highlighted> is a stricter version of <Highlighted>var</Highlighted>. Now,{" "}
                        <Highlighted>const</Highlighted> is even more stricter than let
                    </Point>

                    <CodeBlock>{`let a;
a = 10;
console.log(a) // 10. Note declaration and assigning of a is in different lines.
------------------
const b;
b = 10;
console.log(b); // SyntaxError: Missing initializer in const declaration. (This type of declaration won't work with const. const b = 10 only will work)
------------------
const b = 100;
b = 1000; //this gives us TypeError: Assignment to constant variable.`}</CodeBlock>

                    <Point>
                        <Highlighted>Types</Highlighted> of Error: Syntax, Reference, and Type
                    </Point>
                    <Point subPoint>
                        <Highlighted>Uncaught ReferenceError</Highlighted>: x is not defined yet. This Error signifies that x has
                        never been in the scope of the program. This literally means that x was never defined/declared and is
                        being tried to be accesed
                    </Point>
                    <Point subPoint>
                        <Highlighted>Uncaught ReferenceError</Highlighted>: cannot access 'a' before initialization. This Error
                        signifies that 'a' cannot be accessed because it is declared as 'let' and since it is not assigned a
                        value, it is its Temporal Dead Zone. Thus, this error occurs
                    </Point>

                    <Point subPoint>
                        <Highlighted>Uncaught SyntaxError</Highlighted>: Identifier 'a' has already been declared. This Error
                        signifies that we are redeclaring a variable that is 'let' declared. No execution will take place
                    </Point>

                    <Point subPoint>
                        <Highlighted>Uncaught SyntaxError</Highlighted>: Missing initializer in const declaration. This Error
                        signifies that we haven't initialized or assigned value to a const declaration
                    </Point>
                    <Point subPoint>
                        <Highlighted>Uncaught TypeError</Highlighted>: Assignment to constant variable. This Error signifies that
                        we are reassigning to a const variable
                    </Point>

                    <Point>SOME GOOD PRACTICES:</Point>
                    <Point subPoint>Try using const wherever possible</Point>
                    <Point subPoint>If not, use let, Avoid var</Point>
                    <Point subPoint>
                        Declare and initialize all variables with let to the top to avoid errors to shrink temporal dead zone
                        window to zero
                    </Point>
                </Chapter>
                <Divider />
                <Chapter number={9}>
                    <Heading link="https://youtu.be/lW_erSjyMeM?si=WS3qO9Hd11MbojqC">
                        Episode 9 : Block Scope & Shadowing in JS
                    </Heading>
                    <Point isParagraph>What is a Block?</Point>
                    <Point>
                        <Highlighted>Block</Highlighted> aka compound statement is used to group JS statements together into 1
                        group. We group them within {`{...}`}
                    </Point>
                    <CodeBlock>{`{
  var a = 10;
  let b = 20;
  const c = 30;
  // Here let and const are hoisted in Block scope,
  // While, var is hoisted in Global scope.
}`}</CodeBlock>

                    <Point>Block Scope and its accessibility example</Point>
                    <CodeBlock>{`{
  var a = 10;
  let b = 20;
  const c = 30;
}
console.log(a); // 10
console.log(b); // Uncaught ReferenceError: b is not defined`}</CodeBlock>

                    <CodeBlock>{`* Reason?
    * In the BLOCK SCOPE; we get b and c inside it initialized as *undefined* as a part of hoisting (in a seperate memory space called **block**)
    * While, a is stored inside a GLOBAL scope.

    * Thus we say, *let* and *const* are BLOCK SCOPED. They are stored in a separate mem space which is reserved for this block. Also, they can't be accessed outside this block. But var a can be accessed anywhere as it is in global scope. Thus, we can't access them outside the Block.`}</CodeBlock>

                    <Point isParagraph>
                        What is <Highlighted>Shadowing</Highlighted>?
                    </Point>
                    <CodeBlock>{`var a = 100;
{
  var a = 10; // same name as global var
  let b = 20;
  const c = 30;
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}
console.log(a); // 10, instead of the 100 we were expecting. So block "a" modified val of global "a" as well. In console, only b and c are in block space. a initially is in global space(a = 100), and when a = 10 line is run, a is not created in block space, but replaces 100 with 10 in global space itself.`}</CodeBlock>
                    <Point>
                        So, If one has same named variable outside the block, the variable inside the block shadows the outside
                        variable. This happens only for var
                    </Point>
                    <Point>Let's observe the behaviour in case of let and const and understand it's reason</Point>
                    <CodeBlock>{`let b = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(b); // 20
}
console.log(b); // 100, Both b's are in separate spaces (one in Block(20) and one in Script(another arbitrary mem space)(100)). Same is also true for *const* declarations.`}</CodeBlock>
                    <Image src={e8} />
                    <Point>
                        Same logic is true even for <Highlighted>functions</Highlighted>
                        <CodeBlock>{`const c = 100;
function x() {
  const c = 10;
  console.log(c); // 10
}
x();
console.log(c); // 100`}</CodeBlock>
                    </Point>
                    <Point isParagraph>
                        What is <Highlighted>Illegal Shadowing</Highlighted>?
                    </Point>
                    <CodeBlock>{`let a = 20;
{
  var a = 20;
}
// Uncaught SyntaxError: Identifier 'a' has already been declared`}</CodeBlock>
                    <Point>
                        We cannot shadow let with var. But it is valid to shadow a let using a let. However, we can shadow var
                        with let
                    </Point>
                    <Point>All scope rules that work in function are same in arrow functions too</Point>
                    <Point>
                        Since <Highlighted>var is function scoped</Highlighted>, it is not a problem with the code below
                    </Point>
                    <CodeBlock>{`let a = 20;
function x() {
  var a = 20;
}`}</CodeBlock>
                </Chapter>

                <Divider />

                <Chapter number={10}>
                    <Heading link="https://youtu.be/qikxEIxsXco?si=8LWkPI2__5y4FU-y">Episode 10 : Closures in JS</Heading>
                    <Point>
                        Function bundled along with it's lexical scope is <Highlighted>closure</Highlighted>
                    </Point>

                    <Point>
                        JavaScript has a lexcial scope environment. If a function needs to access a variable, it first goes to its
                        local memory. When it does not find it there, it goes to the memory of its lexical parent. See Below code,
                        Over here function y along with its lexical scope i.e. (function x) would be called a closure
                    </Point>
                    <CodeBlock>{`function x() {
  var a = 7; // lexical env variable for y ( preserve in memory called closure )
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z); // value of z is entire code of function y.`}</CodeBlock>
                    <Point subPoint>
                        In above code, When y is returned, not only is the function returned but the entire closure (fun y + its
                        lexical scope) is returned and put inside z. So when z is used somewhere else in program, it still
                        remembers var a inside x()
                    </Point>
                    <Point>Another Example</Point>
                    <CodeBlock>{`function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z(); // 7 900`}</CodeBlock>

                    <Point>Thus In simple words, we can say:</Point>
                    <Point subPoint>
                        *A <Highlighted>closure</Highlighted> is a function that has access to its outer function scope even after
                        the function has returned. Meaning, A closure can remember and access variables and arguments reference of
                        its outer function even after the function has returned.*
                    </Point>
                    <Image src={e9} />

                    <Point>
                        <Highlighted>Advantages</Highlighted> of Closure:
                    </Point>
                    <Point subPoint>Module Design Pattern</Point>
                    <Point subPoint>Currying</Point>
                    <Point subPoint>Memoize</Point>
                    <Point subPoint>Data hiding and encapsulation</Point>
                    <Point subPoint>setTimeouts etc</Point>
                    <Point>
                        <Highlighted>Disadvantages</Highlighted> of Closure:
                    </Point>
                    <Point subPoint>Over consumption of memory</Point>
                    <Point subPoint>Memory Leak</Point>
                    <Point subPoint>Freeze browser</Point>
                </Chapter>

                <Divider />

                <Chapter number={11}>
                    <Heading link="https://youtu.be/eBTBG4nda2A?si=_Om9Tm9-gr0f5AvZ">
                        Episode 11 : setTimeout + Closures Interview Question
                    </Heading>
                    <Point isParagraph>
                        <Highlighted>Time, tide and Javascript wait for none</Highlighted>
                    </Point>
                    <CodeBlock>{`function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log("Namaste Javascript");
}
x();
// Output:
// Namaste Javascript
// 1 // after waiting 3 seconds`}</CodeBlock>

                    <Point>
                        We expect JS to wait 3 sec, print 1 and then go down and print the string. But JS prints string
                        immediately, waits 3 sec and then prints 1
                    </Point>
                    <Point>
                        The function inside setTimeout forms a closure (remembers reference to i ). So wherever function goes it
                        carries this ref along with it
                    </Point>
                    <Point>
                        setTimeout takes this callback function & attaches timer of 3000ms and stores it. Goes to next line
                        without waiting and prints string
                    </Point>
                    <Point>After 3000ms runs out, JS takes function, puts it into call stack and runs it</Point>
                    <Point>
                        <Highlighted>Q</Highlighted>: Print 1 after 1 sec, 2 after 2 sec till 5 : Tricky interview question
                    </Point>
                    <Point>We assume this has a simple approach as below</Point>
                    <CodeBlock>{`function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste Javascript");
}
x();
// Output:
// Namaste Javascript
// 6
// 6
// 6
// 6
// 6`}</CodeBlock>
                    <Point>Reason?</Point>
                    <Point subPoint>
                        **This happens <Highlighted>because of closures</Highlighted>. When setTimeout stores the function
                        somewhere and attaches timer to it, the <Highlighted>function remembers its reference</Highlighted> to i,
                        not value of i. All 5 copies of function point to same reference of i. JS stores these 5 functions, prints
                        string and then comes back to the functions. By then the timer has run fully. And due to looping, the i
                        value became 6. And when the callback fun runs the variable i = 6. So same 6 is printed in each log
                    </Point>
                    <Point subPoint>
                        <Highlighted>To avoid this, we can use let instead of var</Highlighted> as let has Block scope. For each
                        iteration, the i is a new variable altogether( new copy of i ). Everytime setTimeout is run, the inside
                        function forms closure with new variable i ( simply let create new copy of i for each iteration and form a
                        new closure for each iteration )
                    </Point>
                    <Point>But what if interviewer ask us to implement using var?</Point>
                    <CodeBlock>{`function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
      // put the setT function inside new function close()
    }
    close(i); // everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!
  }
  console.log("Namaste Javascript");
}
x();`}</CodeBlock>
                </Chapter>

                <Divider />

                <Chapter number={13}>
                    <Heading link="https://youtu.be/SHINoHxvTso?si=EpLt0WcuSNVATYrg">
                        Episode 13 : First Class Functions ft. Anonymous Functions
                    </Heading>

                    <Point>
                        <Highlighted>Q</Highlighted>: What is <Highlighted>Function statement / Function Declaration</Highlighted>
                        ?
                    </Point>
                    <Point subPoint>Below way of creating function are function statement</Point>
                    <CodeBlock>{`function a() {
  console.log("Hello");
}
a(); // Hello`}</CodeBlock>

                    <Point>
                        <Highlighted>Q</Highlighted>: What is <Highlighted>Function Expression</Highlighted>?
                    </Point>
                    <Point subPoint>Assigning a function to a variable. Function acts like a value</Point>
                    <CodeBlock>{`var b = function () {
  console.log("Hello");
};
b();`}</CodeBlock>

                    <Point>
                        <Highlighted>Q</Highlighted>: <Highlighted>Difference</Highlighted> between function statement and
                        expression
                    </Point>
                    <Point subPoint>
                        The major difference between these two lies in <Highlighted>Hoisting</Highlighted>
                    </Point>

                    <CodeBlock>{`a(); // "Hello A"
b(); // TypeError
function a() {
  console.log("Hello A");
}
var b = function () {
  console.log("Hello B");
};
// Why? During mem creation phase a is created in memory and function assigned to a. But b is created like a variable (b:undefined) and until code reaches the function()  part, it is still undefined. So it cannot be called.`}</CodeBlock>

                    <Point>
                        <Highlighted>Q</Highlighted>: What is <Highlighted>Anonymous Function</Highlighted>?
                    </Point>
                    <Point subPoint>A function without a name</Point>
                    <CodeBlock>{`function () {

}// this is going to throw Syntax Error - Function Statement requires function name , it need to be pass somewhere as value`}</CodeBlock>
                    <Point subPoint>
                        Anonymous functions are used when functions are used as values eg. the code sample for function expression
                        above
                    </Point>

                    <Point>
                        <Highlighted>Q</Highlighted>: What is <Highlighted>Named Function Expression</Highlighted>?
                    </Point>
                    <Point subPoint>Same as Function Expression but function has a name instead of being anonymous</Point>
                    <CodeBlock>{`var b = function xyz() {
  console.log("b called");
};
b(); // "b called"
xyz(); // Throws ReferenceError:xyz is not defined.
// xyz function is not created in global scope. So it can't be called.`}</CodeBlock>

                    <Point>
                        <Highlighted>Q</Highlighted>: Parameters vs Arguments?
                    </Point>

                    <CodeBlock>{`var b = function (param1, param2) {
  // labels/identifiers are parameters
  console.log("b called");
};
b(arg1, arg2); // arguments - values passed inside function call`}</CodeBlock>

                    <Point>
                        <Highlighted>Q</Highlighted>: What is <Highlighted>First Class Function</Highlighted> aka First Class
                        Citizens?
                    </Point>
                    <Point subPoint>
                        We can pass functions inside a function as arguments and /or return a function(HOF). These ability are
                        altogether known as First class function. It is programming concept available in some other languages too
                    </Point>
                    <CodeBlock>{`var b = function (param1) {
  console.log(param1); // prints " f() {} "
};
b(function () {});

// Other way of doing the same thing:
var b = function (param1) {
  console.log(param1);
};
function xyz() {}
b(xyz); // same thing as prev code

// we can return a function from a function:
var b = function (param1) {
  return function () {};
};
console.log(b()); //we log the entire fun within b.`}</CodeBlock>
                </Chapter>
            </section>
        </div>
    );
};

export default Javascript;
