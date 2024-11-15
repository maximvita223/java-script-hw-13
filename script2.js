class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        let sum = 0;
        this.products.forEach(product => {
            sum += product.price
        });
        console.log(`Summ vsex products = ${sum}`);
        // return this.products.reduce((total, product) => total + product.price, 0);
    }
}

const banan1 = new Product("banan", 112);
const banan2 = new Product("banan", 12);
const banan3 = new Product("banan", 122);
const banan4 = new Product("banan", 12);
const banan5 = new Product("banan", 11);

const or = new Order(1);
or.addProduct(banan1)
or.addProduct(banan2)
or.addProduct(banan3)
or.addProduct(banan4)
or.addProduct(banan5)
or.getTotalPrice();