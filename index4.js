
const init = () => {
    const interval = 1000;
    setInterval(updateClock, interval);
    setInterval(() => {
        ++kashtam;
        const kashtamDiv = document.getElementById('kashtam-digit');
        kashtamDiv.innerHTML = kashtam;
    }, 3600);
}
// ref: https://www.booksfact.com/puranas/muhurtas-described-ramayana.html#:~:text=(1)%20Swati%2C%20(2,after%20Abhijit%20constitutes%2020%20muhurtas.
const updateClock = () => {
    let dayStartMuhurtam = moment('06 00', 'HH mm');    
    let currDate = new Date();
    if(currDate.getHours() >= 0 && currDate.getHours() < 6) {
        currDate.setFullYear(1992, 11, 7);
    }
    else {
        currDate.setFullYear(1992, 11, 6);
    }
    let currMoment = moment(`${currDate.getHours()} ${currDate.getMinutes()} ${currDate.getSeconds()}`, 'HH mm ss');
    
    let currMuhurtam = '';
    let currMuhurtamIndex = 1;
    for(let key in muhurtams4) {
        if(currDate >= muhurtams4[key][0] && currDate < muhurtams4[key][1]) {
            currMuhurtam = key;
            break;
        }
        currMuhurtamIndex++;
    }
    let currMuhurtamStartMoment = moment(`${muhurtams[currMuhurtam][0].hour} ${muhurtams[currMuhurtam][0].min} 00`, 'HH mm ss');
    //let currKaalam = Math.floor(currMoment.diff(currMuhurtamStartMoment, 'minutes')/1.6);
    let currKaalam = Math.floor(Math.abs(((currDate - muhurtams4[currMuhurtam][0])/1000)/60)/1.6);
    let currKaalamStartMoment = moment(`${muhurtams[currMuhurtam][0].hour} ${muhurtams[currMuhurtam][0].min + Math.floor(currKaalam * 1.6)}`, 'HH mm');
    let secondsPassed = currMoment.diff(currKaalamStartMoment, 'seconds');
    //let kashtam = Math.floor(secondsPassed/3.2);

    let x = new Date((muhurtams4[currMuhurtam][0].getTime() + (currKaalam * 1.6 * 60000)));
    let secondsPassed2 = Math.abs(x-currDate)/1000;
    let kashtam2 = Math.floor(secondsPassed2/3.2);

    const muhurtamNameDiv = document.getElementById('muhurtam-name');
    muhurtamNameDiv.innerHTML = currMuhurtam;
    const muhurtamDigitDiv = document.getElementById('muhurtam-digit');
    muhurtamDigitDiv.innerHTML = currMuhurtamIndex;
    const kaalamDiv = document.getElementById('kaalam-digit');
    const kaalamDigit = kaalamDiv.innerHTML;
    if(Number(kaalamDigit) !== currKaalam) {
        resetKashtam();
    }
    kaalamDiv.innerHTML = currKaalam;

    // debug display
    if(debug) {
        document.getElementById('western-time').innerHTML = currMoment._i;
        document.getElementById('muhurta-start-western').innerHTML = currMuhurtamStartMoment._i;
        document.getElementById('minutes-elapsed-western').innerHTML = currMoment.diff(currMuhurtamStartMoment, 'minutes');
        document.getElementById('seconds-passed-2').innerHTML = secondsPassed2;
        document.getElementById('kashtam-2').innerHTML = kashtam2;
    }    
};
let kashtam = 0;
const debug = false;
init();
const resetKashtam = () => {
    kashtam = 0;
}
const muhurtams = 
    {
        "रुद्र": [{hour: 6, min: 0}, {hour: 6, min: 48}],
        "आहि": [{hour: 6, min: 48}, {hour: 7, min: 36}],
        "मित्र": [{hour: 7, min: 36}, {hour: 8, min: 24}],
        "पितॄ": [{hour: 8, min: 24}, {hour: 9, min: 12}],
        "वसु": [{hour: 9, min: 12}, {hour: 10, min: 0}],
        "वाराह": [{hour: 10, min: 0}, {hour: 10, min: 48}],
        "विश्वेदेवा": [{hour: 10, min: 48}, {hour: 11, min: 36}],
        "विधि": [{hour: 11, min: 36}, {hour: 12, min: 24}],
        "सतमुखी": [{hour: 12, min: 24}, {hour: 13, min: 12}],
        "पुरुहूत": [{hour: 13, min: 12}, {hour: 14, min: 0}],
        "वाहिनी": [{hour: 14, min: 0}, {hour: 14, min: 48}],
        "नक्तनकरा": [{hour: 14, min: 48}, {hour: 15, min: 36}],
        "वरुण": [{hour: 15, min: 36}, {hour: 16, min: 24}],
        "अर्यमन्": [{hour: 16, min: 24}, {hour: 17, min: 12}],
        "भग": [{hour: 17, min: 12}, {hour: 18, min: 0}],
        "गिरीश": [{hour: 18, min: 0}, {hour: 18, min: 48}],
        "अजपाद": [{hour: 18, min: 48}, {hour: 19, min: 36}],
        "अहिर्बुध्न्य": [{hour: 19, min: 36}, {hour: 20, min: 24}],
        "पुष्य": [{hour: 20, min: 24}, {hour: 21, min: 12}],
        "अश्विनी": [{hour: 21, min: 12}, {hour: 22, min: 0}],
        "यम": [{hour: 22, min: 0}, {hour: 22, min: 48}],
        "अग्नि": [{hour: 22, min: 48}, {hour: 23, min: 36}],
        "विधातृ": [{hour: 23, min: 36}, {hour: 0, min: 24}],
        "क्ण्ड": [{hour: 0, min: 24}, {hour: 1, min: 12}],
        "अदिति": [{hour: 1, min: 12}, {hour: 2, min: 0}],
        "जीव/अमृत": [{hour: 2, min: 0}, {hour: 2, min: 48}],
        "विष्णु": [{hour: 2, min: 48}, {hour: 3, min: 36}],
        "द्युमद्गद्युति": [{hour: 3, min: 36}, {hour: 4, min: 24}],
        "ब्रह्म": [{hour: 4, min: 24}, {hour: 5, min: 12}],
        "समुद्रम": [{hour: 5, min: 12}, {hour: 6, min: 0}]
    };
    const muhurtams2 = 
    {
        "रुद्र": [0600, 0648],
        "आहि": [0648, 0736],
        "मित्र": [0736, 0824],
        "पितॄ": [0824, 0912],
        "वसु": [0912, 1000],
        "वाराह": [1000, 1048],
        "विश्वेदेवा": [1048, 1136],
        "विधि": [1136, 1224],
        "सतमुखी": [1224, 1312],
        "पुरुहूत": [1312, 1400],
        "वाहिनी": [1400, 1448],
        "नक्तनकरा": [1448, 1536],
        "वरुण": [1536, 1624],
        "अर्यमन्": [1624, 1712],
        "भग": [1712, 1800],
        "गिरीश": [1800, 1848],
        "अजपाद": [1848, 1936],
        "अहिर्बुध्न्य": [1936, 2024],
        "पुष्य": [2024, 2112],
        "अश्विनी": [2112, 2200],
        "यम": [2200, 2248],
        "अग्नि": [2248, 2336],
        "विधातृ": [2336, 0024],
        "क्ण्ड": [0024, 0112],
        "अदिति": [0112, 0200],
        "जीव/अमृत": [0200, 0248],
        "विष्णु": [0248, 0336],
        "द्युमद्गद्युति": [0336, 0424],
        "ब्रह्म": [0424, 0512],
        "समुद्रम": [0512, 0600]
    };

    /*
    30 kala = 48 min 
    1 kala = 1.6 min = 96 seconds 

    1 kala = 30 kashta
    30 kashta = 96 seconds 
    1 kashta = 3.2 seconds 
    */
    const muhurtams3 = ["रुद्र",
    "आहि",
    "मित्र",
    "पितॄ",
    "वसु",
    "वाराह",
    "विश्वेदेवा",
    "विधि",
    "सतमुखी",
    "पुरुहूत",
    "वाहिनी",
    "नक्तनकरा",
    "वरुण",
    "अर्यमन्",
    "भग",
    "गिरीश",
    "अजपाद",
    "अहिर्बुध्न्य",
    "पुष्य",
    "अश्विनी",
    "यम",
    "अग्नि",
    "विधातृ",
    "क्ण्ड",
    "अदिति",
    "जीव/अमृत",
    "विष्णु",
    "द्युमद्गद्युति",
    "ब्रह्म",
    "समुद्रम"]

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
    const secondsSince6AM = () => 
    {
        const currDate = Date.now();
        if(currDate.getHours() >= 0 && currDate.getHours() < 6)
        {
            const yesterday6AM = Date.now();
            const x= new Date();
            y
        }
        else 
        {

        }
    }