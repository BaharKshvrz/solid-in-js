type User = {
    name: string;
}

export default class Paypal {
    makePayment(user: User, amountInDollars: number) {
        console.log(`${user.name} made payment of $${amountInDollars} with Paypal.`);
    }
}

