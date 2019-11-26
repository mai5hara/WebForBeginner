'use strict'; 
{

    window.onload = function(){
        
        var turn = '◯';

        function mark(e)
        {
            if (e.target.innerHTML == '') {
                e.target.innerHTML = turn;
                if (judge()) {
                    alert(turn + 'Win!');
                    again();
                } else {
                    change_turn;
                }
            }
        }

        function judge()
        {
            var tds = document.getElementById('cordingchallenge_board').getElementsByTagName('td');
            if (tds[0].innerHTML != '' && tds[0].innerHTML == tds[1].innerHTML && tds[0].innerHTML == tds[2].innerHTML) {
                return true;
            } else if (tds[3].innerHTML != '' && tds[3].innerHTML == tds[4].innerHTML && tds[3].innerHTML == tds[5].innerHTML) {
                return true;
            } else if (tds[6].innerHTML != '' && tds[6].innerHTML == tds[7].innerHTML && tds[6].innerHTML == tds[8].innerHTML) {
                return true;
            } else if (tds[0].innerHTML != '' && tds[0].innerHTML == tds[3].innerHTML && tds[0].innerHTML == tds[6].innerHTML) {
                return true;
            } else if (tds[1].innerHTML != '' && tds[1].innerHTML == tds[4].innerHTML && tds[1].innerHTML == tds[7].innerHTML) {
                return true;
            } else if (tds[2].innerHTML != '' && tds[2].innerHTML == tds[5].innerHTML && tds[2].innerHTML == tds[8].innerHTML) {
                return true;
            } else if (tds[0].innerHTML != '' && tds[0].innerHTML == tds[4].innerHTML && tds[0].innerHTML == tds[8].innerHTML) {
                return true;
            } else if (tds[2].innerHTML != '' && tds[2].innerHTML == tds[4].innerHTML && tds[2].innerHTML == tds[6].innerHTML) {
                return true;
            } else {
                return false;
            }

        }

        function again()
        {
            var tds = document.getElementsById('cordingchallenge_board').getElementByTagName('td');
            for(var i = 0; i < tds.length; ++i) {
                tds[i].innerHTML = '';
            }
            turn = '◯';
        }

        function change_turn()
        {
            if (turn == '◯') {
                turn = '×';
            } else {
                turn = '◯';
            }
        }

        var tds = document.getElementsById('cordingchallenge_board').getElementByTagName('td');
        for (var i = 0; i < tds.length; i++) {
            tds[i].addEventListener('click', mark);
        }
    }
    


}