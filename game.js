const utils = require('./lib/utils')

module.exports = {
    generateField: function (n, m) {
        return new Array(n).fill('').map(value => this.generateRow(m))
    },
    generateRow: function(m) {
        return new Array(m).fill('').map(value => utils.getRandomBool() ? '*' : '.')
    },
    guessRow: function(currRow, prevRow, nextRow) {
        prevRow = prevRow || currRow.map(value => '.')
        nextRow = nextRow || currRow.map(value => '.')
        return currRow.map((value, index) => {
            if(value === '*') {
                return '*'
            }
            let start = index - 1 > 0 ? index - 1 : 0,
                end = index + 2 < currRow.length ? index + 2 : currRow.length,
                neighbours = prevRow.slice(start, end).concat(nextRow.slice(start, end))
            neighbours.push(index > 0 ? currRow[index - 1] : '.')
            neighbours.push(index + 1 < currRow.length ? currRow[index + 1] : '.')
            return this.countMines(neighbours)
        })
    },
    countMines: function(arr) {
        return arr.map(value => value === '*' ? 1 : 0).reduce((sum, val) => sum + val)
    },
    play: function(n, m) {
        return this.generateField(n, m).map((value, index, arr) => {
            return this.guessRow(value, arr[index-1], arr[index+1])
        })
    }
}