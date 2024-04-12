class Account1 {
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
class CheckingAccount extends Account1 {
    private overdraftLimit: number;

    constructor(accountNumber: string, initialBalance: number, overdraftLimit: number) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        const availableBalance = this.balance + this.overdraftLimit;
        if (amount <= availableBalance) {
            this.balance -= amount;
            console.log(`Đã rút số tiền ${amount} từ tài khoản ${this.accountNumber}.`);
        } else {
            console.log(`Tài khoản vượt hạn mức thấu chi ${this.accountNumber}.`);
        }
    }
}

const checkingAccount = new CheckingAccount("ThiềuNoPro", 5000, 1000);

checkingAccount.withdraw(6000);

checkingAccount.withdraw(2000);
