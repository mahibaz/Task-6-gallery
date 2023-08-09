const filterButtons = document.querySelectorAll('.buttons');
const filterImage = document.querySelectorAll('.image');

const filterCards = e => {
  document.querySelector('.active').classList.remove('active');
  e.target.classList.add('active');
  console.log(e.target)

  filterImage.forEach(image => {
    image.classList.add('hide');

    if (image.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all' ) {
      image.classList.remove('hide');
      
    }
  })
}

filterButtons.forEach( button => button.addEventListener('click',filterCards));

filterImage.forEach(image =>{
  image.onclick = () =>{
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.popup-image').src = image.getAttribute('src');
}
for (let index = 0; index < filterImage.length; index++) {
  filterImage[index].setAttribute('onclick','preview(this)');
  
}
  
})

const previewBox = document.querySelector('.popup');
previewImg = previewBox.querySelector('img');
closeIcon = previewBox.querySelector('.icon');

function preview(element){
  let selectedPrevImg = element.getAttribute('src');
  previewImg.src = selectedPrevImg;
  previewBox.classList.add('show');
  closeIcon.onclick = () => {
    previewBox.classList.remove('show');
  } 
}
