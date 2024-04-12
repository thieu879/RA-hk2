class Account {
    protected accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Đã gửi số tiền ${amount} vào tài khoản ${this.accountNumber}.`);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Đã rút số tiền ${amount} từ tài khoản ${this.accountNumber}.`);
        } else {
            console.log(`Trong tài khoản không đủ tiền ${this.accountNumber}.`);
        }
    }
}

class SavingsAccount extends Account {
    private interestRate: number;

    constructor(accountNumber: string, initialBalance: number, interestRate: number) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }

    calculateInterest(): number {
        const monthlyInterest = this.balance * (this.interestRate / 100) / 12;
        return monthlyInterest;
    }
}

const savingAccount = new SavingsAccount("ThiềuNoPro", 5000, 0.5);

console.log("Lãi hàng tháng:", savingAccount.calculateInterest());

savingAccount.deposit(1000);

console.log("Lãi hàng tháng sau khi gửi:", savingAccount.calculateInterest());
