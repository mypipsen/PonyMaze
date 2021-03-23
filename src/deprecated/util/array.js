global.Array.range = function (n) {
    // Array.range(5) --> [0,1,2,3,4]
    return Array.apply(null, Array(n)).map((x, i) => i)
};

global.Object.defineProperty(Array.prototype, 'chunk', {
    value: function (n) {

        // ACTUAL CODE FOR CHUNKING ARRAY:
        return Array.range(Math.ceil(this.length / n)).map((x, i) => this.slice(i * n, i * n + n));

    }
});