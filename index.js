
const init = () => {
    const interval = 10000;
    setInterval(updateClock, interval);
}
// ref: https://www.booksfact.com/puranas/muhurtas-described-ramayana.html#:~:text=(1)%20Swati%2C%20(2,after%20Abhijit%20constitutes%2020%20muhurtas.
const updateClock = () => {
    console.log('update clock');
    const currDate = new Date();
    const hour = currDate.getHours();
    const min = currDate.getMinutes();
    for (const key in muhurtams) {
        const interval = muhurtams[key];
        if(hour >= interval[0].hour && hour <= interval[1].hour && min >= interval[0].min && min < interval[1].min) {
            const div = document.getElementById('muhurtam-name');
            div.innerHTML = key;
        }
    }
}
init();

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

    /*
    30 kala = 48 min 
    1 kala = 1.6 min = 96 seconds 

    1 kala = 30 kashta
    30 kashta = 96 seconds 
    1 kashta = 3.2 seconds 
    */
    const kala = {}