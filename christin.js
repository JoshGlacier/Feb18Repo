// var answer = "B";
var data = {
    qnum: 0;
    questions: [
        {  
            title: "How is life?",
            answer: "Good",
            bgcolor: "yellow",
            img: "http://placekitten.com/500/500"
        },
        {  
            title: "Is 5 bigger than 4?",
            answer: "Yes",
            bgcolor: "blue",
            img: "http://placekitten.com/600/600"
        },
        {  
            title: "What is the colour of a banana?",
            answer: "Yellow",
            bgcolor: "green",
            img: "http://placekitten.com/700/700"
        }
    ]
}
        

var qnum = 0;
var questions = [
    "What comes after A?",
    "Is 5 bigger than 4?",
    "What is the colour of a banana?",
    "Is a whale a mammal?"
];

var answers = [
    "B",
    "Yes",
    "Yellow",
    "Yes"
];

var bgcolors = [
    "yellow",
    "blue",
    "green",
    "red",
];

var imgs = [
    "http://placekitten.com/500/500",
    "http://placekitten.com/600/600",
    "http://placekitten.com/700/700"
];

function Start(){
    document.querySelector("#c_answer").innerText = questions[qnum];
}

function CheckAnswer(){
    var myInp = document.querySelector("#c_answer").value;
    console.log(myInp);
    if(myInp === answers[qnum]){
        // qnum = 1;
        document.querySelector("#c_result").innerHTML = "<h1>Correct!</h1>";

        qnum++;
        document.querySelector(".c_text").innerText = questions[qnum];

//         //change both question and answer
//     if(qnum === 1){
//         qnum = 2;
//         document.querySelector(".c_text h1").innerHTML = "Is 5 bigger than 4?";
//         answer = "Yes";
//     } else if (qnum === 2){
//         qnum = 3;
//         document.querySelector(".c_text h1").innerHTML = "What colour is a banana";
//         answer = "Banana";
//     }

    } else {
        document.querySelector("#c_result").innerText = "<h1>WRONG!</h1>";
    }
//     //if what the user types is equivalent to the answer alert("correct");
}