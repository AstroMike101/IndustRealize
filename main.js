let contractorArray = [];
let customerArray = [];
//class for the customer
class Customer {
    constructor(name, occupation, locationCity, range) {
        this.name = name;
        this.occupation = occupation;
        this.locationCity = locationCity; 
        this.range = range;
    }

    getName() {
        return this.name;
    }

    getLocationState() {
        return this.locationState;

    }

    getLocationCity() {
        return this.locationCity;
    }

    getRange() {
        return this.range;
    }

    getAmountGoal() {
        return this.amountGoal;
    }

    getOccupation() {
    return this.occupation;
    }

}

//class for constructors
class Contractor {
    constructor(name, location, range, perHour) {
        this.name = name;
        this.location = location;
        this.range = range;
        this.perHour = perHour;
    }

    getName() {
        return this.name;
    }

    getLocation() {
        return this.location
    }
    
    getRange() {
        return this.range;
    }
    
    getPerHour() {
        return this.perHour;
    }
}

function createContractor() {
        let contractorName = document.querySelector('#contractorName').value;
        let contractorLocationCity = document.querySelector("#contractorLocationCity").value;
        let contractorLocationState = document.querySelector("#contractorLocationState").value;
        let contractorRange = document.querySelector("#contractorSearchRange").value;
        let contractorRate = document.querySelector("#contractorRate").value;
        let con1 = new Contractor(contractorName, contractorLocationCity + ", " + contractorLocationState, contractorRange, contractorRate);
        contractorArray.push(con1);
        console.log(contractorArray);
}

//function that reads the data for the customer form and displays it to the console.
function createCustomer() {
        let customerFName = document.querySelector('#customerFName').value;
        let customerLName = document.querySelector("#customerLName").value;
        let customerLocationCity = document.querySelector("#customerLocationCity").value;
        let customerLocationState = document.querySelector("#customerLocationState").value;
        let customerRange = document.querySelector("#searchRange").value;
        let customer1 = new Customer(customerFName + " " + customerLName, customerLocationCity + ", " + customerLocationState , customerRange);
        customerArray.push(customer1);
        console.log(customerArray);
}

console.log('bruh im sooooooooo HUNGRY AND TIRED');