function myTime() {
    const myTimeZone = 'America/New_York'; 

    const options = {
        timeZone: myTimeZone,
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    timeElement = formatter.format(new Date());

    console.log(timeElement);
    document.getElementById("localTime").textContent = timeElement;
    document.getElementById("timemine").style.visibility = "visible";
}

myTime(); 
setInterval(myTime,6000);