02 / 05 / 2021

Question 1:

    function arrayFor(array) {
        for (var i = 0; i < array.length; i++) {
            console.log(array[i])
        }
    }
undefined
arrayFor([1, 2, 3, 4, 5])
1
2
3
4
5
undefined

Question 2;

function arrayWhile(array) {
    var i = 0
    while (i < array.length) {
        console.log(array[i])
        i++
    }
}
undefined
arrayWhile([1, 2, 3, 4])
1
2
3
4
undefined

Question 3;

function sum(array) {
    var result = 0
    for (var i = 0; i < array.length; i++) {
        result = result + array[i]
    }
    return result
}

undefined
sum([1, 2, 3, 4, 5])
15
sum([1, 2, 3])
6

Question 4;

function sumeveryother(array) {
    var result = 0
    for (var i = 0; i < array.length; i = i + 2) {
        result = result + array[i]
    }
    return result
}

undefined
sumeveryother([1, 2, 3, 4, 5])
9
sumeveryother([1, 2, 4])
5

Question 5;

function sumStartAt(array, index) {
    var result = 0
    for (var i = index; i < array.length; i++) {
        result = result + array[i]
    }
    return result
}
undefined
sumStartAt([1, 2, 3, 4, 5], 1)
14
sumStartAt([1, 2, 4], 2)
4

Question 6;

function sumUntil(array, index) {
    var result = 0
    for (var i = 0; i <= index; i++) {
        result = result + array[i]
    }
    return result
}
undefined
sumUntil([1, 2, 3, 4, 5], 2)
6

Question 7;

function subtractReverse(array) {
    var x = array.length
    var result = array[x - 1]
    for (var i = array[x - 2]; i >= 0; i--) {
        result = result - array[i]
    }
    return result
}
undefined
subtractReverse([0, 1, 2])
1
subtractReverse([0, 1, 2, 3])
0
subtractReverse([0, 1, 2, 3, 4]) -
    2
subtractReverse([1, 2, 3, 4]) -
    6

Question n 8;

function product(array) {
    var result = 1
    for (var i = 0; i < array.length; i++) {
        result = result * array[i]
    }
    return result
}
undefined
product([1, 2, 3])
6
product([0, -1, -2])
0
Question 9;