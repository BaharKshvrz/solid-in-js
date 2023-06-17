# Dependecy Inversion Principle

The dependency inversion principle is a design principle that states that high-level modules should depend on abstractions rather than concrete implementations. This helps decouple the high-level and low-level modules, making it easier to change the low-level ones without affecting the high-level ones.


In the below example, instead of depending store to paypal or stripe payment, we use the "paymentprocessor".
Paymentprocessor is a abstraction that used to decouple the store and payment methods.

## Structure
![](/src/dependency-inversion/first.png)
![](/src/dependency-inversion/second.png)
![](/src/dependency-inversion/third.png)
