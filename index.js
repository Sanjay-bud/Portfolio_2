const nav_cont = document.querySelectorAll('.nav-item');
const nav_cont_ind = document.querySelector('.nav-item a');

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