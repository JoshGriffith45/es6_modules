import Car from "./car.js";

export default class Wishlist {
    constructor() {
        this.list = [];
        this.nextId = 0;
    }

    add(make, model, year) {
        const carVar = new Car(++this.nextId, make, model, year);
        this.list.push(carVar);
    }

    remove(carId) {
        this.list = this.list.filter((car) => {
            return car.id != carId;
        });
    }
}