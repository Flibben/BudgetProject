class Interface {
    constructor() {
        initialize_create_button();
    }
    initialize_create_button() {
        let create_button = document.getElementById("newBudgetBtn");
        create_button.addEventListener("click", function(e){
            let user_name = document.getElementById("username");
            let budget_name = document.getElementById("budgetname");
            //Make sure user has fillied out the fields
            if ((user_name.value.trim() != "") || (budget_name.value.trim() != "")) {
                //Create user and budget
                let (user_name.value + "_user") = new User(user_name.value);
                (user_name + "_user").createBudget(budget_name.value);
            }
            else {
                alert("Please enter your name and a name for your budget.");
            }
        })
    }
}