function haromszogVizsgalat(){
    var befogo1=document.getElementById("befogo1").value;
    var befogo2=document.getElementById("befogo2").value;
    var atfogo=document.getElementById("atfogo").value;

    if (befogo1 + befogo2 > atfogo && befogo1 + atfogo > befogo2 && befogo2 + atfogo > befogo1){
        if (Math.pow(befogo1, 2) + Math.pow(befogo2, 2) == Math.pow(atfogo, 2) ||
            Math.pow(befogo1, 2) + Math.pow(atfogo, 2) == Math.pow(befogo2, 2) ||
            Math.pow(befogo2, 2) + Math.pow(atfogo, 2) == Math.pow(befogo1, 2)) {
            alert("A derékszögű háromszög megszerkeszthető!");
        } else {
            alert("A derékszögű háromszög NEM szerkeszthető meg!");
        }
    }
    return false;
    }

function generateRandom(){
    var min=10;
    var max=100;
    var befogo1 = Math.floor(Math.random()*(max-min+1)+min);
    var befogo2 = Math.floor(Math.random()*(max-min+1)+min);
    var atfogo = Math.floor(Math.random()*(max-min+1)+min);
    document.getElementById("befogo1").value = befogo1;
    document.getElementById("befogo2").value = befogo2;
    document.getElementById("atfogo").value = atfogo;
}

function atfogoKiszamitasa(){
    var befogo1 = document.getElementById("befogo1").value;
    var befogo2 = document.getElementById("befogo2").value;
    var atfogo = document.getElementById("atfpgo").value;

    if (befogo1 + befogo2 > atfogo && befogo1 + atfogo > befogo2 && befogo2 + atfogo > befogo1){
        if (Math.pow(befogo1, 2) + Math.pow(befogo2, 2) == Math.pow(atfogo, 2) ||
            Math.pow(befogo1, 2) + Math.pow(atfogo, 2) == Math.pow(befogo2, 2) ||
            Math.pow(befogo2, 2) + Math.pow(atfogo, 2) == Math.pow(befogo1, 2)){
                alert("Az átfogó: ")
            }
        }
    }
