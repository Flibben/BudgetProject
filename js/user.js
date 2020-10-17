class User {
    constructor(user_name) {
        this.user_name = user_name;
        this.budgets = [];
        console.log("Created user: " + this.user_name);
    }
    createBudget(budget_name){
        let my_budget = new Budget(budget_name);
        this.budgets.push(my_budget);
    }
}