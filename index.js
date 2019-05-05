window.onload = (event) => {
  console.log('here is the event:', event);
  console.log('page is fully loaded');
  listenForHoverOnMain();
};

function listenForHoverOnMain() {
  let mainDiv = document.querySelector('.main')
  mainDiv.addEventListener('mouseover', (event) => {
    console.log('we hovered');
    event.preventDefault();
    mainDiv.style.backgroundColor = 'red';
    console.log('background turned red');
  })
}