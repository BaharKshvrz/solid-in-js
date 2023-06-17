export default class Paypal {
    makePayment(user, amountInDollars) {
        console.log(`${user.name} made payment of $${amountInDollars} with Paypal.`);
    }
}
