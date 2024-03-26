document.addEventListener('DOMContentLoaded', () => {
  let screen = document.querySelector('.screen input');
  let buttons = document.querySelectorAll('.btn');
  let expression = '';
  let displayExpression = '';

  const updateScreen = () => {
      screen.value = displayExpression;
  };

  const calculateResult = () => {
      try 
      {
          let modifiedExpression = expression.replace(/×/g, '*').replace(/÷/g, '/');
          return eval(modifiedExpression);
      } 
      catch (e)
      {
          return 'Error';
      }
  };

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          if (button.classList.contains('bw')) 
          {
              expression += button.innerText;
              displayExpression += button.innerText;
          } 
          else if (button.classList.contains('bplus') || button.classList.contains('bmin') ||
                     button.classList.contains('bmul') || button.classList.contains('bdiv')) 
          {
              expression += ` ${button.innerText} `;
              displayExpression += ` ${button.innerText} `;
          } 
          else if (button.innerText === 'SQRT') 
          {
              expression = `Math.sqrt(${expression})`;
              displayExpression = `√(${displayExpression})`;
          } 
          else if (button.innerText === 'C') 
          {
              expression = expression.trim().split(' ');
              expression.pop();
              expression = expression.join(' ');

              displayExpression = displayExpression.trim().split(' ');
              displayExpression.pop();
              displayExpression = displayExpression.join(' ');
          } 
          else if (button.innerText === 'AC') 
          {
              expression = '';
              displayExpression = '';
          } 
          else if (button.innerText === '=') 
          {
              let result = calculateResult();
              expression = result.toString();
              displayExpression = result.toString();
          }
          updateScreen();
      });
  });
});
