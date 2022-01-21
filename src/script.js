function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

        
    if(hh > 12){
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
        
    let time = hh + ":" + mm;

    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000); 

    }
    currentTime();

    const f = document.getElementById('form');
    const q = document.getElementById('query');
    const google = 'https://duckduckgo.com/?q=';
    const site = 'pagedart.com';

    function submitted(event) {
    event.preventDefault();
    const url = google + q.value;
    const win = window.open(url, '_blank');
    win.focus();
    }

    f.addEventListener('submit', submitted);

