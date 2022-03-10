let timeCount;
let timeId = setInterval(function () {
    document.getElementById("countDown").innerHTML = timeCount + " seconds";
    timeCount--;
    countdown();
}, 1000);

function countdown() {
    if (timeCount < 0) {
        clearInterval(timeId);
        alert("QUÁ MUỘN ZỒI T_T");
        gameOver();
    }
}

function gameOver() {
    location.replace("game-over.html");
}

class Question {
    constructor(cauHoi, answer, correct) {
        this.cauHoi = cauHoi;
        this.answer = answer;
        this.correct = correct;
    }

    checkAnswer(answer) {
        return answer === this.correct;
    }
}

let ques1 = new Question(
    "Câu 1 : 30 : 1/2 + 10 = bao nhiêu ?",
    ["A . 25", "B . 20", "C . 70", "D . Hơm bít"],
    "C . 70");
let ques2 = new Question(
    "Câu 2 : Đâu là tên gọi của một trình duyệt web ?",
    ["A . Cốc chè", "B . Cốc đầu", "C . Cốc mò cò xơi", "D . Cốc cốc"],
    "D . Cốc cốc");
let ques3 = new Question(
    "Câu 3 : Điền chữ còn thiếu vào câu sau:" + "<br>" + "Em làm gì đã có người yêu, em còn đang ... đây này.",
    ["A . Đói bụng", "B . Học code", "C . Sợ ế", "D . Buồn ngủ"],
    "C . Sợ ế");
let ques4 = new Question(
    "Câu 4 : Đâu là tên của 1 ca sĩ nổi tiếng ?",
    ["A . Quân Lê", "B . Toàn Nguyễn", "C . Sơn Tùng", "D . Tùng Sơn"],
    "C . Sơn Tùng");
let ques5 = new Question(
    "Câu 5 : Người làm game này có đẹp zai không ?",
    ["A . Quá đẹp zai luôn", "B . Đẹp nghiêng nước nghiêng thành", "C . Đẹp long trời lở đất", "D . Cả 3 phương án trên đều đúng"],
    "D . Cả 3 phương án trên đều đúng");
let questions = [ques1, ques2, ques3, ques4, ques5];
let getQuestion = document.getElementById("question");

let index = 0;

function nextQues(index) {
    index++;
    showQuestion(questions[index]);
}

function showQuestion(question1) {
    timeCount = 15;
    getQuestion.innerHTML = question1.cauHoi;
    for (let i = 0; i < 4; i++) {
        let getAns = document.getElementById("answer" + (i + 1));
        getAns.innerHTML = question1.answer[i];
    }
}

showQuestion(ques1);

function checkAnswer(id) {
    let answer = document.getElementById(id).innerHTML;
    if (questions[index].checkAnswer(answer)) {
        alert("CHÚC MỪNG BẠN ĐÃ SỐNG SÓT ^^");
        if (index === 4) {
            if (timeCount > 0) {
                win();
            } else {
                gameOver();
            }
        }
        nextQues(index);
        index++;
        timeCount = 15;
    } else {
        alert("SAI RỒI BẠN ƠI T_T");
        gameOver();
    }
}

function win() {
    location.replace("win.html");
}