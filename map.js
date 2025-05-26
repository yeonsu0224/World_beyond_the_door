window.chapter_now = 0
window.ending = false

window.chapter_1 = false
window.chapter_2 = false
window.chapter_3 = false
window.go_home = false

window.anxious = 0

window.player = document.querySelector(".player")
window.thisMap = document.querySelector(".Map")
window.cardScene = document.querySelector(".card_wrap")
window.map_front = document.querySelector(".map_front")
window.map_back = document.querySelector(".map_back")
window.map_sky = document.querySelector(".map_sky")
window.monster1 = document.querySelector(".monster1")
window.monster2 = document.querySelector(".monster2")

window.ward = document.querySelector(".ward")
window.day = document.getElementById("day")
window.day_inner = document.getElementById("day").querySelector('h1')
let EndCredits = document.getElementById("EndCredits")

window.go_home_ward = false
let hood = false
window.position_x = 0
window.door_can_open = false
let door_text = document.querySelector(".open_door_text")




let map_arr = ["img/map/Map_1_1.png",
   "img/map/Map_1_2.png",
   "img/map/Map_1_3.png",
   "img/map/Map_end.png"
]

let status_arr = ['bad', 'normal', 'good', 'sogood']

let end_nrr_arr = ["절 두고 가세요",
   "처음엔 무서웠던 곳도",
   "하나하나 지나가면",
   "즐거운 곳이 되어있을 거에요",
   "문 너머는 제 생각만큼 무섭지 않았어요",
   "제가 틀렸네요",
   "그럼..",
   "안녕히."
]
let anxious_Interval = null;
let isAnxiousIncreasing = false;

function Nrr_on(text) {
   Nrr.innerText = `"${text}"`
   Nrr.style.opacity = "1"

   setTimeout(() => {
      Nrr.style.opacity = "0"
   }, 7000)
}

function Nrr_end() {

   let nrr_num = 0;
   console.log("엔딩 스타트")

   function showNextText() {
      if (nrr_num >= end_nrr_arr.length) return;
      const nrr_text = end_nrr_arr[nrr_num];
      Nrr.innerText = `"${nrr_text}"`;
      Nrr.style.opacity = "1";


      setTimeout(() => {
         Nrr.style.opacity = "0";
      }, 4000);


      setTimeout(() => {
         nrr_num++;
         showNextText();

      }, 5000);


   }

   showNextText();
}




document.addEventListener('keydown', (e) => {

   let move = false
   let currentDirection = "stop"




   if (e.key === 'ArrowDown' || e.key === 'S' || e.key === 's') {

      if (hood === false) {
         player.dataset.status = "bad"
         hood = true
         console.log('hood_on')
      } else {
         player.dataset.status = status_arr[chapter_now]
         console.log('hood_off')
         hood = false
      }


   }



   if (e.key === 'ArrowLeft' || e.key === 'A' || e.key === 'a') {
      currentDirection = 'left'
      move = true

      position_x += 5

   } else if (e.key === 'ArrowRight' || e.key === 'D' || e.key === 'd') {
      currentDirection = 'right'
      move = true
      position_x -= 5
   }

   if (position_x > 750) {
      position_x = 750
   } else if (position_x < -3144) {
      position_x = -3144
   }


   window.door_can_open = false;
   let home_door = false
   let Monster_close = false





   let relativeX = position_x - 850;
   if (!ending) {



      if (relativeX < -788 && relativeX > -888) {

         home_door = true;
         door_can_open = true;

      } else if (relativeX < -1869 && relativeX > -1969 && !go_home) {
         if (chapter_now === 0 && !go_home) {
            door_can_open = true;
         }else{
            door_can_open = false;
         }
      } else if (relativeX < -2580 && relativeX > -2680 && !go_home) {
         if (chapter_now == 1 && !go_home) {
            door_can_open = true;
         }else{
            door_can_open = false;
         }
      } else if (relativeX < -3483 && relativeX > -3583 && !go_home) {
         if (chapter_now == 2 && !go_home) {
            door_can_open = true;
         }else{
            door_can_open = false;
         }
      } else {
         door_can_open = false;
      }

      if (relativeX < -188 && relativeX > -288) {
         Monster_close = true
      } else if (relativeX < -2200 && relativeX > -2300) {
         Monster_close = true
      } else {
         Monster_close = false
      }

      function setAnxietyLevel(level) {
         const filter = document.getElementById('anxietyFilter');


         filter.style.opacity = `${level * 2}0%`;

      }


      if (go_home && !go_home_ward) {
         go_home_ward = true
         ward.innerText = `"오늘은 그만 집에 가자"`
         ward.classList.add("on")
         setTimeout(() => {
            ward.classList.remove("on")

         }, 5000)
      }






      door_text.style.display = "none";

      if (door_can_open) {
         door_text.style.display = "block"
         door_text.innerText = "[위 화살표] 키를 눌러 문으로 들어가기"
         clearInterval(anxious_Interval);
         anxious_Interval = null;
         anxious = 0;

      }

      if (Monster_close) {


         if (chapter_now <= 2) {
            monster1.src = "img/monster/2.png"
            monster2.src = "img/monster/2.png"
         } else {
            monster1.src = "img/monster/5.png"
            monster2.src = "img/monster/4.png"
         }

         if(chapter_1 == true){
         door_text.style.display = "block";
         door_text.innerText = "[아래 화살표] 키를 눌러 후드 쓰기";
         }
         if (player.dataset.status !== "bad") {

            if (!isAnxiousIncreasing) {
               isAnxiousIncreasing = true;

               anxious_Interval = setInterval(() => {
                  if (anxious < 3) {
                     anxious++;
                     setAnxietyLevel(anxious);
                     console.log(anxious);
                  } else {
                     clearInterval(anxious_Interval);
                     anxious_Interval = null;
                     isAnxiousIncreasing = false;
                     if (!ending) {
                        die();
                     }
                  }
               }, 500);
            }


         } else {

            clearInterval(anxious_Interval);
            setAnxietyLevel(anxious);
            anxious_Interval = null;
            anxious = 0;
            isAnxiousIncreasing = false;

         }
         console.log("chapter_now", chapter_now);

      } else {

         if (chapter_now <= 2) {
            monster1.src = "img/monster/1.png"
            monster2.src = "img/monster/1.png"
         } else {
            monster1.src = "img/monster/5.png"
            monster2.src = "img/monster/4.png"
         }
         console.log(" chapter_now", chapter_now);


         clearInterval(anxious_Interval);
         setAnxietyLevel(anxious);
         anxious_Interval = null;

         if (cardScene.style.display !== "block") {
            anxious = 0;
         }

         isAnxiousIncreasing = false;
         console.log("공터로 이동" + anxious)
      }



      if (e.key === 'ArrowUp' || e.key === 'W' || e.key === 'w' && door_can_open) {

         if (!home_door && door_can_open) {
            cardScene.style.display = "block"
            cardScene.style.opacity = "1"

         } else if (home_door && door_can_open) {
            
            warp.classList.add("on")
            warp.classList.remove("dissolve")
            warp.style.display = "block"

            if (chapter_now === 0) {
               bad_end.style.display = "block"
               bad_end.style.opacity = "100%"
            } else if (chapter_now === 1) {
               Nrr_on("어제는 기어코 나갔군요.. 오늘은 나가지 마요")
               day_inner.innerText = `Day 2`
            } else if (chapter_now === 2) {
               Nrr_on("이제 제 말은 들리지도 않죠?")
               day_inner.innerText = `Day 3`

            }
         }
      }

   }



   player.dataset.direction = currentDirection;
   player.dataset.walk = move
   thisMap.style.left = position_x + "px"




})




document.addEventListener('keyup', () => {
   move = false
   player.dataset.walk = move

})

//챕터 넘가면 배경 이미지 변경