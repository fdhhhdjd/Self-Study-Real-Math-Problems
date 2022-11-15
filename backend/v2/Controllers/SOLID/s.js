const { v4: uuidv4 } = require('uuid');
class Order {
    constructor(userId) {

        this.userId = userId;

        this.timeOrder = Date.now();

        this.products = []
    }
}

class OrderManager {
    constructor() {
        this.order = null;
    }

    createOrder(userId) {
        this.order = new Order(userId)
        return this.order;
    }

    addProduct(product) {
        this.order.products.push(product);
    }

    getOrder() {
        return this.order;
    }

    isValid() {
        return !!this.order.products.length > 0;
    }

    sendOrder() {
        if (this.isValid()) {
            this.orderSendEmail = new SendEmail()

            this.orderSendEmail.sendEmail(this.order.userId)
        }
    }
}
class SendEmail {
    sendEmail(userId) {
        console.log(`Send Email Success To::::${userId}`)
        return 1
    }
    showName(name) {
        console.log(name, ":::::")
    }
}
const orderManager = new OrderManager();

orderManager.createOrder(`userId:${uuidv4()}`)

orderManager.addProduct({
    productId: uuidv4(),
    quantity: 1,
    price: 1000,
    unit: "VND"
})

console.log(`Order Info:::::`, orderManager.getOrder())

orderManager.sendOrder()

