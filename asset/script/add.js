const add = document.getElementById("add");
const number_1 = document.getElementById("number_1");
const number_2 = document.getElementById("number_2");

const sum = document.getElementById("sum")

const arrowFunction = () => {
 const result = parseInt(number_1.value) + parseInt(number_2.value)

 console.log(typeof parseInt(number_1.value), typeof number_2.value)

 sum.value = result
};

add.addEventListener("click", arrowFunction);