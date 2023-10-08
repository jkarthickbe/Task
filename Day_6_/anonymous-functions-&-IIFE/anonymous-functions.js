// 1. Print odd numbers in an array 

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let odd = array.filter((number) => number % 2 != 0)

console.log(odd) // ==> [ 1, 3, 5, 7, 9 ]


// 2. Convert all the strings to title caps in a string array

array = ["string", "Array", "integer", "float", "double"]

let title = array.map((string) => string.charAt(0).toUpperCase() + string.substr(1).toLowerCase())

console.log(title) // ==> [ 'String', 'Array', 'Integer', 'Float', 'Double' ]


// 3. Sum of all numbers in an array

array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let sum = array.reduce((total, number) => total += number , 0)

console.log(sum) // ==> 45


// 4. Return all the prime numbers in an array

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let prime = array.filter((number) => {
    if (number == 1) {
        return false;
    }else if (number == 2) {
        return true;
    }else{
        for (let i = 2;i < number; i++){
            if (number % i == 0){
                return false;
            }
        }
    }
    return true;
});

console.log(prime) // ==> [ 2, 3, 5, 7 ]


// 5. Return all the palindromes in an array

array = ["Malayalam", "Hindi", "Kannak", "Eye", "Everest"];

let palindrome = array.filter((string) => {
    let s = string.toLowerCase();
    let count;
    if (s.length % 2 == 0) {
		count = (s.length) / 2;
	}
    if (s.length == 1){
        return true;
    }else{
        count = (s.length -1) / 2;
    }
    for (let i = 0; i < count; i++) {
        if (s[i] != s[s.length - i -1]){
            return false;
        }
    }
    return true;
})

console.log(palindrome) // ==> [ 'Malayalam', 'Kannak', 'Eye' ]


// 6. Return median of two sorted arrays of same size 

let array1 = [6, 9, 3, 4, 5, 10, 7, 2, 8, 1];   // array from 1 to 10
let array2 = [12, 20, 13, 17, 15, 19, 14, 18, 16, 11]   // array from 11 to 20

let median = (() => {
    array = array1.concat(array2);
    array = array.sort(function(a, b) {return a-b});
    med = (array[array1.length] + array[array1.length - 1]) / 2;
    return med;
})

console.log(median()); // ==> 10.5 as 10 + 11 / 2


// 7. Remove duplicates from an array

array = [6, 9, 3, 4, 5, 1, 6, 2, 9, 1];

let noDuplicates = array.filter((a, b) => array.indexOf(a) === b)

console.log(noDuplicates); // ==> [6, 9, 3, 4, 5, 1, 2]


// 8. Rotate an array by k times and return the rotated array

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
k = 5;
let rotate =  ((array, k) => {
    for (let i = 0; i < k; i++){
        let lastItem = array[array.length - 1];
        for (let j = array.length - 2; j >= 0; j--) {
            array[j + 1] = array[j];
        }
        array[0] = lastItem;
    }
    return array;
})

console.log(rotate(array, k)) // ==> [5, 6, 7, 8, 9, 1, 2, 3, 4]