'use strict'; 

{

    const en = document.getElementById('en');
    const jp = document.getElementById('jp');

    function enChangeLanguage(){
        en.classList.add('btn_active');
    }

    function jpChangeLanguage(){
        jp.classList.add('btn_inactive');
    }

    enChangeLanguage();
    jpChangeLanguage();

    en.addEventListener('click', () => {
        
        if(en.classList.contains('btn_inactive') === true){
            en.classList.add('btn_active');
            en.classList.remove('btn_inactive');
            jp.classList.remove('btn_active');
            jp.classList.add('btn_inactive');
        } 
    });

    jp.addEventListener('click', () => {
        
        if(jp.classList.contains('btn_inactive') === true){
            jp.classList.remove('btn_inactive');
            jp.classList.add('btn_active');
            en.classList.remove('btn_active');
            en.classList.add('btn_inactive');
        } 
    });




}