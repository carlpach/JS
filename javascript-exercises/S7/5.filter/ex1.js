const ages = [22, 18, 24, 55, 65, 21, 12, 13, 90];

const agesUnder182 = ages.filter( (age) => {
    return age > 18;
});


const agesUnder18 = ages.filter( age => age > 18);

console.log(agesUnder182);
console.log(agesUnder18);