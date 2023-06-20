const { startTransition } = require("react");

// to check anagrams 

{ function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("Strings are Anagram");
    } else { 
       console.log("Strings are not Anagram");
    }
 }
checkStringsAnagram("hello","eollh")}


// program to reverse a string

function reverseString(str) {

   // empty string
   let newString = "";
   for (let i = str.length - 1; i >= 0; i--) {
       newString += str[i];
   }
   return newString;
}

const string = ('World');

const result = reverseString(string);
console.log(result);
   
let array1=[1,2,3];
let array2=[4,5,6];


function join(arr1, arr2 ) {
    


    let index = arr1.length 

   for(let i= 0 ; i<arr2.length ; i++) {
      arr1[index]  =  arr2[i] 
      index++       
   } 
   
   return arr1

}
// join two array
 
console.log( join(array1, array2))
// console.log( [...new Set( [...array1 , ...array2])]   )
// console.log( [...new Set( [...array1 , ...array2])].concat(array2) )
  
// Remove duplicate from array
list = [1,1,2,2,2,4,4,3,4,2,4,6,4];
function removeduplicate(array){
    let x={};
    {
      array.forEach(function (i)
       {
        if (!x[i]){
         x[i]=true;

        } 
      });
      return Object.keys(x);
   
    }
    
}

console.log(removeduplicate(list));


//stack
  let stack = [];

stack.push("apple");
stack.push("grape");
stack.push("oranges");

let poppedelement = stack.pop();
console.log(poppedelement);

let topelement = stack[stack.length];
console.log(topelement);

//stack.pop();
console.log(stack.pop());

let empty = stack.length == 0;
console.log(empty);


// queue

let queue = [];

queue.enqueue = ("Apple");
queue.enqueue = ("Oranges");
queue.enqueue = ("Grapes");

let queueelement = queue.push();
console.log(queueelement);




//longest prefix
function longestCommonPrefix(strs) {
   if (strs.length === 0) {
     return '';
   }
 
   let prefix = strs[0];
 
   for (let i = 1; i < strs.length; i++) {
     const currentString = strs[i];
     let j = 0;
 
     while (j < prefix.length && j < currentString.length && prefix[j] === currentString[j]) {
       j++;
     }
 
     prefix = prefix.substring(0, j);
 
     if (prefix === '') {
       // If prefix becomes empty at any point, there is no common prefix
       return '';
     }
   }
 
   return prefix;
 }
 
 // Example 
 const strings = ['flower', 'flow', 'flight'];
 const longestPrefix = longestCommonPrefix(strings);
 
 console.log('Longest prefix:', longestPrefix);

 
// check parenthesis
function ValidParentheses(str) {
   const stack = [];
   const openingParentheses = ['(', '[', '{'];
   const closingParentheses = [')', ']', '}'];
   const matchingParentheses = {
     ')': '(',
     ']': '[',
     '}': '{',
   };
 
   for (let i = 0; i < str.length; i++) {
     const currentChar = str[i];
 
     if (openingParentheses.includes(currentChar)) {
       stack.push(currentChar);
     } else if (closingParentheses.includes(currentChar)) {
       const top = stack.pop();
 
       if (matchingParentheses[currentChar] !== top) {
         return false;
       }
     }
   }
 
   // If there are any remaining parentheses in the stack, they are unmatched
   return stack.length === 0;
 }
 
 // Example 
 const parenthesesString = '(]';
 
 if (ValidParentheses(parenthesesString)) {
   console.log(`This is a valid parentheses string.`);
 } else {
   console.log(`This is not a valid parentheses string.`);
 }