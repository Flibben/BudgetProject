class Transaction {
    constructor(value, date, from, to, category) {
        this.value = value;
        this.date = date;
        this.from = from;
        this.to = to;
        this.category = category;
        console.log("Created transaction of " + this.value + " on the " + this.date + ".");
    }
}