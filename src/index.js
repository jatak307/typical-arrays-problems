
exports.min = function min (array) {
    if (!array || array.length == 0) {
        return 0;
    } else {
        let minValue = Math.min(...array);
        return minValue;
    }
}

exports.max = function max (array) {
    if (!array || array.length == 0) {
        return 0;
    } else {
        let maxValue = Math.max(...array);
        return maxValue;
    }
}

exports.avg = function avg (array) {
    if (!array || array.length == 0) {
        return 0;
    } else {
        let average = array.reduce((a, b) => a + b, 0) / array.length;
        return average;
    }
}
