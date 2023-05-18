let age = 0;

function drive(age) {
    if (age < 18) {
        console.log(`I can't drive since my age
                    is ${age}`); 
    }
    else {
       console.log(`I can drive! I am ${age}
                    years old`); 
    }
}

drive(14);
drive(22);