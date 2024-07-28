const imgPath = 'img/';

const images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg'];

const button = document.createElement('button');
button.textContent = 'Click me!';
button.style.backgroundColor = 'beige';
button.style.width = '100px';
button.style.height = '50px'
button.style.border = '1px solid grey';
button.style.borderRadius = '4px';
button.style.margin = '0 auto'

const imgContainer = document.querySelector('.container');

function showImg() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImg = images[randomIndex];

    const img = document.createElement('img');
    img.src = `${imgPath}${randomImg}`;
    img.style.maxWidth = '100%';

    while (imgContainer.firstChild) {
        imgContainer.removeChild(imgContainer.firstChild);
    }
    imgContainer.appendChild(img);
}

button.addEventListener('click', showImg);
document.body.appendChild(button);









