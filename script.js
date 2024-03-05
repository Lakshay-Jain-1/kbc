document.getElementById("hide").addEventListener("click",()=>{
  if(document.getElementById("flex-box").style.display=="none"){
    document.getElementById("hide").innerText="HIDE"
  document.getElementById("flex-box").style.display="flex"
  }else{
    document.getElementById("hide").innerText="SHOW"
    document.getElementById("flex-box").style.display="none"

  }

})


const url = 'https://quiz26.p.rapidapi.com/questions';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '717065928emshc44f4f175d27c9dp1435b4jsne1eeb37d8cf8',
    'X-RapidAPI-Host': 'quiz26.p.rapidapi.com'
  }
};

async function start_the_game(){
  const url = 'https://quiz26.p.rapidapi.com/questions';
try {
  const response = await fetch(url, options);
  const result = await response.json();
 // console.log(result);  // result is an array of objects
 // display(result)
} catch (error) {
//  console.error(error);
}
}
let array= [ {
             "question": "Whose profile can you see on the front of dimes that are currently in circulation?",
             "A": "George Washington",
             "B": "Thomas Jefferson",
             "C": "Benjamin Franklin",
             "D": "Franklin Roosevelt",
             "answer": "A"
           },{
              "question": "Whose profile can you see on the front of dimes ?",
              "A": "George ",
              "B": "Thomas ",
              "C": "Benjamin",
              "D": "Franklin ",
              "answer": "B"
            },]
//start_the_game()
let i = 0;
function display(array){
  let option_list=document.querySelectorAll("h5")
   
  option_list.forEach((ele,index)=>{
   
    ele.innerText=`${Object.values(array[i])[index]}`
    ele.setAttribute("id",`${Object.keys(array[i])[index]}`)

  })
}
display(array)

 document.getElementById("main").addEventListener("click",(event)=>{
   if(event.target.className="option"){
     console.log(event.target.innerText)
     check(event.target.id)
     
   }
    })

function check(response){
  let answer=document.getElementById("answer")
  if(answer.innerText == response){
    alert("YOU WON")
    
    prizemoney()
    remove()
    document.getElementById("timer").innerText=`61`
  }else{
    alert("YOU LOSE")
    waapsi()
  
  }
  
}

function remove(){
  let delete_nodes = document.querySelectorAll(".remove")
  delete_nodes.forEach((ele)=>{
    if(i==0){ // have to change i valur nowww
    i++;
    }
    display(array)
  })
}

function prizemoney(){
  let moneyholder=document.querySelectorAll('.sidebar')
  moneyholder[moneyholder.length-i-1].style.color="darkblue"
}
function waapsi(){
  let moneyholder=document.querySelectorAll('.sidebar')
  alert(`BETTER LUCK NEXT TIME`)
  
  moneyholder.forEach((ele)=>{
    console.log(ele)
    if(ele.style.color=="darkblue"){
      alert(`${ele.innerText}`)
     
    }
      
    
  })

}


// timer
let time = document.getElementById("timer")
function timer (){
  time.innerText=`${Number(time.innerText)-1}`
  if(time.innerText==0){
  clearInterval(interval)
  }
}
let interval = setInterval(timer,1000)


