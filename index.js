
const init = () => {
    const interval = 1000;
    setInterval(updateClock, interval);
}
// ref: https://www.booksfact.com/puranas/muhurtas-described-ramayana.html#:~:text=(1)%20Swati%2C%20(2,after%20Abhijit%20constitutes%2020%20muhurtas.
const updateClock = () => {
    console.log('update clock');
}
init();
/*
const muhurtams = 
    {
        "रुद्र": [{hour: 6, min: 0}, {hour: 6, min: 48}],
        "आहि": [{hour: 6, min: 48}, {hour: 7, min: 36}],
        "मित्र": [{hour: , min: }, {hour: , min: }],
        "पितॄ": [{hour: , min: }, {hour: , min: }],
        "वसु": [{hour: , min: }, {hour: , min: }],
        "वाराह": [{hour: , min: }, {hour: , min: }],
        "विश्वेदेवा": [{hour: , min: }, {hour: , min: }],
        "विधि": [{hour: , min: }, {hour: , min: }],
        "सतमुखी": [{hour: , min: }, {hour: , min: }],
        "पुरुहूत": [{hour: , min: }, {hour: , min: }],
        "वाहिनी": [{hour: , min: }, {hour: , min: }],
        "नक्तनकरा": [{hour: , min: }, {hour: , min: }],
        "वरुण": [{hour: , min: }, {hour: , min: }],
        "अर्यमन्": [{hour: , min: }, {hour: , min: }],
        "भग": [{hour: , min: }, {hour: , min: }],
        "गिरीश": [{hour: , min: }, {hour: , min: }],
        "अजपाद": [{hour: , min: }, {hour: , min: }],
        "अहिर्बुध्न्य": [{hour: , min: }, {hour: , min: }],
        "पुष्य": [{hour: , min: }, {hour: , min: }],
        "अश्विनी": [{hour: , min: }, {hour: , min: }],
        "यम": [{hour: , min: }, {hour: , min: }],
        "अग्नि": [{hour: , min: }, {hour: , min: }],
        "विधातृ": [{hour: , min: }, {hour: , min: }],
    }
*/