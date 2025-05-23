


window.warp = document.querySelector(".main-warp")
window.Nrr = document.getElementById("home_Nrr")

let door = document.querySelector(".door")
let eyes = document.querySelector(".eyes")
let answers = document.querySelectorAll(".answer")
let map = document.querySelector(".Map")
let player_on = document.querySelector(".player")
let title = document.getElementById('title')
let bad_end = document.getElementById('bad_end')
let retry = document.getElementById('bad_end').querySelector('p')






retry.addEventListener('click', () => {
    bad_end.style.opacity = "0"
     Nrr.innerText = `"왜 문앞에 다시 선 거야? 또 포기 할 거면서"`
     Nrr.style.opacity = "1"
     
    setTimeout(()=>{
     
     bad_end.style.display = "none"
     },500)
})



warp.addEventListener('mousemove', (e) => {
 let warpRect = warp.getBoundingClientRect();

 //화면 가운데 기준점
 let center_x = warpRect.width /2

 let mouse_x = e.clientX;

 let offset = mouse_x - center_x;

 let moveAmount = offset * 0.2;

 if(moveAmount < 0){
 door.style.transform = `rotateY(${moveAmount}deg)`
 eyes.style.opacity = `${(moveAmount /2) * -1}%`
 }

 


})

function off_this(a){
    a.classList.remove("on")
   a.classList.add('dissolve')
   setTimeout(()=>{
    a.style.display = "none"
   }, 1000)
 
}


answers.forEach(item => {
    
    

    item.addEventListener('click', ()=>{
        
        

        item.classList.add('pick');
        setTimeout(()=>{
            item.classList.remove('pick')
            
        },2000)
        
        let answer = item.dataset.answer


        if (answer === 'out'){
            
            go_home = false
            off_this(warp)
            map.style.display = "block"
            player_on.style.display = "block"
            day.style.display = "block"
             setTimeout(()=>{
                day.style.display = "none"
            },3000)
           
            
            setTimeout(()=>{
                Nrr.style.opacity = "0"
                title.style.opacity = "0"
                
          
            },1000)

           
            

            if(chapter_now === 0){
                ward.innerText = `"편의점에 가자"`
                ward.classList.add("on")
                setTimeout(()=>{
                ward.classList.remove("on")
                
               },5000)
            }else if(chapter_now === 1){
                ward.innerText = `"미용실에 가볼까"`
                ward.classList.add("on")
                setTimeout(()=>{
                ward.classList.remove("on")
                
               },5000)
                
            }else if(chapter_now === 2){
                ward.innerText = `"도서관에 가보자"`
                ward.classList.add("on")
                setTimeout(()=>{
                ward.classList.remove("on")
                
               },5000)
            }else if(chapter_now === 3){
                ward.innerText = `"산책이나 해볼까"`
                ward.classList.add("on")
                setTimeout(()=>{
                ward.classList.remove("on")
                
               },5000)
            }
            
            
        } else if (answer === 'stay'){
            Nrr.innerText = `"그럴 줄 알았어"`
            bad_end.style.display = "block"
            
            setTimeout(()=>{
                bad_end.style.opacity = "1"
            },500)
        }



    })

    
    




}
)

