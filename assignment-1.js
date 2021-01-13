const up = (arr) => {
    return arr.sort((a, b) => {
        return a-b
    })
}
const down = (arr) => {
    return arr.sort((a, b) => {
        return b-a
    })
}
const max = (arr) => {
    return Math.max(...arr)
}
const min = (arr) => {
    return Math.min(...arr)
}
const sum = (arr) => {
    let sum = 0
    const result = arr.reduce((acc, item) => {
        return acc + item
    })
    return result
}
const median = (arr) => {
    const sortedArray = up(arr)
    const mid = Math.floor(sortedArray.length / 2)
    //if even no. of elements then median will be average of two middle values
    if(sortedArray.length % 2 === 0) {
        return (sortedArray[mid-1] + sortedArray[mid]) / 2
    } else { //if odd no of values then the middle value is the median
        return sortedArray[mid]
    }
}
const mean = (arr) => {
    const sumOfArray = sum(arr)
    return (sumOfArray / arr.length).toFixed(3)
}
const stdev = (arr) => {
    const m = mean(arr)
    const result = arr.reduce((acc, item) => {
        return acc + Math.pow(item - m, 2)
    }, 0) 
    return (Math.sqrt(result / arr.length)).toFixed(3)
}


let arr = [10,1,9,2,8,3,7,4,6]
console.log(up(arr))
console.log(down(arr))
console.log(max(arr))
console.log(min(arr))
console.log(sum(arr))
console.log(median(arr))
console.log(mean(arr))
console.log(stdev(arr))