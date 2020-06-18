'use strict'
let game = {
    run() {
        let Nulls = 0;
            while (true) {
                logic.createQuestionNumber();//Создаем номер вопроса при помощи генератора
                let question = logic.getQuestion();//При помощи функции .getQuestion получаем текст вопроса
                
                //Проверяем сколько вопросов было сыграно ранее
                for(let i = 0; i<questions.allQuestions.length; i++){
                    if(questions.allQuestions[i].wasPlayed){
                        Nulls++;
                    }
                }

                //Если данный вопрос уже был сыгран начинаем функцию заново с генерации нового числа
                if (question == null){
                    continue;
                }

                //Выводим вопрос и варианты ответа
                console.log(question)
                for (let i = 0; i < 4; i++) {
                    console.log(logic.getAnswer(i));
                }

                //Запоминаем ответ игрока
                logic.getUserAnswer();

                //Проверяем является ли введеный игроком текст ответом. Варианты ответа a, b, c, d. Если является проверяем правильный ли ответ выбрал игрок
                if (logic.isAnswer()){
                    alert(logic.answerCheck());
                }
                else {
                    alert("Введен не ответ");
                }

                //Если сыграли все вопросы прерываем выполнение функции
                if (Nulls == questions.allQuestions.length){
                    break;
                }

                //Обнуляем переменную для проверки количества сыграных вопросов
                Nulls = 0;

                //Предлогаем игроку продолжить игру 
                if(prompt("Введи 'далее' что-бы продолжить!") == "далее"){
                    continue;
                }
                else{
                    break;
                }
            }
            //Выводим результат
            logic.showResult();
        

    },

}
while(prompt("Будем Играть(Да/Нет)") == "Да"){
    game.run();
    logic.clear();
}