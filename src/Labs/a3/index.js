import JavaScript from "./JavaScript";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";

function Assignment3() {
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <TodoList/>
      <TodoItem/>
      <ConditionalOutput/>
      <Styles/>
      <Classes/>
      <JavaScript/>
    </div>
  );
}
export default Assignment3;

var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
   functionScoped,   blockScoped,
   constant1,        numberArray1,   stringArray1
];

console.log("Working with Arrays");
console.log("numberArray1 = " + numberArray1);
console.log("stringrArray1 = " + stringArray1);
console.log("variableArray1 = " + variableArray1);