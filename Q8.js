//Write a program to check if all the brackets are closed in a given code snippet.

class Stack {
constructor() {
this.items = []
this.length = 0
this.push = function(elements) {
this.items.push(elements)
this.length++
}
this.pop = function() {
this.length--
return this.items.pop()
}
this.peek = function() {
return this.items[this.length - 1]
}
this.reverse = function() {
var reverseArray = []
for (var i = this.length - 1; i >= 0; i--) {reverseArray.push(this.items[i])
}
this.items = reverseArray
return this.items
}
}
}

var expression = "({})"
var stack = new Stack()
for (var i = 0; i < expression.length; i++) {
if (expression.charAt(i) == "[" || expression.charAt(i) == "(" || expression.charAt(i) == "{") {
stack.push(expression.charAt(i))
} else {
if (stack.length == 0) {
console.log("Not balanced1")
break;
} else {var lastElement = stack.pop()
if (lastElement == "{" && expression.charAt(i) == "}" ||
lastElement == "[" && expression.charAt(i) == "]" ||
lastElement == "(" && expression.charAt(i) == ")") {
} else {
console.log("Not balanced2")
break;
}
}
if (i == expression.length - 1) {
if (stack.length == 0) {
console.log("Balanced")
} else {
console.log("Not balanced3")
}
}
}
}
