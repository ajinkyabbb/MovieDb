
// let radious = [2,3,5,8]

// function areaOfCircle(r){
//     return Math.PI * r * r;
// }

// function calculate(arr,formula){
//     let result = [];
//     arr.forEach((el)=>{
//         result.push(formula(el))
//     })
    
//     return result;
// }

// console.log(document.cookie)

// console.log(calculate(radious,areaOfCircle))


// function fullName(city){
//     console.log(this.firstName +" "+this.lastName+" "+city);
// }

// let person1={
//     firstName:"Tony",
//     lastName:"Stark"
// }

// let sayFullName = fullName.bind(person1,"newYork")
// sayFullName()

//  function hoist(){
//     a = 10;
//     let b = 20;
//  }

//  hoist()
//  console.log(a)
//  console.log(b)
// a = 10
// console.log(a)
// let a=10


// console.log(x); 
// console.log(z); 
// var x = 6; 
// let z = 6; 
// console.log(x); 
// console.log(z); 



// let a = 10;
// function f() {
//     if (true) {
//         let b = 9
 
//         // It prints 9
//         console.log(b);
//     }
 
//     // It gives error as it
//     // defined in if block
//     console.log(b);
// }
// f()
 
// // It prints 10
// console.log(a)

// const arr = [3,1,3,5,10,6,4,3,1];
// const num = arr[0];
// const binarySearch = (arr, target, l, r) => {
//    while (l < r) {
//       const mid = Math.floor((l + r) / 2);
//       if (arr[mid] < target) l = mid + 1;
//       else if (arr[mid] > target) r = mid;
//       else return mid;
//    }
//    if (l === r) return arr[l] >= target ? l : l + 1;
// }
// const medianSlidingWindow = (arr = [], num = 1) => {
//    let l = 0, r = num - 1, res = [];
//    const window = arr.slice(l, num);
//    window.sort((a, b) => a - b);
//    while (r < arr.length) {
//       const median = num % 2 === 0 ? (window[Math.floor(num / 2) - 1] + window[Math.floor(num / 2)]) / 2 : window[Math.floor(num / 2)];
//       res.push(median);
//       let char = arr[l++];
//       let index = binarySearch(window, char, 0, window.length - 1);
//       window.splice(index, 1);
//       char = arr[++r];
//       index = binarySearch(window, char, 0, window.length - 1);
//       window.splice(index, 0, char);
//    }
//    return res;
// };
// console.log(medianSlidingWindow(arr, num));


// function MovingMedian(arr) {
//     const N = arr[0];
//     const numbers = arr.slice(1);
  
//     function calculateMedian(window) {
//         console.log(window)
//       const sortedWindow = window.slice().sort((a, b) => a - b);
//       return N % 2 !== 0
//         ? sortedWindow[Math.floor(N / 2)]
//         : (sortedWindow[N / 2 - 1] + sortedWindow[N / 2]) / 2;
//     }
  
//     const medians = [];
  
//     for (let i = N - 1; i < numbers.length; i++) {
//       const window = numbers.slice(i - N + 1, i + 1);
//       const median = calculateMedian(window);
//       medians.push(Math.round(median).toString());
//     }
  
//     const result = medians.join(',');
  
//     return result;
//   }
  
//   // Example usage:
//   const inputArray = [3,1,3,5,10,6,4,3,1];
//   const output = MovingMedian(inputArray);
//   console.log(output);
  


// function toCamelCase(str) {
//     // Remove all non-alphanumeric characters and split the string
//     const words = str.replace(/[^a-zA-Z0-9]/g, ' ').split(' ');
  
//     // Capitalize the first letter of each word except the first one
//     const camelCaseString = words
//       .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
//       .join('');
  
//     return camelCaseString;
//   }
  
//   // Example usage:
//   const inputString = "cats AND*Dogs-are Awsome";
//   const camelCaseString = toCamelCase(inputString);
//   console.log(camelCaseString); // Output: helloWorldExample
  
function toCamelCase(str) {
    // Remove all non-alphanumeric characters and split the string
    const words = str.replace(/[^a-zA-Z0-9]/g, ' ').split(' ');
  
    // Capitalize the first letter of each word
    const camelCaseString = words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  
    return camelCaseString;
  }
  
  // Example usage:
  const inputString = "cats AND*Dogs-are Awsome";
  const camelCaseString = toCamelCase(inputString);
  console.log(camelCaseString); 