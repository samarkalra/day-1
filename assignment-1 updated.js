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
        up(arr)
        outputField.value = upResult
    }
})
downButton.addEventListener('click', () => {
    if(arr.length === 0) {
        alert("Enter values first")
    } else {
        down(arr)
        outputField.value = downResult
    }
})
maxButton.addEventListener('click', () => {
    if(arr.length === 0) {
        alert("Enter values first")
    } else {
        max(arr)
        outputField.value = maxResult
    }
})
minButton.addEventListener('click', () => {
    if(arr.length === 0) {
        alert("Enter values first")
    } else {
        min(arr)
        outputField.value = minResult
    }
})
sumButton.addEventListener('click', () => {
    if(arr.length === 0) {
        alert("Enter values first")
    } else {
        sum(arr)
        outputField.value = sumResult
    }
})
medianButton.addEventListener('click', () => {
    if(arr.length === 0) {
        alert("Enter values first")
    } else {
        median(arr)
        outputField.value = medianResult
    }
})
meanButton.addEventListener('click', () => {
    if(arr.length === 0) {
        alert("Enter values first")
    } else {
        mean(arr)
        outputField.value = meanResult
    }
})
stdevButton.addEventListener('click', () => {
    if(arr.length === 0) {
        alert("Enter values first")
    } else {
        stdev(arr)
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
    if(upResult === null) {
        upResult = [...arr.sort((a, b) => {
            return a-b
        })]
    }
}
const down = (arr) => {
    if(downResult === null) {
        downResult = [...arr.sort((a, b) => {
            return b-a
        })]
    }
}
const max = (arr) => {
    if(maxResult === null) {
        maxResult = Math.max(...arr)
    }
}
const min = (arr) => {
    if(minResult === null) {
        minResult = Math.min(...arr)
    }
}
const sum = (arr) => {
    if(sumResult === null) {
        let sum = 0
        sumResult = arr.reduce((acc, item) => {
            return acc + item
        })
    } 
}
const median = (arr) => {
    if(medianResult === null) {
        if(upResult === null) {
            up(arr)
        }
        const mid = Math.floor(upResult.length / 2)
        medianResult = (upResult.length === 0) ? (upResult[mid-1] + upResult[mid]) / 2 : upResult[mid]
    }
}
const mean = (arr) => {
    if(meanResult === null) {
        if(sumResult === null) {
            sum(arr)
        }
        meanResult = (sumResult / arr.length).toFixed(3) //to print mean upto 3 decimal points
    }
}
const stdev = (arr) => {
    if(stdevResult === null) {
        if(meanResult === null) {
            mean(arr)
        }   
        stdevResult = arr.reduce((acc, item) => {
            return acc + Math.pow(item - meanResult, 2)
        }, 0) 
        stdevResult = (Math.sqrt(stdevResult / arr.length)).toFixed(3)
    }
}