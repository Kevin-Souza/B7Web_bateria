document.body.addEventListener('keyup', (event)=>{
    //console.log(event.code.toLowerCase());
    playSound(event.code.toLowerCase());
});
// - document.body representa todo o programa(site)
// - o EventListener(observador), nada mais é do que um observador de eventos,  essa função possue dois parâmetros
//  - keyup é o evento de soltar a tecla após ela ser precionada(keydown)
/*- toLowerCase() faz com que o retorno do navegador seja transformado em letras minusculas para que seja 
compativel com os escritos no código (todas as letras minusculas)*/
document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;
    //console.log("musica", song);

    if(song !== ''){
        let songArray = song.split('');
        //console.log(songArray);
        playComposition(songArray);
    }
});



function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
    // playSound foi é função criada para tocar o som especifico para cada tecla

    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active')
        },300);
    }
}

function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`)
        },wait)
        wait += 250;
    }
}
