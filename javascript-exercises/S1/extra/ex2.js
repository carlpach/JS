
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},
                        {name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, 
                        {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, 
                        {name: "Pasta", isVegan: true}];

let counter = 0;
for (let i = 0; i < foodSchedule.length; i++) {
    foodItem = foodSchedule[i];
    if (!foodItem.isVegan) {
        foodItem.name = fruits[counter]
        foodItem.isVegan = true;
        counter++;
    }

}


console.log(foodSchedule);