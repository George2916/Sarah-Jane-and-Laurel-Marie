/* JAVASCRIPT FOR SONNET BY SHAKESPEARE */

function sonnetFunction2() {
    
    if (window.matchMedia('(max-width: 767px)').matches) {
     
    document.getElementById('owst').style.fontSize = '150%';
    }
    
    else {
     
    document.getElementById('owst').style.fontSize = '100%';
    
    }
    
}

sonnetFunction2();