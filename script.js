$(document).ready(function () {
    // สร้างคำถามและคำตอบสุ่ม
    function generateQuestion() {
        var num1 = Math.floor(Math.random() * 10) + 1;
        var num2 = Math.floor(Math.random() * 10) + 1;
        var operators = ['+', '-', '*', '/'];
        var operator = operators[Math.floor(Math.random() * operators.length)];
        var question = num1 + ' ' + operator + ' ' + num2;
        var answer = eval(question).toFixed(2);
        return { question: question, answer: answer };
    }

    // แสดงคำถามแรก
    var currentQuestion = generateQuestion();
    $('#question').text('คำถาม: ' + currentQuestion.question);

    // ตรวจสอบคำตอบเมื่อกดปุ่ม 'ตรวจสอบ'
    $('#submit').click(function () {
        var userAnswer = parseFloat($('#answer').val());
        if (userAnswer == currentQuestion.answer) {
            $('#result').text('คำตอบถูกต้อง!');
        } else {
            $('#result').text('คำตอบผิด ลองอีกครั้ง');
        }

        // สร้างคำถามใหม่
        currentQuestion = generateQuestion();
        $('#question').text('คำถาม: ' + currentQuestion.question);
        $('#answer').val('');
    });
});
