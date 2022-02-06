'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    let str2 = str.substring(str.lastIndexOf(" ")+1);
    return str2;
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    var n = str.split(" ");
    return n[n.length - 1];
    
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
let arrayString = str.split(" ");
for(let i =0 ;i<arrayString.length;i++){
    if(arrayString[i] == "I"){
        arrayString.splice(i,1,"We");
    }else if(arrayString[i]=="am"){
        arrayString.splice(i,1,"are");

    }else if(arrayString[i] == "was"){
        arrayString.splice(i,1,"were");
    }
}
return arrayString.join(" ");
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    let ar = arr.splice(0,4);
    console.log(ar);
    var ar5 = arr.splice(0,1);
    let ar52 = [ar5[0]+","]
    console.log(ar52);
    
    console.log(arr);
    let finalArry = ar.concat(ar52);
    let finalArray = finalArry.concat(arr);
    console.log(finalArray);
    return finalArray.join(" ");
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    let strArray = str.split(" ");

    var arr = [];
    for(let i = 0 ; i < strArray.length ; i++){
        const counts = {};
        for (const num of strArray[i]) {
            if(num!=' ')
          counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        arr.push(counts);
    }
     var s = "";
    for(let i = 0;i<arr.length;i++){
        for (const property in arr[i]) {
            s+=property +arr[i][property];
          }
          s+=" ";
    }
    return s.substring(0, s.length - 1);
;
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };