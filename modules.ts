
export function CalculateLateFee(daysLate: number): number { // we are exporting this function
    return daysLate * .25;
}


export function MaxBookAllower(age: number): number { // we are exporting this function also 
    if(age < 12) {
        return 3;
    }
    else {
        return 10;
    }
}

function privateFunc(): void { // we are not exporting this function 
console.log("This is private...");
}
