let state = 1;

let rpsController = (function(){
  let rps = ['rock','paper','scissors'];
  return {
    scoreArr: [0,0],
    winCon: 3,
    checkWin: function(scoreArr){
      if(scoreArr[0] == this.winCon){
        state = 1;
        return 'player';
      } else if (scoreArr[1] == this.winCon){
        state = 1;
        return 'ai';
      }
    },
    aiChoice: function(){
      return rps[Math.floor(3*Math.random())];
    },
    whoWins: function(playerChoice, aiChoice){
      if(aiChoice == playerChoice){
        return 'draw';
      } else if (playerChoice == 'paper' && aiChoice == 'rock'){
        return 'player';
      } else if (playerChoice == 'scissors' && aiChoice == 'paper'){
        return 'player';
      } else if (playerChoice == 'rock' && aiChoice == 'scissors'){
        return 'player';
      } else {
        return 'ai';
      }
    },
    scoreCount: function(winner){
      if(winner == 'player'){
        this.scoreArr[0] += 1;
      } else if(winner == 'ai'){
        this.scoreArr[1] += 1;
      }
    }

  }

})();


let uiController = (function(){
  /*We need:
1. Best of DOM
2. Choice
3. Go
4. New Game
5. Score
6. Image P1 and P2.
  */
  let DOMstrings = {
    bestOf : '.best-of',
    choice: '.rps',
    go: '.btn-go',
    newGame: '.btn-new',
    score: '.score',
    player1: '.p1',
    ai: '.ai'

  };
  return {
    getInput: function() {
        return {
          choice: document.querySelector('input[name="rps"]:checked').value,
          bestOf: document.querySelector(DOMstrings.bestOf).value
        };
    },

    displayHand: function(aiChoice){
      document.getElementById('hand-1').src = document.querySelector('input[name="rps"]:checked').value + '.png';
      document.getElementById('hand-2').src = aiChoice + '.png';
    },

    getDOMstrings: function(){
      return DOMstrings;
    },
    displayScore: function(scoreArr){
      document.querySelector(DOMstrings.score).innerHTML = "Score:<br>" + scoreArr[0] + "-" + scoreArr[1];
    },
    displayVictoryScreen:function(winner){
      if(winner == 'player'){
        document.querySelector(DOMstrings.player1).textContent = "WINNER!";
        document.querySelector(DOMstrings.player1).style.color = "rgb(255, 0, 0)";
        document.querySelector(DOMstrings.ai).textContent = "LOSER!";
      }
      else if (winner == 'ai'){
        document.querySelector(DOMstrings.ai).textContent = "WINNER!";
        document.querySelector(DOMstrings.ai).style.color = "rgb(255, 0, 0)";
        document.querySelector(DOMstrings.player1).textContent = "LOSER!";
      }
    }
  }

})();


let controller = (function(gCtrl, uCtrl){
  var DOM = uCtrl.getDOMstrings();
  let setupEventListeners = function() {

      document.querySelector(DOM.go).addEventListener('click', ctrlGame);

      document.querySelector(DOM.newGame).addEventListener('click', reset);

      document.addEventListener('keypress', function(event) {
          if (event.keyCode === 13 || event.which === 13) {
              ctrlGame();
          }
      });

  };

  let ctrlGame = function() {
    if(state == 0){
      // 1. Get the field input data
        input = uCtrl.getInput();
        let selection = input.choice;
        let aiChoice = gCtrl.aiChoice();
        uCtrl.displayHand(aiChoice);
        gCtrl.scoreCount(gCtrl.whoWins(selection, aiChoice));
        uCtrl.displayScore(gCtrl.scoreArr);
        uCtrl.displayVictoryScreen(gCtrl.checkWin(gCtrl.scoreArr));
    }
  };

  let reset = function(){
    gCtrl.scoreArr = [0,0];
    document.querySelector(DOM.score).innerHTML = "Score:<br>0-0";
    document.getElementById('hand-1').src = 'rock.png';
    document.getElementById('hand-2').src = 'rock.png';
    gCtrl.winCon = document.querySelector(DOM.bestOf).value;
    document.querySelector(DOM.player1).textContent = "Player 1";
    document.querySelector(DOM.ai).textContent = "AI";
    document.querySelector(DOM.ai).style.color = "#000000";
    document.querySelector(DOM.player1).style.color = "#000000";
    state = 0;
  }

  return {
      init: function() {
          setupEventListeners();
      }
  };
})(rpsController, uiController);

controller.init();
