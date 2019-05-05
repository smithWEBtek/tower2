window.onload = () => {
  function listenForHoverOnMain() {
    let mainDiv = document.querySelector('.main')
    mainDiv.addEventListener('mouseover', (event) => {
      event.preventDefault();
      mainDiv.style.backgroundColor = 'red';
    });
  }

  function turnGreen() {
    let mainDiv = document.querySelector('.main');
    mainDiv.addEventListener('click', (event) => {
      event.preventDefault();
      mainDiv.style.backgroundColor = 'green';
    });
  }

  function colorClicker() {
    let mainDiv = document.querySelector('.main');
    let colorButtons = document.querySelectorAll('.color-button');
    colorButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        mainDiv.style.backgroundColor = event.currentTarget.classList[1];
      })
    });
  }

  function turnPink() {
    let mainDiv = document.querySelector('.main')
    mainDiv.addEventListener('dblclick', (event) => {
      event.preventDefault();
      mainDiv.style.backgroundColor = 'pink';
    });
  }
  listenForHoverOnMain();
  turnGreen();
  turnPink();
  colorClicker();
};
