/*

    Function() constuctor

    * expressão new
    * criar um novo objeto
    * this Keyword
    
*/

function Person(name){
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const lucas = new Person("Lucas")
const fernanda = new Person("Fernanda")
console.log(lucas.walk())
console.log(fernanda.walk())