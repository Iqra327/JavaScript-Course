function togglingButton(selector){
  const buttonElement = document.querySelector(selector);
  if(buttonElement.classList.contains('gaming-button'))
  {
    turnOffPreviousButton();
    buttonElement.classList.add('is-toggled');
  }
  else{
    buttonElement.classList.remove('is-toggled');
}
}

function turnOffPreviousButton(){
  const previousButton = document.querySelector('.is-toggled');
  if(previousButton){
    previousButton.classList.remove('is-toggled');
  }
}