class User {
    constructor(user_name) {
        this.user_name = user_name;
        this.budgets = [];
    }
    createBudget(budget_name){
        let (budget_name+"_budget") = new Budget(budget_name+"_budget");
        this.budgets.push(budget_name+"_budget")
    }
}