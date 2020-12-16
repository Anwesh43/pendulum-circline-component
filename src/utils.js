const maxScale = (scale, i, n) => Math.max(0, scale - i / n)

const divideScale = (scale, i, n) => Math.min(1 / n, maxScale(scale, i, n)) * n 

export const cumulativeRotation = (scale, n, deg) => {
    let sum = 0
    for (let j = 0; j < n; j++) {
        let rot = deg * (1 - 2 * (j % 2))
        if (j == 0 || j == n - 1) {
            rot /= 2 
        }
        sum += rot * divideScale(scale, j, n)
    }
    return sum 
}