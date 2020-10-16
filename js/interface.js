class Interface {
    constructor() {
        this.initializeCreateButton();
    }
    initializeCreateButton() {
        let create_button = document.getElementById("newBudgetBtn");
        create_button.addEventListener("click", function(e){
            let user_name = document.getElementById("username");
            let budget_name = document.getElementById("budgetname");
            //Make sure user has fillied out the fields
            if ((user_name.value.trim() != "") || (budget_name.value.trim() != "")) {
                //Create user and budget
                let this_user = new User(user_name.value);
                this_user.createBudget(budget_name.value);
            }
            else {
                alert("Please enter your name and a name for your budget.");
            }
        })
    }
}