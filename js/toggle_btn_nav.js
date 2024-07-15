let toggle_btn =document.getElementById('toggle_btn'),
    nav        =document.getElementById('nav');
toggle_btn.addEventListener('click',()=>{
toggle_btn.classList.toggle('toggle');
nav.classList.toggle('show_nav');
if (!nav.classList.contains('show_nav')){
nav.classList.add('close_nav');
}else{
nav.classList.remove('close_nav');
nav.style.display = 'flex';
nav.style.overflow = 'hidden';
}

});