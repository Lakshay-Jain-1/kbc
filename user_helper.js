// phone a friend  , video call , audience poll , 50 50 
//start with easy 50 50 
 function option_id(){
  let id = String.fromCharCode(Math.floor(Math.random() * (4)) + 65);
   return id;
}
let checker = 0  // to make it one time use only 
let doubleid = []
document.getElementById("fifty-fifty").addEventListener("click",()=>{

  while (checker<2){
    let id = option_id()
      if(id != document.getElementById("answer").innerText) {
      
      if(checker==0){
         doubleid.push(`${id}`)
          checker++;
         document.getElementById(`${id}`).innerText=""
      }
      if(checker==1 && id !=doubleid[0]){
        checker++;
        document.getElementById(`${id}`).innerText=""
      }
      
    }
  }
  document.getElementById("fifty-fifty").style.opacity=0.4;


})

// audience poll 
let audiencechecker=0;
let element = document.getElementById("mycanvas")
document.getElementById("audience").addEventListener("click",()=>{
  if(audiencechecker==0){
  document.getElementById("audience").style.opacity=0.4
  element.style.zIndex=1
    audiencechecker++;
  document.getElementById("container").style.zIndex=1
  let mychart;
  let timer = setInterval(()=>{
   mychart =  new Chart(element, {
                                          type: 'bar',
                                          data: {
                                            labels: ['A', 'B', 'C', 'D'],
                                            datasets: [{
                                              label: '# of Votes',
                                              data: [`${Math.ceil(Math.random()*60)}`, `${Math.ceil(Math.random()*60)}`, `${Math.ceil(Math.random()*60)}`, `${Math.ceil(Math.random()*60)}`],
                                              borderWidth: 1
                                            }]
                                          },
                                          options: {
                                            scales: {
                                              y: {
                                                beginAtZero: true
                                              }
                                            }
                                          }
                                        });
    },1200)
   setTimeout(()=>{clearInterval(timer)
                  mychart.destroy();
                  element.style.zIndex=0
                  document.getElementById("container").style.zIndex=0
                  },5000)
  } })

//video call
