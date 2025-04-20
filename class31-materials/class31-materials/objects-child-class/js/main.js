//Create an a class and extend it - Can be anything you would like it to be!

class Car {
    constructor(brand,color,year){
        this.brand = brand
        this.color = color
        this.year = year
    }
    honk() {
        console.log('HONKHONK!!')
    }
}

class Honda extends Car {
    constructor(brand,color,year,name){
        super(brand,color,year)
        this.name = name
    }
    wow(){
        console.log(`${this.brand} ${this.name} is cool`)
    }
}

let BlueHonda = new Honda('Honda','Yellow','2019','Civic')

console.log(BlueHonda)
