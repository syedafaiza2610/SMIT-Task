//Miss Faiza Task:
// Questionn:3. Complete the aVeryBigSum function, It must return the sum of all array elements

function  bigArray(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i]
        
    }
    return count;

  
}
const newarr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(bigArray(newarr));

// Question : 1. Write a function which checks if string is palindrom
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
// and
// removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

function Palindrome(num) {
    const check = num.toLowerCase().replace(/[^a-z0-9]/g, '');
    return(
         check === check.split('').reverse().join('')
        );
}
 
console.log(Palindrome("A man, a plan, a canal: Panama"))
console.log(Palindrome("race a car"));
console.log(Palindrome(" "))


//Question # 03: Reverse each word in a given input string

function sentence(inp) {
  
    let words = inp.split(" ");
 
    let reverseWords = words.map(word => {
        return word.split("").reverse().join("");
    });
    
 
    let updatedSentence = reverseWords.join(" ");
    
    return updatedSentence;
}

let inp = "Welcome to JavaScript guide!";
let updatedSentence = sentence(inp);
console.log(updatedSentence); 

// Question # 01: Given an integer array num, find a subarray that has the largest
// product, and return the product.

function maximun(numbr) {
    if (numbr.length === 0) {
        return 0;
    }
    let maximun = numbr[0];
    let maximum = numbr[0];
    let result = numbr[0];

    for (let i = 1; i < numbr.length; i++) {
        const num = numbr[i];
        const tempMax = Math.max(num, maximun * num, maximum * num);
        maximum = Math.min(num, maximun * num, maximum * num);
        maximun = tempMax;
        result = Math.max(maximun, result);
    }

    return result;
}
const numbr = [12, 3, -2, 14];
console.log(maximun(numbr)); 


// Question # 02: Given an array of integers nums and an integer target, return indices of
// the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the
// same element twice


function twoSum(nums, target) {
    const Indices = {};

    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i];
        if (Indices.hasOwnProperty(comp)) {
            return [Indices[comp], i];
        }
        Indices[nums[i]] = i;
    }
    return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); 


// Question # 04: Write a JavaScript program to display the reading status (i.e. display
//     book name, author name and reading status) of the following books.

var library = [
    {
        author: "Bill Gates",
        title: "The Road to Hell",
        readingStatus: true
    },
    {
        author: "Gates",
        title: "The Road",
        readingStatus: false
    },
    {
        author: "Steive",
        title: "Wolter",
        readingStatus: true
    }
];

function Status(library) {
    for (let i = 0; i < library.length; i++) {
        let book = library[i];
        let status = book.readingStatus ? "already read" : "not read yet";
        // document.write("Book: " + book.title + " " + "by" + book.author +" "+ " Reading Status " + status);
        console.log("Book: " + book.title + " " + "by" + book.author + " "+ " Reading Status " + status);
    }
}

Status(library);

// Question # 05:
// Write a JavaScript function to convert an amount into coins.
// Sample function : changeintoCoin(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
// You can return the answer in any order


function change(amount, coins) {
        let result = [];
        let remamount = amount;
    
        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i];
            while (remamount >= coin) {
                result.push(coin);
                remamount -= coin;
            }
        }
    
        return result;
    }
    
    const coins = change(46, [25, 10, 5, 2, 1]);
  console.log(coins);
    

