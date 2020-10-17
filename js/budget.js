class Budget {
    constructor(budget_name) {
        this.budget_name = budget_name;
        this.accounts = [];
        console.log("Created budget: " + this.budget_name);
    }
    createAccount(account_name) {
        let my_account = new Account(account_name);
        this.accounts.push(my_account);
    }
}