let img1 = 'https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80'
let img2 = 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp'
let img3 = 'https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let image = document.getElementById('image')

btn2.onclick = function () {
  image.src = img2;
};
btn1.onclick = function () {
  image.src = img1;
};
btn3.onclick = function () {
  image.src = img3;
};


let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')

btn4.onclick = function () {
  image.style.filter = 'opacity(75%)'
}
btn5.onclick = function () {
  image.style.filter = 'blur(5px)'
}
btn6.onclick = function () {
  image.style.filter = 'contrast(200%)'
}


let btn7= document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')


btn7.onclick = function () {
  image.style.border = '1rem solid'
}
btn8.onclick = function () {
  image.style.border = 'thick double #32a1ce'
}
btn9.onclick = function () {
  image.style.border = ' dashed red'
}
