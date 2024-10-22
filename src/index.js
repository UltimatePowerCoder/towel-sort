
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }

    const result = [];
    
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        if (i % 2 === 0) {
            result.push(...row);
        } else {
            result.push(...row.reverse());
        }
    }

    return result;
}
