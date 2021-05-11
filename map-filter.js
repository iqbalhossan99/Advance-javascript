// const numbers = [2, 5, 7, 8, 10, 21, 45];

// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);

// const square = numbers.map( function(x) {
//     const result = x * x;
// });

// console.log(result);

// const square = numbers.map(x => x * x);
// console.log(square);

// const filter_Num = numbers.filter(n => n > 5);
// const find_NUm = numbers.find(n => n > 5);

// console.log(find_NUm);

const students = [{
        id: "939510",
        name: "Iqbal"
    },
    {
        id: "939506",
        name: "Novab"
    },
    {
        id: "939507",
        name: "Mizanur"
    }
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const ids_filter = students.filter(s => s.id > 939506);
const ids_find = students.find(s => s.id > 939507);
// console.log(names);
console.log(ids_find);