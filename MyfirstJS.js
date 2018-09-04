
function generateRandom() {
    var randonNum, num, count;
    randonNum = [];
    for (count = 0; count < 7;) {
        num = Math.ceil(Math.random() * 49);
        if (randonNum.indexOf(num) == -1) {
            randonNum[count] = num;
            count++;
        }

    }
    return randonNum;
}

function updateLottoContent() {
    var randomNumbers = generateRandom();
    // for (var i=0; i<7; i++) {
    //     document.getElementById('cell'+i).innerHTML = randomNumbers[i];
    // }
    var tr = document.getElementById('lotto-row');

    while (tr.firstChild) {
        tr.removeChild(tr.firstChild);
    }

    for (var i = 0; i < 7; i++) {
        var td = document.createElement('td');
        var textNode = document.createTextNode(randomNumbers[i]);
        td.appendChild(textNode);
        tr.appendChild(td);
    }
}
var randomNum = 59;

function setRandom() {
    randomNum = Math.floor((Math.random() * 100) + 1);
}

function guessNum() {
    
    var inputNum = document.getElementById("myNumber").value;
    var resultNode = document.getElementById("result");
    for (var i = 10; i > 0; i = i - 1) {
        console.log("input is", inputNum)
        if (randomNum == inputNum) {
            resultNode.innerHTML = "You did it! My number is " + randomNum + "! <br> Click 'Generate Random Number' to play again.";
        } else {
            if (randomNum > inputNum) {
                resultNode.innerHTML = "My number is larger than " + inputNum + "!";
            } else {
                resultNode.innerHTML = "My number is smaller than " + inputNum + "!";
            }
        }

    }
}

