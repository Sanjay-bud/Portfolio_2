const nav_cont = document.querySelectorAll('.nav-item');
const nav_cont_ind = document.querySelector('.nav-item');
const right_cont = document.querySelector('nav .right-cont div')


const profil_name = document.querySelector('.left-cont p')
const profil_img = document.querySelector('.left-cont div')

const text_left_cont_home= document.querySelectorAll('.text_high_home')

const cursor = document.querySelector('.cursor')
const magnet_eff = document.querySelectorAll('.magnet')


nav_cont.forEach(e=>{
    e.addEventListener('click',ele=>{

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


magnet_eff.forEach(mag =>{
    mag.addEventListener('mousemove',(e)=>{
        let x = e.offsetX;
        let y = e.offsetY;
        let mag_width = mag.clientWidth;
        let mag_heigh = mag.clientHeight;

        let transX = (x-mag_width/2)
        let transY = (y-mag_heigh/2)

        mag.style.transform = `translateX(${transX}px) translateY(${transY}px)`
    })
    mag.addEventListener('mouseout',(e)=>{
        mag.style.transform = '';
    })
})


const about = document.querySelector('.About_cont');
function handleIntersection(entries){
    entries.map((entry)=>{
        if(entry.isIntersecting){
            document.querySelector('.c-1').classList.add('a-ani1');
            document.querySelector('.c-2').classList.add('a-ani');
        }
        else{
            document.querySelector('.c-1').classList.remove('a-ani1');
            document.querySelector('.c-2').classList.remove('a-ani');            
        }
    });
}

const observer = new IntersectionObserver(handleIntersection);
observer.observe(about);


const project = document.querySelector('.p-cont-in');
function handleIntersection1(entries){
    entries.map((entry)=>{
        if(entry.isIntersecting){
            document.querySelector('.p-cont-in .co-1').classList.add('p-c1');
            document.querySelector('.p-cont-in .co-3').classList.add('p-c2');
        }
        else{
            document.querySelector('.p-cont-in .co-1').classList.remove('p-c1');
            document.querySelector('.p-cont-in .co-3').classList.remove('p-c2');
        }
    })
}

const observer1 = new IntersectionObserver(handleIntersection1);
observer1.observe(project)


