var haslo = "nie wiem co autor miał na myśli";

haslo = haslo.toUpperCase();

var mingi = haslo.length;
var JYPE = 0;
var haslo1 = ""; 

for(i=0; i<mingi; i++)
{
    if(haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}

function zgadnij()
{
    document.getElementById("nmixx").innerHTML = haslo1;
}

window.onload = monstax;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "W";
litery[29] = "V";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";




function monstax()
{
    var tresc = "";

    for(i=0; i<=34; i++)
    {
        var element = "lit" + i;
       tresc = tresc + '<div class="litery" onclick="check('+i+')" id="'+element+'">'+litery[i]+'</div>';
       if((i+1) % 7 ==0) tresc = tresc + '<div style="clear:both;"></div>';
    }

   document.getElementById("kard").innerHTML = tresc;

   zgadnij();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
    if(miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}


function check(nr)
{
    var git = false;

    for(i=0; i<mingi; i++)
    {
        if(haslo.charAt(i) == litery[nr])
        {
            haslo1 = haslo1.ustawZnak(i,litery[nr]);
            git = true;
        }
    }
    if (git == true)
    {
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";

        zgadnij()
    }
    else
    {
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");
        
        JYPE++
        var pc = "kill/"+ JYPE + ".png";
        document.getElementById("ghost").innerHTML = '<img src="'+pc+'" alt""/>';
    }

    if(haslo == haslo1)
    document.getElementById("kard").innerHTML = "WYGRAŁEŚ!" +haslo+
    '<br/><br/><span class="reset" onclick="location.reload()">jeszcze raz?</span>';

    if(JYPE>=9)
    document.getElementById("kard").innerHTML = "PORAŻKA!" +haslo+
    '<br/><br/><span class="reset" onclick="location.reload()">jeszcze raz?</span>';

    zgadnij();
}