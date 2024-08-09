const nav_cont = document.querySelectorAll('.nav-item');
const nav_cont_ind = document.querySelector('.nav-item a');
const right_cont = document.querySelector('nav .right-cont')

const nav_ham = document.querySelector('#menu_ham');

const profil_name = document.querySelector('.left-cont p')
const profil_img = document.querySelector('.left-cont div')

const text_left_cont_home= document.querySelectorAll('.text_high_home')

const cursor = document.querySelector('.cursor')


nav_cont.forEach(e=>{
    e.addEventListener('click',ele=>{
        ele.preventDefault();

        nav_cont.forEach(e=>{
            e.classList.remove('active')
        })
        e.classList.add('active')
    })
})

document.addEventListener('mousemove',e=>{
    x=e.clientX
    y=e.clientY
    cursor.setAttribute('style','top:'+(y-5)+'px;'+'left:'+(x-5)+'px;');
})

document.addEventListener('click',()=>{
    cursor.classList.add('expand_click')
    setTimeout(() => {
        cursor.classList.remove('expand_click')
    }, 500);
})



nav_cont.forEach(e=>{
    e.addEventListener('mouseenter',()=>{
        cursor.classList.add('cursor_hover')
        if(e.classList.contains('active'))
            e.setAttribute('style','color:#ffffff;z-index:999;')
        else
            cursor.classList.add('cursor_hover_inactive') 
    })
})

nav_cont.forEach(e=>{
    e.addEventListener('mouseleave',()=>{
        cursor.classList.remove('cursor_hover')
        e.removeAttribute('style')
        cursor.classList.remove('cursor_hover_inactive')
    })
})

profil_name.addEventListener('mouseenter',()=>{
    cursor.classList.add('cursor_hover')
    profil_name.setAttribute('style','color:#ffffff;')
})

profil_name.addEventListener('mouseleave',()=>{
    cursor.classList.remove('cursor_hover')
    profil_name.removeAttribute('style')
})

nav_ham.addEventListener('click',()=>{
    if(right_cont.style.display=='flex')
        right_cont.style.display='none'
    right_cont.style.display=='flex'
})


// text_left_cont_home.forEach(e=>{
//     e.addEventListener('mouseenter',()=>{
//         e.classList.add('hover_effect')
//     })
// })

// text_left_cont_home.forEach(e=>{
//     e.addEventListener('mouseleave',()=>{
//         e.classList.remove('hover_effect')
//     })
// })

// profil_img.addEventListener('mouseenter',()=>{
//     cursor.classList.add('cursor_photo')
//     profil_img.setAttribute('style','transform:scale(1.3);transition:6s ease linear')
// })

// profil_img.addEventListener('mouseleave',()=>{
//     cursor.classList.remove('cursor_photo')
//     profil_img.removeAttribute('style')
// })


