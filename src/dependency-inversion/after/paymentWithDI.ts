import Paypal from "../Paypal.js";
import Stripe from "../Stripe.js";

type User = {
    name: string;
}

type paymentMethods = StripePaymentProcessor | PaypalPaymentProcessor;


class Store {
    paymentProcessor: paymentMethods;
    constructor(paymentProcessor: paymentMethods) {
        this.paymentProcessor = paymentProcessor;
    }

    purchase(price: number, quantity: number) {
        this.paymentProcessor.pay(price * quantity);
    }
}

class StripePaymentProcessor {
    user: User;
    stripe: Stripe;
    constructor(user: User) {
        this.user = user;
        this.stripe = new Stripe(user);
    }

    pay(amountInDollars: number) {
       this.stripe.makePayment(amountInDollars / 100);
    }
}

class PaypalPaymentProcessor {
    user: User;
    paypal: Paypal;
    constructor(user: User) {
        this.user = user;
        this.paypal = new Paypal();
    }

    pay(amountInDollars: number) {
       this.paypal.makePayment(this.user, amountInDollars);
    }
}

// Pay in cents
const user: User = { name : "Bahar" };
const store = new Store(new StripePaymentProcessor(user));
store.purchase(2000, 2);
store.purchase(8000, 1);

// Pay in dollars
const user2: User = { name : "Farhad" };
const store2 = new Store(new PaypalPaymentProcessor(user2));
store2.purchase(20, 2);
store2.purchase(80, 1);