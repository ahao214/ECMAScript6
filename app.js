var colors = ["red", "yellow", "blue"];


//ES5
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

//ES6 forEach
colors.forEach(function (color) {
    console.log(color);
})


var numbers = [1, 2, 3, 4, 5]

var sum = 0;
numbers.forEach(function (number) {
    sum += number;
});

console.log(sum);

