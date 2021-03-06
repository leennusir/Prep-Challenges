'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1) ---------------------
// 
// Given an array of values use filter to extract odd values.
//  
// EX:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] ==> [89, 41, 31, 111, 31]
// 
// ------------------------

const oddFiltration = (arr) => {
    
    const result = arr.filter(a => a%2 != 0);

    return result;
}

// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
//   ===>
//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// ------------------------

const cvsFiltration = (arr) => {
    let res = [];
    for (let i = 0 ; i<arr.length ; i++){
        if(arr[i].yearsOfExperience > 4 && arr[i].tech =="JS"){
           res.push({fullName:arr[i].firstName +" "+ arr[i].LastName , tech:arr[i].tech})
        }
    }
    return res 
}

// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------

const vowelsFiltration = (arr) => {
    const vowelCount = str => {
        let vowels = /[aeiou]/gi;
        let result = str.match(vowels);
        if(result == null)
        return 0;
        let count = result.length;
      
        return count;
      };
     let re = [];
    for(let i = 0 ; i<arr.length;i++){
        if(vowelCount(arr[i])==0){
            re.push(arr[i]);
        }
    }
    return re;
    
} 

// 4) ---------------------
//
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// EX:
// first_Employee = [C, C#, Java, Angular, PHP]
// first_Employee = [C#, .Net, JavaScript, React, Angular]
// ==>
// result = [C, Java, PHP, .Net, JavaScript, React]
// Hint:
// - the 'include' method can help you, read about it.
// ------------------------

const skillComparison = (arr1, arr2) => {
    let result = [];
    const children = arr1.concat(arr2); 
  
    const counts = {};

    for (const num of children) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
      }
      for (const property in counts) {
          if(counts[property] == 1){
              result.push(property)
          }
      }

    return result;
}


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

