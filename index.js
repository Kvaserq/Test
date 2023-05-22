const testDate = [
    {
        question: "Как вы относитесь к еде?",
        a: "Очень отношусь!",
        b: "Я джокер клон Дотторе",
        c: "Да я люблю луковую лепешку",
        d: "Воу, воу, воу! Луковая лепешка",
    }, {
        question: "Кто такая коллеи?",
        a: "Еда!", 
        b: "Я самый лучший блогер",
        c: "chesecak",
        d: "Лабораторная мышка"
    }, {
        question: "Кто такой Дотторе?",
        a: "Это я!",
        b: "Нет, это я!",
        c: "У мужлан нет прав",
        d: "М-м-м, луковая лепешка...",
    }
];

const answerEl = document.querySelectorAll(".answer")
const test = document.getElementById("test")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const currentBgn = document.getElementById("submit")
const aa = document.getElementById("a")
const bb = document.getElementById("b")
const cc = document.getElementById("c")
const dd = document.getElementById("d")



let currentTest = 0;
let score = 0;
let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let counter = 0;





function loadTest() {

    scorre();
    deselectAnswer();
    const currentTestData = testDate [currentTest];
    questionEl.innerText = currentTestData.question;
    a_text.innerHTML = currentTestData.a; 
    b_text.innerText = currentTestData.b;
    c_text.innerText = currentTestData.c;
    d_text.innerText = currentTestData.d;
    
}

function getSelected() {

    let answer = undefined
    answerEl.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

function deselectAnswer() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false
    })
}

loadTest();


function scorre() {
    aa.addEventListener("click", () => {
        if (a) {
            score += 1
        }
    })
    bb.addEventListener("click", () => {
        if (b) {
            score += 2
        }
    })
    cc.addEventListener("click", () => {
        if (c) {
            score += 3
        }
    })
    dd.addEventListener("click", () => {
        if (d) {
            score += 4
        }
    })
    };

    function results() {
           if (score >=0 && score <= 6) {
                test.innerHTML = `<img src="images/hospital.jpg" width="200px" height="200px" vspace="7""> <h2>Вы мега рауль 228 курете снюс 1<h2>`
            
                }
                    
            
              else  if (score >=7 && score <= 12) {
                    test.innerHTML = `<img src="images/hospital.jpg" width="200px" height="200px" vspace="7""> <h2>Вы мега рауль 228 курете снюс 2<h2>`
                
                    }
                   else if (score >=13 && score <= 18) {
                        test.innerHTML = `<img src="images/hospital.jpg" width="200px" height="200px" vspace="7""> <h2>Вы мега рауль 228 курете снюс 3<h2>`
                    
                        }
                     else   if (score >= 19 && score <= 24) {
                            test.innerHTML = `<img src="images/hospital.jpg" width="200px" height="200px" vspace="7""> <h2>Вы мега рауль 228 курете снюс 4<h2>`
                        
                            }
        
    }



currentBgn.addEventListener("click", () => {
    const answer = getSelected();

        if(answer) {
           
            currentTest++;
    if (currentTest < testDate.length) {
        loadTest();
    } else {
        results();
    } 
    /*else {
        test.innerHTML = `<h2>${score}<h2>`
     }*/
    }
        
    })