
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let index = 0; index < alumns.length; index++) {
    const alum = alumns[index];
    let trimAprob = 0;
    if (alum.T1) {
        trimAprob += 1
} // or do ---> approvedCount = alumn.T1 ? approvedCount + 1 : approvedCount;
    if (alum.T2) {
        trimAprob += 1  
    }
    if (alum.T3) {
        trimAprob += 1  
    }
    if (trimAprob >= 2) {
        alum.isApproved = true;
    }
    else {
        alum.isApproved = false;
}    // or do ---> alumn.isApproved = approvedCount >= 2;
    
}

console.log(alumns);
