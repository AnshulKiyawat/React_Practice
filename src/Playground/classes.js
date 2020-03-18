class Person{
    constructor(name='Anonymous', age=0) {
        this.name = name
        this.age = age
    }

    getGreeting() {
        return `Hello I am ${this.name}!.`
    }

    getDescription() {
        return  `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age)
        this.major = major
    }

    hasMajor(){
        return !!this.major
    }

    getDescription(){

        let description = super.getDescription()


        if(this.hasMajor())
        {
            description += ` Their Major is ${this.major}.`
        }

        return description
    }
}

class Traverler extends Person{
    constructor(name,age,home='Nowhere'){
        super(name,age)
        this.home = home
    }

    getGreeting(){

        let greeting = super.getGreeting()

        greeting += ` I'm visiting from ${this.home}.`

        return greeting
    }
}

const me = new Traverler('Anshul Kiyawat',22,'Indore');
console.log(me.getGreeting());

const other = new Traverler()
console.log(other.getGreeting())

