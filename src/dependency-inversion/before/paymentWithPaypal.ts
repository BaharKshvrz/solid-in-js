// import Paypal from "../Paypal.js";

// type User = {
//     name: string;
// }

// class Store {
//     paypal: Paypal;
//     user: User;
//     constructor(user: User) {
//         this.user = user;
//         this.paypal = new Paypal();
//     }
//     purchase(product: string, price: number, quantity: number) {
//         console.log(`${this.user.name} wants to buy ${product}`); 
//         this.paypal.makePayment(this.user, price * quantity);
//     }
// }

// const user: User = { name : "Bahar" };
// const store = new Store(user);
// store.purchase("Shoes", 150, 2);
// store.purchase("Bag", 500, 1);