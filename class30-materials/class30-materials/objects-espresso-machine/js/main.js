//Create an espresso machine constructor that makes machines with 4 properties and 3 methods


class Epresso {
    constructor(type,amount,cafCount,cost){
        this.type = type
        this.amount = amount
        this.cafCount = cafCount
        this.cost = cost
    }
    brewing(){
        console.log('DRRRR')
    }
    getPrice(){
        console.log(`total price is ${this.cost} + tax`)
    }
    doneBrewing() {
        console.log('PING!')
    }
}
