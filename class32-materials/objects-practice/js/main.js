// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism


class Cartoons{
    constructor(name,genre){
        this._name = name
        this._genre = genre
    }
    get name(){
        return this._name
    }
    get genre(){
        return this._genre
    }
    welcome(){
        console.log(`ITs ${this.name} time!!!`)
    }
}

class Anime extends Cartoons{
    constructor(name,genre,year){
        super(name,genre)
        this._year = year
    }
    get year(){
        return this._year
    }
    welcome(){
        console.log(`Ayayaya ${this.name} time!!!`)
    }
}

class ChineseAnimation extends Cartoons{
    constructor(name,genre,censored){
        super(name,genre)
        this._censored = censored
    }
    get censored(){
        return this._censored
    }
    welcome(){
        console.log(`ChingChong ${this.name} time!!!`)
    }
}

let Jojo = new Anime('Jojo','Action',2010)
console.log(Jojo)














// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
