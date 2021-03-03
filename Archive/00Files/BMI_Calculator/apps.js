/*What I need:
1. Calculation of BMI in the bmi Controller
2. Updating the BMI with ui Controller
3. Changing the color of the category and BMI value in ui Controller



*/

let bmiController = (function(){


  return {
    bmiCalc: function(height, weight) {
      return weight/(height*height);
    }
  }



})();

let uiController = (function(){
  let DOMstrings = {
      bmi: '.bmi-value',
      uw: '.uw',
      nw: '.nw',
      ow: '.ow',
      o1: '.o1',
      o2: '.o2',
      o3: '.o3',
      inputGender: '.gender',
      inputAge: '.age-value',
      inputHeight: '.height-value',
      inputWeight: '.weight-value',
      calculate: '.calculate-btn'
  };

  return {
    getInput: function() {
        return {
          gender: document.querySelector(DOMstrings.inputGender).value,
          age: parseFloat(document.querySelector(DOMstrings.inputAge).value), // Will be either inc or exp
          height: parseFloat(document.querySelector(DOMstrings.inputHeight).value),
          weight: parseFloat(document.querySelector(DOMstrings.inputWeight).value)
        };
    },

    displayBMI: function(bmi){
      document.querySelector(DOMstrings.bmi).innerHTML = "Your BMI is: " + bmi;
    },

    highlightNumber : function(bmi){
      if(bmi < 18.5){
        document.querySelector(DOMstrings.uw).style.color = "blue";
        document.querySelector(DOMstrings.uw).style.fontWeight = "600";
      } else if (bmi < 24.9){
        document.querySelector(DOMstrings.nw).style.color = "green";
        document.querySelector(DOMstrings.nw).style.fontWeight = "600";
      } else if (bmi < 29.9){
        document.querySelector(DOMstrings.ow).style.color = "orange";
        document.querySelector(DOMstrings.ow).style.fontWeight = "600";
      } else if (bmi < 34.9){
        document.querySelector(DOMstrings.o1).style.color = "red";
        document.querySelector(DOMstrings.o1).style.fontWeight = "600";
      } else if (bmi < 39.9){
        document.querySelector(DOMstrings.o2).style.color = "red";
        document.querySelector(DOMstrings.o2).style.fontWeight = "600";
      } else{
        document.querySelector(DOMstrings.o3).style.color = "red";
        document.querySelector(DOMstrings.o3).style.fontWeight = "600";
      }
    },

    resetColor: function(){
      document.querySelector(DOMstrings.uw).style.color = 'rgb(0, 0, 0)';
      document.querySelector(DOMstrings.nw).style.color = 'rgb(0, 0, 0)';
      document.querySelector(DOMstrings.ow).style.color = 'rgb(0, 0, 0)';
      document.querySelector(DOMstrings.o1).style.color = 'rgb(0, 0, 0)';
      document.querySelector(DOMstrings.o2).style.color = 'rgb(0, 0, 0)';
      document.querySelector(DOMstrings.o3).style.color = 'rgb(0, 0, 0)';
      document.querySelector(DOMstrings.uw).style.fontWeight = "300";
      document.querySelector(DOMstrings.nw).style.fontWeight = "300";
      document.querySelector(DOMstrings.ow).style.fontWeight = "300";
      document.querySelector(DOMstrings.o1).style.fontWeight = "300";
      document.querySelector(DOMstrings.o2).style.fontWeight = "300";
      document.querySelector(DOMstrings.o3).style.fontWeight = "300";
    },
    getDOMstrings: function(){
      return DOMstrings;
    }

  }

})();

let controller = (function(bCtrl, uCtrl){
  let setupEventListeners = function() {
      var DOM = uCtrl.getDOMstrings();

      document.querySelector(DOM.calculate).addEventListener('click', ctrlCalculate);

      document.addEventListener('keypress', function(event) {
          if (event.keyCode === 13 || event.which === 13) {
              ctrlCalculate();
          }
      });

  };
  let ctrlCalculate = function() {
      let bmi = 0;;

      // 1. Get the field input data
      input = uCtrl.getInput();

      if (!isNaN(input.age) && !isNaN(input.weight) && !isNaN(input.height)) {

          let weight = input.weight;
          let height = input.height/100;

          bmi = (bCtrl.bmiCalc(height, weight)).toFixed(1);
          uCtrl.displayBMI(bmi);
          uCtrl.resetColor();
          uCtrl.highlightNumber(bmi);
      }
  };
  return {
      init: function() {
          setupEventListeners();
      }
  };

})(bmiController, uiController);

controller.init();
