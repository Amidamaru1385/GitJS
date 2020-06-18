'use strict'
let logic = {
    questionNumber: null, //Номер вопроса
    rightAnswers: 0, //Счетчик правильных ответов
    userAnswer: "", //Ответ игрока
    /**
     * Функция создает число от 0 до (длинна массива) и записывает его в questionNumber
     */
    createQuestionNumber() {
        this.questionNumber = Math.floor(Math.random() * questions.allQuestions.length);
    },
    /**
     * Функция возвращает текст вопроса и изменяет флаг сыграно на true, если вопрос уже был сыгран возвращает null
     */
    getQuestion() {
        if (!questions.allQuestions[this.questionNumber].wasPlayed) {
            questions.allQuestions[this.questionNumber].wasPlayed = true;
            return (questions.allQuestions[this.questionNumber].question);
        }
        else {
            return null; 
        }
    },

    /**
     * Функция возвращает один вариант ответа
     * @param {number} i Номер варианта ответа 
     */
    getAnswer(i) {
        return (questions.allQuestions[this.questionNumber].answers[i].answerText);
    },
    /**
     * Функция принимает ответ пользователя и записывает в переменную userAnswer
     */
    getUserAnswer() {
      this.userAnswer = prompt("Введите ответ (a, b, c, d)");
    },
    
    correctAnswers: /^[a-d]/,//Регулярное выражение для проверки введенного игроком ответа
    /**
     * Функция проверяет ввел ли игрок одну из подходящих букв или что-то другое
     */
    isAnswer() {
        if (this.correctAnswers.test(this.userAnswer)) {
            return true;
        } else {
            return false;
        }
    },
    /**
     * Функция проверяет правильный ли ответ ввел пользователь. В случае правильного ответа выводит сообщение об этом и увеличивает счетчик правильных ответов
     */
    answerCheck() {
        for (let i = 0; i < 4; i++) {
            if (this.userAnswer == this.getAnswer(i)[0] && questions.allQuestions[this.questionNumber].answers[i].rightAnswer) {
                this.rightAnswers++;
                return ("Правильный ответ");
            }
        }
        return ("Неправильный ответ");
    },
    /**
     * Функция показывает результат игрока
     */
    showResult() {
        alert("Правильных ответов " + this.rightAnswers);
    },
    /**
     * Функция что-бы можно было играть заново.Восстанавливает все сыграные вопросы.
     */
    clear(){
        for(let i = 0; i<questions.allQuestions.length; i++){
            questions.allQuestions[i].wasPlayed = false;
        }
    }
}