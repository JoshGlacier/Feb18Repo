var data = {
    qnum:0,
    questions:[
        {
            title:"What is the national animal of Scotland",
            answer:"Unicorn",
            bgcolors:"yellow"
        },
        {
            title:"Is 5 bigger than 4?",
            answer:"yes",
            bgcolors:"blue"
        },
        {
            title:"What is the colour of a banana?",
            answer:"yellow",
            bgcolors:"pink"
        }
    ]
}

var qnum = 0; 
var questions = [
    "What is the national animal of Scotland?",
    "Is 5 bigger than 4?",
    "What is the colour of a banana?"
];

var answers = [
    "unicorn",
    "yes",
    "yellow"
];

var bgcolors = [
    "yellow",
    "blue",
    "pink"
];

function Start(){
    // document.querySelector("#text_1").innerText = questions[qnum]; 
    document.querySelector("#text_1").innerText = data.questions[data.qnum].title; 
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolors;
}

function Check() {
    var myInput = document.querySelector("#anwser").value;
    console.log(myInput);
    if(myInput === answers[qnum]) {
        document.querySelector("#Emma").innerHTML = "<h1>CORRECT!</h1>";
        document.querySelector("#Emma").style.color = "purple";
        NextQ()

        // qnum++;
        // document.querySelector("#text_1").innerText = questions[qnum];

       // document.querySelector("#Emma").style.color = "purple"
       // if (qnum === 1) {
           // qnum = 2; 
           // document.querySelector("#text_1").innerText = "Is 5 bigger than 4?"
           // answer = "yes"; 
       // } else if (qnum === 2) {
           // qnum = 3;
           // document.querySelector("#text_1").innerText = "what is the colour of a banana?"
          //  answer = "yellow"; 
      //  }

    } else {
        document.querySelector("#Emma").innerHTML = "<h1>WRONG!!!!!!!!!!!!!</h1>"
        document.querySelector("#Emma").style.color = "red"
    }
}

function NextQ() {
    data.qnum++
    document.querySelector("#text_1").innerText = data.questions[data.qnum].title; 
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolors;
    // document.querySelector("#text_1").innerText = "<img src='"+data.questions[data.qnum].img+"' />"; 
}



Start(); 