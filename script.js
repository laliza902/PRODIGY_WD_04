const nav_items = document.querySelectorAll('.navItems a');
nav_items.forEach(item =>{
    item.addEventListener('mouseover',() =>{
        item.style.color = 'black';
    });

    item.addEventListener('mouseout',()=>{
        item.style.color = 'rgb(84, 84, 84)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".wd", {
        strings: ["Web Developer", "Designer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const connectImages = document.querySelectorAll('.connect img');

    connectImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.3s ease';
        });

        image.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.3s ease';
        });
    });
});


const pic1 = document.querySelector('.pic1 img');
const video = document.getElementById('myVideo');

pic1.addEventListener('mouseenter', function() {
    video.play();
});

pic1.addEventListener('mouseleave', function() {
    video.pause();
});


const pic2 = document.querySelector('.pic2 img');
const video2 = document.getElementById('myVideo2');

pic1.addEventListener('mouseenter', function() {
    video2.play();
});

pic1.addEventListener('mouseleave', function() {
    video2.pause();
});

const pic3 = document.querySelector('.pic3 img');
const video3 = document.getElementById('myVideo3');

pic3.addEventListener('mouseenter', function() {
    video.play();
});

pic3.addEventListener('mouseleave', function() {
    video.pause();
});
