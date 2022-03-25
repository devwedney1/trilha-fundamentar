// for...in

let person = {
    name: 'Lucas',
    age: 23,
    weight: 69.90
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}