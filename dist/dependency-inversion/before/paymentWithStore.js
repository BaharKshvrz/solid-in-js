"use strict";
// type User = {
//     name: string;
// }
// class Stripe {
//     user: User;
//     constructor(user: User) {
//         this.user = user;
//     }
//     makePayment(amountInCents: number) {
//         console.log(`${this.user.name} made payment of $${amountInCents / 100} with Stripe`);
//     }
// }
// class Store {
//     stripe: Stripe;
//     user: User;
//     constructor(user: User) {
//         this.user = user;
//         this.stripe = new Stripe(this.user);
//     }
//     purchase(product: string, price: number, quantity: number) {
//         console.log(`${this.user.name} wants to buy ${product}`); 
//         this.stripe.makePayment(price * quantity * 100);
//     }
// }
// const user: User = { name : "Bahar" };
// const store = new Store(user);
// store.purchase("Shoes", 150, 2);
// store.purchase("Bag", 500, 1);
