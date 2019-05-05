window.onload = () => {
  // console.log('here is the event:', event);
  // console.log('page is fully loaded');

  function listenForHoverOnMain() {
    let mainDiv = document.querySelector('.main')
    mainDiv.addEventListener('mouseover', (event) => {
      // console.log('we hovered');
      event.preventDefault();
      mainDiv.style.backgroundColor = 'red';
      // console.log('background turned red');
    })
  }

  function turnGreen() {
    let mainDiv = document.querySelector('.main')
    mainDiv.addEventListener('click', (event) => {
      event.preventDefault();
      mainDiv.style.backgroundColor = 'green';
    });
  }
  listenForHoverOnMain();
  turnGreen();
}
