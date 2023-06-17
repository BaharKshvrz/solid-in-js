type User = {
    name: string;
}

export default class Stripe {
    user: User;
    constructor(user: User) {
        this.user = user;
    }
    makePayment(amountInCents: number) {
        console.log(`${this.user.name} made payment of $${amountInCents} with Stripe`);
    }
}
