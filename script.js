let turnmusic = new Audio("./clickaud.wav")
let winnermusic = new Audio("./winner.mp3")
let turn = "X"
let gameover=false
const changeturn=()=>{
    return turn==='X'?'O':"X"
}

const checkWin = ()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2],
        [3,4,5],
        [0,4,8],
        [0,3,6],
        [6,7,8],
        [1,4,7],
        [2,5,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if(boxtext[e[0]].innerText===boxtext[e[1]].innerText && boxtext[e[0]].innerText===boxtext[e[2]].innerText && boxtext[e[0]].innerText!==""){
            
            document.getElementsByClassName('info')[0].innerText=boxtext[e[0]].innerText+" Won";
            gameover=true;
            winnermusic.play();
            document.querySelector('.imgbox img').style.width='200px'
            boxes[e[1]].classList.add("animation");
            boxes[e[0]].classList.add("animation");
            boxes[e[2]].classList.add("animation");

        }
    })
}

let boxes=document.getElementsByClassName("box")

Array.from(boxes).forEach(element=>{
    let boxcontent=element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if(boxcontent.innerText===''){
            boxcontent.innerText=turn;
            turn=changeturn();
            turnmusic.play();
            checkWin();
            if(!gameover){
            document.getElementsByClassName("info")[0].
            innerText='turn for '+turn;
            }
        }
         
    })
})

const resetbtn = document.getElementById('reset')
resetbtn.addEventListener('click', ()=>{
    let boxvalues=document.querySelectorAll('.boxtext');
    Array.from(boxvalues).forEach(ele=>{
        ele.innerText='';
    })
    Array.from(boxes).forEach(ele=>{
        ele.classList.remove("animation");
    })
    gameover=false
    document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
    document.querySelector('.imgbox img').style.width='0px'
   
})

// let boxes=document.getElementsByClassName("box")//9 div with classname box each containing span with classname boxtext

// console.log(boxes);

// let boxcontent=Array.from(boxes)
// console.log(boxcontent)

// boxcontent.forEach(e=>{
//     console.log(e.innerHTML);
// })

// boxes.forEach(i=>{
//     console.log(boxes[i].innerHTML);
// })
function startGlow() {
            const glowText = document.getElementById('boxtext');
            
            glowText.classList.add('glow'); // Add the class to start the animation again

            void glowText.offsetWidth; // Trigger reflow to restart the animation
            
            glowText.classList.remove('glow'); // Remove the class to reset the animation
        }