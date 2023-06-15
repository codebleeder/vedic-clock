
window.addEventListener("DOMContentLoaded", (event) => {
    init();
  });
  
const init = () => {
    const interval = 1000;

    setInterval(() => {
        const time = getTime();
        updateUI(time);
        updateAnalogClock(time);
        updateMuhurtamName();
        updateGuna();
    }, interval);
}

let kashtam = 0;
const debug = false;
//init();
const resetKashtam = () => {
    kashtam = 0;
}

const updateUI = (updatedValues) => 
{    
    const muhurtamDigitDiv = document.getElementById('muhurtam-digit');
    muhurtamDigitDiv.innerHTML = updatedValues.Muhurtam;
    const kaalamDiv = document.getElementById('kaalam-digit');
    kaalamDiv.innerHTML = updatedValues.Kaalam;
    const kashtamDiv = document.getElementById('kashtam-digit');
    kashtamDiv.innerHTML = updatedValues.Kashtam;
}
const hourHand = document.querySelector('.hour-hand');

const svgHourHand = document.querySelector('#svg-clock-hour');
const svgMinuteHand = document.querySelector('#svg-clock-minute');
const svgSecondHand = document.querySelector('#svg-clock-second');

const updateAnalogClock = (updatedValues) => 
{
    const now = new Date();
    const mins = now.getMinutes();
    const hour = updatedValues.Muhurtam;
    let hourDegrees = ((hour / 15) * 360);
    hourDegrees = (hour * 24) + 45;
        
    svgHourHand.style.transform = `rotate(${hour * 24}deg)`;
    svgMinuteHand.style.transform = `rotate(${updatedValues.Kaalam * 12}deg)`;
    svgSecondHand.style.transform = `rotate(${updatedValues.Kashtam * 12}deg)`;
}
const getTime = () => {
    let seconds = secondsSince6AM();
    const muhurtam = Math.floor(seconds/MuhurtamSeconds);

    seconds = seconds - (muhurtam * MuhurtamSeconds);

    const kala = Math.floor(seconds/KalaSeconds);

    seconds = seconds - (kala * KalaSeconds);
    const kashtam = Math.floor(seconds/KashtaSeconds);
    return {
        Muhurtam: muhurtam,
        Kaalam: kala,
        Kashtam: kashtam
    };
}

const secondsSince6AM = () => 
{
    const currDate = new Date();
    adjustDate(currDate);
    const res = (currDate - Time6AM)/1000;
    return res;
}

const adjustDate = (time) => {
    if(time.getHours() >= 0 && time.getHours() < 6)
    {
        setDay2Date(time);
    }
    else 
    {
        setDay1Date(time);     
    }
}

const setDay1Date = (time) => {
    time.setDate(6);
    time.setMonth(11);
    time.setFullYear(1992);
}

const setDay2Date = (time) => {
    time.setDate(7);
    time.setMonth(11);
    time.setFullYear(1992);
}

const Time6AM = new Date(1992, 11, 6, 6, 0, 0);
const MuhurtamSeconds = 2880;
const KalaSeconds = 96;
const KashtaSeconds = 3.2;

const muhurtamNameDiv = document.getElementById('muhurtam-name');
const updateMuhurtamName = () => 
{
    muhurtamNameDiv.innerHTML = getMuhurtam();    
}

const getMuhurtam = () => 
{
    let currDate = new Date();
    adjustDate(currDate);    
    for(let key in muhurtams) {
        if(currDate >= muhurtams[key][0] && currDate < muhurtams[key][1]) {
            return key;            
        }        
    }
}

const gunaDiv = document.getElementById('guna');
const updateGuna = (key) => 
{
    gunaDiv.innerHTML = guna[getMuhurtam()];
}
    /*
    30 kala = 48 min 
    1 kala = 1.6 min = 96 seconds 

    1 kala = 30 kashta
    30 kashta = 96 seconds 
    1 kashta = 3.2 seconds 
    */
    
    const muhurtams = {
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

    // शुभ अशुभ्
    const guna = {
        "रुद्र": "अशुभ्",
        "आहि": "अशुभ्",
        "मित्र": "शुभ्",
        "पितॄ": "अशुभ्",
        "वसु": "शुभ्",
        "विश्वेदेवा": "शुभ्",
        "विधि":       "शुभ् (Except Mondays and Fridays)",
        "सतमुखी":     "शुभ्",
        "पुरुहूत":     "अशुभ्",
        "वाहिनी":      "अशुभ्",
        "नक्तनकरा":   "अशुभ्",
        "वरुण":      "शुभ्",
        "अर्यमन्":    "शुभ् (Except Sundays)",
        "भग":       "अशुभ्",
        "गिरीश":      "शुभ्",
        "अजपाद":     "अशुभ्",
        "अहिर्बुध्न्य":  "शुभ्",
        "पुष्य":      "शुभ्",
        "अश्विनी":     "शुभ्",
        "यम":       "अशुभ्",
        "अग्नि":      "शुभ्",
        "विधातृ":      "शुभ्",
        "क्ण्ड":      "शुभ्",
        "अदिति":      "शुभ्",
        "जीव/अमृत":   "अती शुभ",
        "विष्णु":      "शुभ्",
        "द्युमद्गद्युति": "शुभ्",
        "ब्रह्म":     "अती शुभ",
        "समुद्रम":    "शुभ्"
    }