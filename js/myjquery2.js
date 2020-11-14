/* JAVASCRIPT FOR SONNET BY SHAKESPEARE */

function sonnetFunction1() {
    
    if (window.matchMedia('(max-width: 767px)').matches) {
     
    document.getElementById('inEternal').style.fontSize = '150%';
    }
    
    else {
     
    document.getElementById('inEternal').style.fontSize = '100%';
    
    }
    
}

sonnetFunction1();
