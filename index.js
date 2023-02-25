const sechand =document.querySelector('.sec_hand');
const minhand =document.querySelector('.min_hand');
const hrhand =document.querySelector('.hour_hand');

function setDate(){
    const now =new Date();
    const seconds=now.getSeconds();
    const secToDegree=((seconds/60) * 360) + 90;
    sechand.style.transform = `rotate(${secToDegree}deg)`;

    const minutes=now.getMinutes();
    const minToDegree=((minutes/60) *360) + ((seconds/60)*6) ;
    minhand.style.transform=`rotate(${minToDegree}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minutes/60)*30) ;
    hrhand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();