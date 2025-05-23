



const cardList = [
    {
        cardNum: 0,
        name: 'CU_A',
        img:'img/card/1-1.png',
        question:"저기 서있는 건 뭐지?",
        A:"지켜본다",
        B:"모르는 척 하자",
        badAnswer : "A"

    },
    {
        cardNum: 1,
        name: 'CU_B',
        img:'img/card/1-4.png',
        question:"앗 내 돈!",
        A:"돈을 줍는다",
        B:"그냥 버린다",
        badAnswer : "A"
    },
    {
        cardNum: 2,
        name: 'CU_C',
        img:'img/card/1-5.png',
        question:"ㅇ   ㅣ ㄱㄱㄱ ㅓㅅ  ㅁ ㅏㅣㅏㄴ ㅎ  ㅏㅏㅎㅅㄴ  ㅏ ㅇㅇ ㅛ",
        A:"물건만 챙겨 나간다",
        B:"뭐라는거야!",
        badAnswer : "B"
    },
    {
        cardNum: 3,
        name: 'HAIR_A',
        img:'img/card/2-1.png',
        question:"정신없이 자리에 앉았다",
        A:"...",
        B:"...",
        badAnswer : ''
    },
    {
        cardNum: 4,
        name: 'HAIR_B',
        img:'img/card/2-3.png',
        question:"지금 나에게 말한건가?",
        A:"네...하하",
        B:"(그냥 웃는다)",
        badAnswer : "A"
        
    },
    {
        cardNum: 5,
        name: 'HAIR_C',
        img:'img/card/2-4.png',
        question:"가위가 너무 빠르잖아... 머리를 찌를 것 같다",
        A:"잠시만!",
        B:"꾹 참는다",
        badAnswer : "A"
    },
    {
        cardNum: 6,
        name: 'HAIR_d',
        img:'img/card/2-2.png',
        question:"머리카락이 얼굴에 붙어 간지럽다",
        A:"입바람으로 때어낸다",
        B:"손으로 때어낸다",
        badAnswer : "B"
    },
    {
        cardNum: 7,
        name: 'LIBRARY_A',
        img:'img/card/3-3.png',
        question:"저 책은 왜 빨간색이지?",
        A:"낮은 곳에 있는 아무 책이나 꺼낸다",
        B:"까치발을 들어 꺼내본다",
        badAnswer : "B"
    },
    {
        cardNum: 8,
        name: 'LIBRARY_B',
        img:'img/card/3-1.png',
        question:"도서관에 돌아다니는 것들.. 저건.. 가면인가..?",
        A:"물어본다",
        B:"모르는 척 한다",
        badAnswer : "A"
    },
    {
        cardNum: 9,
        name: 'LIBRARY_C',
        img:'img/card/3-2.png',
        question:"마지막 장을 찢어버렸다",
        A:"이젠 괜찮아",
        B:"어떡해!",
        badAnswer : ''
    },
    


]
let cards = document.querySelectorAll(".card");
let cardInner = document.querySelectorAll('.card_inner');
let card_answer = document.querySelectorAll(".card_answer");
let questionText = document.getElementById("questions_card");
let cardFront = document.querySelectorAll(".card_back");
const ding = document.getElementById("ding");

let answer_count = 0;

function setAnxietyLevel(level) {
  const filter = document.getElementById('anxietyFilter');

   
   filter.style.opacity = `${level * 2}0%`;

}

function die() {
  ding.style.display = "flex";
  ding.style.opacity = "1";

  warp.classList.add("on");
  warp.classList.remove("dissolve");
  warp.style.display = "block";

  position_x = 0;
  thisMap.style.left = position_x + "px";


  setTimeout(() => {
    ding.style.opacity = "0";
  }, 3500);

  
  setTimeout(() => {
    ding.style.display = "none";
    anxious = 0;
    setAnxietyLevel(anxious);
  }, 4500); 
  Nrr.innerText = `"어차피 이렇게 도망 칠 거잖아? 왜 나가는 거지?"`
   Nrr.style.opacity = "1"
}


function first_card(){

  card_0 = cardList[0]
  card_0.img = 'img/card/1-3.png'


}

updateCardContent(answer_count);

function updateCardContent(index) {

  
  const cardData = cardList[index];

  
  const card = cards[index];

  questionText.innerText = cardData.question;

  cardFront[index].style.backgroundImage = `url(${cardData.img})`;

  let [answerA, answerB] = card_answer;
  answerA.innerText = cardData.A;
  answerB.innerText = cardData.B;
  questionText.classList.add("on")

   questionText.style.opacity = 1 
   card_answer.forEach(i =>{
      i.classList.remove("off")
      
    })

    
  setTimeout(() => {
        card.style.display = "flex";
        card.classList.remove("off");
        card.classList.add("on");
        questionText.classList.remove("on")
        questionText.classList.add("on")
      }, 500);
  
}

card_answer.forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.dataset.answer;
    const card = cards[answer_count];
    const cardData = cardList[answer_count];
    first_card()
    card.classList.add("off");
    console.log(`${anxious}, ${answer_count}`)
    
    if(answer === cardData.badAnswer){
    anxious += 1
    setAnxietyLevel(anxious);
    }

    if(anxious === 3 ){
      die()
    }
    
    if (answer_count < cardList.length) {

      setTimeout(() => {
        updateCardContent(answer_count);
      }, 400);
    } 
    

    item.classList.add('pick');
    


    function nextChapter(){
      
      chapter_now += 1
      player.dataset.status = status_arr[chapter_now];
      map_front.src = `${map_arr[chapter_now]}`;
      go_home = true
      cardScene.classList.add("off"); 

      setTimeout(() => {
      cardScene.classList.remove("off"); 
      cardScene.style.display = "none";
      
      }, 1000);
      questionText.style.opacity = 0 
      
      
      card_answer.forEach(i =>{
        i.classList.add("off")

      })
    }
    if(answer_count == 2){
    
    nextChapter()
    go_home_ward = false
    chapter_1=true
    
    console.log(chapter_now)
      console.log(answer_count)
      console.log(chapter_1)
    day_inner.innerText = `Day 2`
    }else if(answer_count == 6){
      
    chapter_2=true
    nextChapter()
    go_home_ward = false
    day_inner.innerText = `Day 3`
    
    }else if(answer_count == 8){
      position_x = 0
      thisMap.style.left = position_x + "px"
      
         day_inner.innerText = `Your Day`
    }else if(answer_count == 9){
     go_home_ward = false
    chapter_3=true
    nextChapter()
    day.style.display = "block"
             setTimeout(()=>{
                day.style.display = "none"
            },3000)
             monster1.src = "img/monster/5.png"
              monster1.style.scale = "60%"
              monster1.classList.add("non");
              monster2.src = "img/monster/4.png"
              monster2.style.scale = "60%"
              monster2.classList.add("non");
             Nrr_end()

              setTimeout(() => {
                EndCredits.style.display = "flex"
                
               }, 44000);
              setTimeout(()=>{
                EndCredits.style.opacity = "1"
              },45000)

              ending = true
              door_can_open = false
              door_text.innerText = ""
    }
    answer_count++;
    
  });

  item.addEventListener('mouseenter', () => {
    const answer = item.dataset.answer;
    const card = cards[answer_count];
    if (answer === 'A') card.classList.add("left");
    if (answer === 'B') card.classList.add("right");
  });

  item.addEventListener('mouseleave', () => {
    const card = cards[answer_count];
    card.classList.remove("left", "right");
  });
});





