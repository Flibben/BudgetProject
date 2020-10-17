class Account {
    constructor(account_name) {
        this.account_name = account_name;
        this.balance = 0;
        this.transactions = [];
        console.log("Created account: " + this.account_name);
    }
    createTransaction(value, date, from, to, category) {
        let my_transaction = new Transaction(value, date, from, to, category);
        balance =+ my_transaction.value;
        this.transactions.push(my_transaction);
    }
    // Turning strings into dates (will they be dated), and then subtract them
    // to get a value that is either negative, positive, or zero.
    sortTransactions() {
        this.transactions.sort(function(a,b) {
            return new Date(b.date) - new Date(a.date);
          });
    }
    
}