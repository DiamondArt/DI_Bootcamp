/***********************************************************************************
 * Exercise XP : 
 * ---------------------------------------------------------------------------------
 * @author Melissa Kouadio <angemelisk@gmail.com>
 * @description : resolve all exercices of XP
 * **********************************************************************************/ 
let button = document.querySelectorAll("#display-exo button");
button.forEach(function(item) {
    console.log(item)
    item.addEventListener('click',function() {
        const id = item.getAttribute('id');
        let section = document.querySelector(`section#${id}`);
        section.style.display = 'block'
        console.log(section);
    })
})

/******************************************************************************
 * EXERCICE 1
 * ---------------------------------------------------------------------------
 ******************************************************************************/
let div = document.getElementById('container')
let btnClear = document.getElementById('clear')

// Using a DOM property, retrieve the h1 and console.log it
// using setTimeout, call a function after 2 seconds
// using setInterval, call a function every 2 seconds.
button[0].addEventListener('click', function() { 
    setTimeout(function(){
        alert("hello world");
    },2000);

    let timer = setInterval(function() {
        let p = document.createElement('p')
        p.appendChild(document.createTextNode('Hello world'))
        div.appendChild(p);
        if (div.querySelectorAll('p').length == 5) {  //clear interval after 5 paragraphs inside
            clearInterval(timer);
        } else if (btnClear.addEventListener('click',function(){
                clearInterval(timer) // or clear interval by click
        }));
    },2000);


}) 


/******************************************************************************
 * EXERCICE 2: Move Box animation
 * ---------------------------------------------------------------------------
 ******************************************************************************/
let divAnim = document.getElementById('containers')
let btnMove = document.getElementById('move')

function myMove() {
    let start = 1;
    let timer =  setInterval(() => {
        console.log(start)
        divAnim.querySelector('#animate').style.left = start + 'px';
        start++;
        if (start >= 350) {
            clearInterval(timer);
          }
    }, 1);
}

/******************************************************************************
 * Exercise 3: Drag & Drop
 * ---------------------------------------------------------------------------
 ******************************************************************************/
let divTarget = document.getElementById('target')
let divBox = document.getElementById('box')

function allowDrop(event) {
    event.preventDefault(); 
  }
  
  //add dashes
  function allowEnter(event) {
    event.target.classList.add('over');
  }
  
  //remove dashes
  function allowLeave(event) {
    event.target.classList.remove('over');
  }
  divBox.addEventListener('dragstart', function(e){
    console.log("target:",  e.target)
    console.log("id: ",  e.target.id )
    e.dataTransfer.setData("text", e.target.id);
  });

  (()=>{
    divTarget.addEventListener('drop',dragDrop);
    divTarget.addEventListener('dragover',allowDrop);
    divTarget.addEventListener('dragenter',allowEnter);
    divTarget.addEventListener('dragleave',allowLeave);
  })()

  //event drop function
  function dragDrop(event) {
    event.preventDefault();   
    let data = event.dataTransfer.getData("text");
    console.log("data: ",  data) 
    let box = document.getElementById(data)
    event.target.appendChild(box);
  }
 