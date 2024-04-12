"use strict";
class Account1 {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Đã gửi số tiền ${amount} vào tài khoản ${this.accountNumber}.`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Đã rút số tiền ${amount} từ tài khoản ${this.accountNumber}.`);
        }
        else {
            console.log(`Trong tài khoản không đủ tiền ${this.accountNumber}.`);
        }
    }
}
class CheckingAccount extends Account1 {
    constructor(accountNumber, initialBalance, overdraftLimit) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        const availableBalance = this.balance + this.overdraftLimit;
        if (amount <= availableBalance) {
            this.balance -= amount;
            console.log(`Đã rút số tiền ${amount} từ tài khoản ${this.accountNumber}.`);
        }
        else {
            console.log(`Tài khoản vượt hạn mức thấu chi ${this.accountNumber}.`);
        }
    }
}
const checkingAccount = new CheckingAccount("ThiềuNoPro", 5000, 1000);
checkingAccount.withdraw(6000);
checkingAccount.withdraw(2000);
