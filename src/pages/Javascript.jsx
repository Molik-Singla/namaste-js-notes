import React from "react";
import { Chapter, Highlighted, Point, Heading, Image, Divider } from "../components";
import CodeBlock from "../components/CodeBlock";

// Images
import e1 from "./../assets/images/e1.jpg";
import e2 from "./../assets/images/e2.jpg";
import e3 from "./../assets/images/e3.jpg";
import e4 from "./../assets/images/e4.jpg";
import e5 from "./../assets/images/e5.jpg";

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
            </section>
        </div>
    );
};

export default Javascript;
