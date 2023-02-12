const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

//setInterval(updateClock, 1000);

//setDate();

const updateClock = () => {
  let currDate = new Date();
  if(currDate.getHours() >= 0 && currDate.getHours() < 6) {
      currDate.setFullYear(1992, 11, 7);
  }
  else {
      currDate.setFullYear(1992, 11, 6);
  }
  
  let currMuhurtam = '';
  let currMuhurtamIndex = 1;
  for(let key in muhurtams4) {
      if(currDate >= muhurtams4[key][0] && currDate < muhurtams4[key][1]) {
          currMuhurtam = key;
          break;
      }
      currMuhurtamIndex++;
  }
  let currKaalam = Math.floor(Math.abs(((currDate - muhurtams4[currMuhurtam][0])/1000)/60)/1.6);
  
  if(Number(kaalamDigit) !== currKaalam) {
      resetKashtam();
  }
  
  //const seconds = now.getSeconds();
  const secondsDegrees = kashtam * 12;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

const init = () => {
  const interval = 1000;
  setInterval(updateClock, interval);
  setInterval(() => {
      ++kashtam;
      const kashtamDiv = document.getElementById('kashtam-digit');
      kashtamDiv.innerHTML = kashtam;
  }, 3600);
}
init();
let kashtam = 0;

const resetKashtam = () => {
  kashtam = 0;
}
const muhurtams4 = {
  "रुद्र": [new Date(1992, 11, 6, 6, 0, 0), new Date(1992, 11, 6, 6, 48)],
  "आहि": [new Date(1992, 11, 6, 6, 0, 0), new Date(1992, 11, 6, 6, 48)],
  "मित्र": [new Date(1992, 11, 6, 7, 36, 0), new Date(1992, 11, 6, 8, 24)],
  "पितॄ": [new Date(1992, 11, 6, 8, 24), new Date(1992, 11, 6, 9, 12)],
  "वसु": [new Date(1992, 11, 6, 9, 12), new Date(1992, 11, 6, 10, 0)],
  "वाराह": [new Date(1992, 11, 6, 10, 0), new Date(1992, 11, 6, 10, 48)],
  "विश्वेदेवा": [new Date(1992, 11, 6, 10, 48), new Date(1992, 11, 6, 11, 36)],
  "विधि": [new Date(1992, 11, 6, 11, 36), new Date(1992, 11, 6, 12, 24)],
  "सतमुखी": [ new Date(1992, 11, 6, 12, 24), new Date(1992, 11, 6, 13, 12)],
  "पुरुहूत": [new Date(1992, 11, 6, 13, 12), new Date(1992, 11, 6, 14, 0)],
  "वाहिनी": [ new Date(1992, 11, 6, 14, 0), new Date(1992, 11, 6, 14, 48)],
  "नक्तनकरा": [ new Date(1992, 11, 6, 14, 48), new Date(1992, 11, 6, 15, 36)],
  "वरुण": [ new Date(1992, 11, 6, 15, 36), new Date(1992, 11, 6, 16, 24)],
  "अर्यमन्": [ new Date(1992, 11, 6, 16, 24), new Date(1992, 11, 6, 17, 12)],
  "भग": [ new Date(1992, 11, 6, 17, 12), new Date(1992, 11, 6, 18, 0)],
  "गिरीश": [ new Date(1992, 11, 6, 18, 0), new Date(1992, 11, 6, 18, 48)],
  "अजपाद": [ new Date(1992, 11, 6, 18, 48), new Date(1992, 11, 6, 19, 36)],
  "अहिर्बुध्न्य": [ new Date(1992, 11, 6, 19, 36), new Date(1992, 11, 6, 20, 24)],
  "पुष्य": [ new Date(1992, 11, 6, 20, 24), new Date(1992, 11, 6, 21, 12)],
  "अश्विनी": [ new Date(1992, 11, 6, 21, 12), new Date(1992, 11, 6, 22, 0)],
  "यम": [ new Date(1992, 11, 6, 22, 0), new Date(1992, 11, 6, 22, 48)],
  "अग्नि": [ new Date(1992, 11, 6, 22, 48), new Date(1992, 11, 6, 23, 36)],
  "विधातृ": [ new Date(1992, 11, 6, 23, 36), new Date(1992, 11, 7, 0, 24)],
  "क्ण्ड": [ new Date(1992, 11, 7, 0, 24), new Date(1992, 11, 7, 1, 12)],
  "अदिति": [ new Date(1992, 11, 7, 1, 12), new Date(1992, 11, 7, 2, 0)],
  "जीव/अमृत": [ new Date(1992, 11, 7, 2, 0), new Date(1992, 11, 7, 2, 48)],
  "विष्णु": [ new Date(1992, 11, 7, 2, 48), new Date(1992, 11, 7, 3, 36)],
  "द्युमद्गद्युति": [ new Date(1992, 11, 7, 3, 36), new Date(1992, 11, 7, 4, 24)],
  "ब्रह्म": [ new Date(1992, 11, 7, 4, 24), new Date(1992, 11, 7, 5, 12)],
  "समुद्रम": [ new Date(1992, 11, 7, 5, 12), new Date(1992, 11, 7, 6, 0)]
}