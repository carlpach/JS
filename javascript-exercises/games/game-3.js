const questionsType = [
    {
      title: "Gender",
      key: "gender",
      questions: ["Man", "Woman"],
    },
    {
      title: "Hair Color",
      key: "hairColor",
      questions: ["Blonde", "Red", "Pink", "Brown", "White", "Black"],
    },
    {
      title: "Moustache",
      key: "moustache",
      questions: ["Yes", "No"],
    },
    {
      title: "Glasses",
      key: "glasses",
      questions: ["Yes", "No"],
    },
    {
      title: "Hat or Cap",
      key: "hatOrCap",
      questions: ["Yes", "No"],
    },
    {
      title: "Clothes color",
      key: "clothesColor",
      questions: ["Red", "Orange", "Green", "White", "Black", "Pink"],
    },
    {
      title: "Skin color",
      key: "skinColor",
      questions: ["Light", "Dark"],
    },
    {
      title: "Long Hair",
      key: "longHair",
      questions: ["Yes", "No"],
    },
  ];
  
  const persons = [
    {
      img: "public/exercise-3/001-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/002-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/003-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/004-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "Yes",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/005-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/006-man.svg",
      gender: "Man",
      hairColor: "Brown",
      moustache: "Yes",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/007-man.svg",
      gender: "Man",
      hairColor: "Red",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/008-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/009-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/010-woman.svg",
      gender: "Woman",
      hairColor: "Brown",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/011-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/012-woman.svg",
      gender: "Woman",
      hairColor: "Red",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/013-woman.svg",
      gender: "Woman",
      hairColor: "White",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/014-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/015-woman.svg",
      gender: "Woman",
      hairColor: "Brown",
      moustache: "No",
      glasses: "Yes",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/016-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "Yes",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/017-woman.svg",
      gender: "Woman",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/018-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/019-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/020-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/021-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "Yes",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/022-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "Yes",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/023-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/024-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/025-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/026-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/027-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/028-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/029-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/030-woman.svg",
      gender: "Woman",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "No",
    },
    {
      img: "public/exercise-3/031-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/032-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "Yes",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/033-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/034-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Dark",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/035-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/036-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/037-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "Yes",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/038-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/039-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "Yes",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/040-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/041-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/042-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/043-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "Yes",
    },
    {
      img: "public/exercise-3/044-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "No",
    },
    {
      img: "public/exercise-3/045-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
    },
  ];

// select random person
const targetPerson = persons[Math.floor(Math.random() * persons.length)];
console.log(targetPerson);

const bBoard$$ = document.querySelector(".b-board-game");
const bQuestionDiv$$ = document.querySelector(".b-questions");

// heading clues and attempts
const counter$$ = document.querySelector(".b-clues");
const counterAttempt$$ = document.createElement("h2");
const divCluesAttempts$$ = document.createElement("div");
divCluesAttempts$$.classList.add("b-cluesAttempt");
divCluesAttempts$$.appendChild(counter$$);
divCluesAttempts$$.appendChild(counterAttempt$$);
document.body.insertBefore(divCluesAttempts$$, bBoard$$);
counterAttempt$$.textContent = "Attempts: 0";

// initialize persons
const printPersons = () => {
    for (const person of persons) {
        
        const imgPerson$$ = document.createElement("img");
        imgPerson$$.src = person.img;
        persons$$.push(imgPerson$$);
        bBoard$$.appendChild(imgPerson$$);

        imgPerson$$.addEventListener("click", () => handleClickPersonTarget(person) )
    }
}

const handleClickPersonTarget = (person) => {
    countAttempts++
    console.log(countAttempts);
    counterAttempt$$.textContent = `Attempts: ${countAttempts}`;

    if (person.img === targetPerson.img) {
        alert("YOU WON!");
        location.reload();
    } else {
        alert("KEEP TRYING...")
    }
}

// filter persons
const FilterPersons = (questionTyp, quest) => {
    //console.log(targetPerson[questionTyp]);
    //console.log(quest);
    for (let index = 0; index < persons.length; index++) {
        const person = persons[index];

        if (quest) {
            if (targetPerson[questionTyp] === quest) { // Answer is Yes
                if (targetPerson[questionTyp] !== person[questionTyp]) {
                    disableElementHtml(persons$$[index]);
                }
            } else { // Answer is No
                if (quest === person[questionTyp]) {
                    disableElementHtml(persons$$[index]); 
                }
            }
        }

    } 
}

// create div of question types
const printQuestions = () => {
    for (const questionTyp of questionsType) {
        const divquestionTyp$$ = document.createElement("div");
        
        divquestionTyp$$.innerHTML = `<h2 class="">${questionTyp.title}</h2>`
        
        // add buttons of questions
        for (const quest of questionTyp.questions) {
            const buttQuest$$ = document.createElement("button");
            buttQuest$$.textContent = quest;
            divquestionTyp$$.appendChild(buttQuest$$);
            buttQuest$$.addEventListener("click", () => handlerClickQuestion(questionTyp.key, quest, buttQuest$$));
        }
        bQuestionDiv$$.appendChild(divquestionTyp$$);
    }
}

const handlerClickQuestion = (questionTyp, quest, buttQuest$$) => {
    counter++
    counter$$.textContent = `Clues: ${counter}`;

    disableElementHtml(buttQuest$$);
    FilterPersons(questionTyp, quest);

}

const disableElementHtml = (element) => {
    element.style.pointerEvents = "none";
    element.style.opacity = "0.1";  
}

let counter = 0;
let countAttempts = 0;
let persons$$ = [];
printPersons();
printQuestions();




