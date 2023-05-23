const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

const userNames = users.map( (user) => {
    console.log(user.name[0]);
    if (user.name[0] === "A") { user.name = "Anacleto"};
    return user.name;
    }
);

console.log(userNames);