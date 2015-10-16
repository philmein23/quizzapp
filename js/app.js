$(document).ready(function () {


    var quiz = [{
        question: "Which DJ is owns the record label 'SubCulture'?",
        answers: ["Armin Van Buuren", "JOC", "Bryan Kearney", "Simon Patterson"],
        correctAnswer: "JOC"

    },

        {
            question: "Which DJ is best known for his remix of 'Need You Now'?",
            answers: ["Skrillex", "JOC", "Bryan Kearney", "JackU"],
            correctAnswer: "Bryan Kearney"
        },

        {
            question: "Which DJ owns Armada record label and A State of Trance radio show?",
            answers: ["Simon Patterson", "JOC", "Armin Van Buuren", "Carnage"],
            correctAnswer: "Armin Van Buuren"
        },

        {
            question: "Which DJ goes under the alias Gouryella?",
            answers: ["Skrillex", "Justin Beiber", "Bryan Kearney", "Ferry Corsten"],
            correctAnswer: "Ferry Corsten"
        },

        {
            question: "Which DJ went from the Mozart of Trance to being the Big Cheese?",
            answers: ["Andrew Rayel", "Sean Tyas", "RAM", "JackU"],
            correctAnswer: "Andrew Rayel"
        }

    ];

    var counter = 0;
    var correctGuess = 0;


    $('.start').click(function (event) {
        event.preventDefault();
        /* Act on the event */
        $('h2').empty();
        $('p').empty();
        $('.answer').empty();
        counter = 0;
        currentQuestion();


    });

    $('#questionnaire').on('click', ".submit", function (event) {
        event.preventDefault();
        /* Act on the event */
        $('.answer').empty();
        compareAnswers();

        counter++;
        $('p').empty();

        currentQuestion();


    });

    function currentQuestion() {

        if (counter < 5) {
            $('p').append(quiz[counter].question + " <br /><br />")
            for (var i = 0; i < quiz[counter].answers.length; i++) {
                $('p').append("<input type='radio' class='dj'  name='" + quiz[counter].answers[i] + "' value='" + quiz[counter].answers[i] + "' />" + "<span class='result'>" + quiz[counter].answers[i] + "</span><br />");


            }

        } else {
            $('p').empty();
            $('p').append("You scored a total  of " + correctGuess + " correct answers on the quiz!")
            correctGuess = 0;
        }


    }

    function compareAnswers() {
        var answerChosen = $("input[type='radio']:checked").val();
        if (answerChosen === quiz[counter].correctAnswer) {
            $(".answer").append("<h3>You are correct!</h3>").fadeIn('fast');
            correctGuess++;
        } else {
            $(".answer").append("<h3>You are wrong!</h3>").fadeIn('fast');
        }
    }


});
