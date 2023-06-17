export default class Stripe {
    constructor(user) {
        this.user = user;
    }
    makePayment(amountInCents) {
        console.log(`${this.user.name} made payment of $${amountInCents} with Stripe`);
    }
}
