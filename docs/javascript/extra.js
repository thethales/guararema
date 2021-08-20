/**
    th
    Extensões ao tema principal

 */


(function(){
    var config = {
        saudacao: 'Extras Carregado'
    };
    console.log(config.saudacao); // bob

    const radioShowTimeAvaliabilityHelp = document.getElementById('showTimeHighlight');
    const radioHideTimeAvaliabilityHelp = document.getElementById('showNotTimeHighlight');

    radioHideTimeAvaliabilityHelp.addEventListener("input",highLightTimer);
    radioShowTimeAvaliabilityHelp.addEventListener("input",highLightTimer);

    function highLightTimer(){
        let timer = document.getElementsByTagName('tt');
    
        for( let i=0; i < timer.length; i++){
            let itemEls = timer[i].textContent.split(':');
            
            let data_item = new Date();
                data_item.setHours(itemEls[0],itemEls[1],0);
            let data_atual = new Date();
    
            if(data_atual <= data_item){
                timer[i].classList.toggle('time-avaliable')
            }else{
                timer[i].classList.toggle('time-unavaliable')
            }
            
        };
    }


    function removeTimeHighlight(value){

        let timer = document.getElementsByTagName('tt');
        for( let i=0; i < timer.length; i++){
            if(radioShowTimeAvaliabilityHelp.value == 'checked'){
                timer[i].classList.remove('time-none');
            }else{
                timer[i].classList.add('time-none');
            }
        }
    }
    //----

    //Google Analytics
    app.location$.subscribe(function (url) {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
      
        gtag("config", "G-WKJSY3ME1K");
    });


    
    //-------
    highLightTimer();
})();

