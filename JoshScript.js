var state = {
    name:""
}
var data = {
    qnum:0,
    questions:[
        {
        title:"How is life?",
        answer:"Good",
        bgcolour:"yellow",
        img:"http://placekitten.com/200/300"
        },
    
    {
        title:"What colour is a firetruck?",
        answer:"Red",
        bgcolour:"tomato",
        img:"http://placekitten.com/100/300"
        },
    
    {
        title:"What colour is the ocean?",
        answer:"Blue",
        bgcolour:"Blue",
        img:"http://placekitten.com/400/300"
        }
    ]

}

var qnum = 0;
var questions = [
   
];

var answers = [


];

var bgcolours = [
  
];

var imgs = [

];

function Start(){
   // document.querySelector(".Question h1").innerText = questions[qnum];
   document.querySelector(".Question h1").innerText = data.questions[data.qnum].title;
   document.body.style.backgroundColor = data.questions[data.qnum].bgcolour;
   document.querySelector("#josh_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";
}

function CheckAnswer(){
    var myInp = document.querySelector("#answer").value;
    console.log(myInp);
    if(myInp === data.questions[data.qnum].answer){
        document.querySelector("#josh_r").innerHTML = "<h1>Correct! :)</h1>";
        ChangeName()
        NextQ()
      /*  if(qnum ===1){
        document.querySelector(".Question h1").innerText = "Is 5 bigger than 4?";
        answer = "Yes";
        qnum = 2;
        } else if (qnum === 2) {
            document.querySelector(".Question h1").innerText = "What is the colour of a firetruck";
            answer = "Red";
            qnum = 3;

        }
      */  
    } else {
        document.querySelector("#josh_r").innerHTML = "<h1>WRONG! >:(</h1>"
        LoseHealth();
    }
}

function NextQ(){
data.qnum++;
document.querySelector(".Question h1").innerText = data.questions[data.qnum].title;
document.body.style.backgroundColor = data.questions[data.qnum].bgcolour;
document.querySelector("#josh_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";

}
function ChangeName() {
    state.name = document.querySelector("#answer").value;
    console.log(state);

    document.querySelector("#InnerText").innerText = "Good Job " + state.name;
    }

Start()