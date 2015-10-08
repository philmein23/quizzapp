$(document).ready(function() {

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

    ]


    $('.submit').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */

        $('p').html(quiz[0].question);
        $('p').append("<br />  <input type='radio' name='dj' value='dj'" + quiz[0].answers[0] + "/>");

    });







})
