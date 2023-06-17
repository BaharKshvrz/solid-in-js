import Paypal from "../Paypal.js";
import Stripe from "../Stripe.js";
class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }
    purchase(price, quantity) {
        this.paymentProcessor.pay(price * quantity);
    }
}
class StripePaymentProcessor {
    constructor(user) {
        this.user = user;
        this.stripe = new Stripe(user);
    }
    pay(amountInDollars) {
        this.stripe.makePayment(amountInDollars / 100);
    }
}
class PaypalPaymentProcessor {
    constructor(user) {
        this.user = user;
        this.paypal = new Paypal();
    }
    pay(amountInDollars) {
        this.paypal.makePayment(this.user, amountInDollars);
    }
}
// Pay in cents
const user = { name: "Bahar" };
const store = new Store(new StripePaymentProcessor(user));
store.purchase(2000, 2);
store.purchase(8000, 1);
// Pay in dollars
const user2 = { name: "Farhad" };
const store2 = new Store(new PaypalPaymentProcessor(user2));
store2.purchase(20, 2);
store2.purchase(80, 1);
