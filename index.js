const nav_cont = document.querySelectorAll('.nav-item');

nav_cont.forEach(e=>{
    e.addEventListener('click',ele=>{
        ele.preventDefault();

        nav_cont.forEach(e=>{
            e.classList.remove('active')
        })
        e.classList.add('active')
    })
})