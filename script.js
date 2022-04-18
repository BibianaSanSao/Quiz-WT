//all the elements
var nextBtn = quiz.querySelector(".nextBtn button");



//if click next button 
nextBtn.onClick = () =>{
    if(question_count < questions.length - 1){
        question_count++;
        showQuestions(question_count);
    }
    else{
        console.log("Questions completed");

    }

}

let question_count = 0;
  

//get the questions and options from array
function showQuestions(index){
    var question_text = document.querySelector(".question_text");


    var option_list = document.querySelector(".option_list");
    let question_tag = '<span>'+ questions[index].numb + " . " + question [index].question+'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].option[1] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].option[2] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].option[3] +'</span></div>';
    question_text.innerHTML = question_tag;
    option_list.innerHTML = question_tag;

    var option = option_list.querySelectorAll(".option");

    for (i=0; i < option_length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}