//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.
function reverseParty(party) {
    return party.reverse()
}
console.log(reverseParty(['bulba','tinka','pika']))

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function compareSquareAndCube(array1,array2){
    squareSum = array1.reduce((accum,ele) => {
        Math.pow(ele,2) + accum
    })
    cubeSum = array2.reduce((accum,ele) =>{
        Math.pow(ele,3) + accum
    })
    if(squareSum > cubeSum){
        return true
    }
    return false
}


//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function filterMultiplesIndex (array){
    return array.filter((x,i) => x % i == 0)
}
console.log(filterMultiplesIndex([22, -6, 32, 82, 9, 25]))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function sumOfAll (array){
    return array.reduce((accum,ele) => +ele + accum, 0)
}
console.log(sumOfAll(['32', 82, '9', 25]))
