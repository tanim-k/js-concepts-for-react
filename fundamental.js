//  how to declare a variable using let and const
const fatherName = 'Arnold';
let season ='rainy';
season = 'winter';

// 6 basic conditions: : > < === !== >= <=
// multiple conditions: && , || 

if(fatherName === 'arnold' || season === 'rainy') {

}
else if(fatherName === 'Arnold'){

}
else{

}
// 3. array declare
// index, length.array, push, indexOf
const numbers = [45, 56,45, 454]
numbers[2] = 67
console.log(numbers)
// 4. for loop 
for(let i=0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}
// function 
function multiply(num1, num2, num3) {
    const result = num1* num2 + num3;
    return result;
}
const output = multiply(34, 56);
//  6. object 
const student = {
    name: 'sakib khan',
    age: 45,
    movies: ['king khan', 'dhakar pola']
}
const myVariable = 'age';

// direct by property
console.log(student.age);  
// access via string
console.log(student['age']); 
console.log(student[myVariable]); // access via property name in a variable