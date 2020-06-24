
setInterval(myApp, 500);

function myApp () {

    let myTime = new Date();

    let hr = myTime.getHours();
    let min = myTime.getMinutes();
    let sec = myTime.getSeconds();
    let dy = myTime.getDay();

    let hoursDOM = document.querySelector('.hours');
    let minutesDOM = document.querySelector('.minutes');
    let secondsDOM = document.querySelector('.seconds');
    let dayDOM = document.querySelector('.day');

    hoursDOM.innerHTML = hr;
    minutesDOM.innerHTML = min;
    secondsDOM.innerHTML = sec;

    minutesDOM.append(' Minutes')
    secondsDOM.append(' Seconds')


    if (hr < 10){
        hoursDOM.innerHTML = '0' + hr + ' Hours';
    } else if (min < 10){
        minutesDOM.innerHTML = '0' + min + ' Minutes';
    } else if (sec < 10) {
        secondsDOM.innerHTML = '0' + sec + ' Seconds';
    }

    if (hr > 12) {
        hoursDOM.append(' PM');
    }else {
        hoursDOM.append(' AM');
    }


    if (dy == 0) {
        dayDOM.innerHTML = 'Sunday';
    } else if (dy == 1) {
        dayDOM.innerHTML = 'Monday';
    } else if (dy == 2) {
        dayDOM.innerHTML = 'Tuesday';
    } else if (dy == 3) {
        dayDOM.innerHTML = 'Wednesday';
    } else if (dy == 4) {
        dayDOM.innerHTML = 'Thursday';
    } else if (dy == 5) {
        dayDOM.innerHTML = 'Friday';
    } else if (dy == 6) {
        dayDOM.innerHTML = 'Saturday';
    }

        
    function timeGreet () {
        let greetings = document.querySelector('.greet');

        if (hr < 12) {
            greetings.innerHTML = 'Good Morning!';
        } else if (hr >= 12 && hr < 16) {
            greetings.innerHTML = 'Good Afternoon!';
        } else {
            greetings.innerHTML = 'Good Evening!'
        }
    }

    timeGreet();
}


function random () {

    let quotesDOM = document.querySelector('.quotes');

    let randomQuotes = [`"All our dreams can come true, if we have the courage to pursue them"`,
    `"The secret of getting ahead is getting started."`, `"It's hard to beat a person who never gives up."`, `"Whatever you are, be a good one."`];

    let randomPrints = Math.floor(Math.random() * randomQuotes.length);

    quotesDOM.innerHTML = randomQuotes[randomPrints];
}

setInterval(random, 10000);




