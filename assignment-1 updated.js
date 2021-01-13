//getting html elements
let inputField = document.getElementById('inputField')
let outputField = document.getElementById('outputField')
let upButton = document.getElementById('btn-up')
let downButton = document.getElementById('btn-down')
let maxButton = document.getElementById('btn-max')
let minButton = document.getElementById('btn-min')
let sumButton = document.getElementById('btn-sum')
let medianButton = document.getElementById('btn-median')
let meanButton = document.getElementById('btn-mean')
let stdevButton = document.getElementById('btn-stdev')
let resetButton = document.getElementById('btn-reset')

//to store results of each operation
let upResult
let downResult 
let minResult
let maxResult
let sumResult
let medianResult
let meanResult
let stdevResult

//function to set values of each Result as null
const nullSetter = () => {
    upResult = null
    downResult = null
    minResult = null
    maxResult = null
    sumResult = null
    medianResult = null
    meanResult = null
    stdevResult = null
}

//to get input from input field
let arr = []
inputField.addEventListener('input', () => {
    let inputValue = inputField.value;
    arr = inputValue.split(' ').map(Number); //split string based on spaces and convert them to number
    nullSetter()
})

//event listeners for buttons
upButton.addEventListener('click', () => {
    if(arr.length === 0) {
        alert("Enter values first")
    } else {
        upResult = up(arr)
        outputField.value = upResult
    }
})
downButton.addEventListener('click', () => {
    if(arr.length === 0) {
        alert("Enter values first")
    } else {
        downResult = down(arr)
        outputField.value = downResult
    }
})
maxButton.addEventListener('click', () => {
    if(arr.length === 0) {
        alert("Enter values first")
    } else {
        maxResult = max(arr)
        outputField.value = maxResult
    }
})
minButton.addEventListener('click', () => {
    if(arr.length === 0) {
        alert("Enter values first")
    } else {
        minResult = min(arr)
        outputField.value = minResult
    }
})
sumButton.addEventListener('click', () => {
    if(arr.length === 0) {
        alert("Enter values first")
    } else {
        sumResult = sum(arr)
        outputField.value = sumResult
    }
})
medianButton.addEventListener('click', () => {
    if(arr.length === 0) {
        alert("Enter values first")
    } else {
        medianResult = median(arr)
        outputField.value = medianResult
    }
})
meanButton.addEventListener('click', () => {
    if(arr.length === 0) {
        alert("Enter values first")
    } else {
        meanResult = mean(arr)
        outputField.value = meanResult
    }
})
stdevButton.addEventListener('click', () => {
    if(arr.length === 0) {
        alert("Enter values first")
    } else {
        stdevResult = stdev(arr)
        outputField.value = stdevResult
    }
})
resetButton.addEventListener('click', () => {
    inputField.value = ""
    outputField.value = ""
    nullSetter()
    arr = []
})

//function implementations
const up = (arr) => {
    if(upResult === null && arr.length !== 0) {
        upResult = [...arr.sort((a, b) => {
            return a-b
        })]
    }
    return upResult
}
const down = (arr) => {
    if(downResult === null) {
        downResult = [...arr.sort((a, b) => {
            return b-a
        })]
    }
    return downResult
}
const max = (arr) => {
    if(maxResult === null) {
        return Math.max(...arr)
    } else {
        return maxResult
    }
}
const min = (arr) => {
    if(minResult === null) {
        return Math.min(...arr)
    } else {
        return minResult
    }
}
const sum = (arr) => {
    if(sumResult === null) {
        let sum = 0
        const result = arr.reduce((acc, item) => {
            return acc + item
        })
        return result
    } else {
        return sumResult
    }
}
const median = (arr) => {
    const sortedArray = up(arr)
    const mid = Math.floor(sortedArray.length / 2)
    //if even no. of elements then median will be average of two middle values
    if(sortedArray.length % 2 === 0) {
        return (sortedArray[mid-1] + sortedArray[mid]) / 2
    } else {//if odd no of values then the middle value is the median
        return sortedArray[mid]
    }
}
const mean = (arr) => {
    const sumOfArray = sum(arr)
    return (sumOfArray / arr.length).toFixed(3) //to print mean upto 3 decimal points
}
const stdev = (arr) => {
    const m = mean(arr)
    const result = arr.reduce((acc, item) => {
        return acc + Math.pow(item - m, 2)
    }, 0) 
    return (Math.sqrt(result / arr.length)).toFixed(3)
}