import './style.css'

document.addEventListener('DOMContentLoaded',()=>{
    
    document.getElementById('url').addEventListener('input',()=>{
        document.getElementById('kep').src = document.getElementById('url').value;
    })

    document.getElementById('textSize').addEventListener('input',()=>{
        document.getElementById('text').style.fontSize =document.getElementById('textSize').value + "pt";
    })

    document.getElementById('sorkoz').addEventListener('input',()=>{
        document.getElementById('text').style.lineHeight = document.getElementById('sorkoz').value + "em";
    })

    document.getElementById('color').addEventListener('input',()=>{
        document.getElementById('text').style.color=document.getElementById('color').value;
    })

    document.getElementById('button').addEventListener('click',()=>{
        document.getElementById('kep').classList.toggle("right");
    })

});




