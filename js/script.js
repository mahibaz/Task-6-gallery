const filterButtons = document.querySelectorAll('.buttons');
const filterImages = document.querySelectorAll('.image');
const popup = document.querySelector('.popup');
const popupImage = popup.querySelector('img');
const closeIcon = popup.querySelector('.icon');
const shadow = document.querySelector('.shadow');

// Set default image category
let currentCategory = 'all'; // You can change this to your desired default category

// Filter images based on category
const filterCards = category => {
    filterImages.forEach(image => {
        image.classList.add('hide');

        if (image.dataset.name === category || category === 'all') {
            image.classList.remove('hide');
        }
        
    });
};

// Add click event listener to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        button.classList.add('active');
        currentCategory = button.dataset.name;
        filterCards(currentCategory);
    });
});

// Initialize by filtering images with default category
filterCards(currentCategory);

// Add click event listeners to images
filterImages.forEach(image => {
    image.addEventListener('click', () => {
        popupImage.src = image.getAttribute('src');
        popup.classList.add('show');
        shadow.style.display = 'block';
    });
});

// Close popup when close icon is clicked
closeIcon.addEventListener('click', () => {
    popup.classList.remove('show');
    shadow.style.display = 'none';
});
