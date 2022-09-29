const msg = document.querySelector("#msg");
const btn = document.querySelector("#btnCripto");
const rep = document.querySelector("#rep");
const rep2 = document.querySelector("#rep2");


btnCripto.addEventListener('click', (e) => {
    e.preventDefault();
let chave = 1

    let textoCofificado = ''

    for (let i = 0; i < msg.value.length; i++) {
          
        
        
        let letraCodificada = String.fromCharCode(msg.value.charCodeAt(i) + chave)
        textoCofificado = textoCofificado.concat(letraCodificada);

    
    }     

    rep2.innerHTML = ` texto normal:${msg.value}  <br><br> texto criptografado:${textoCofificado}`

})

/*calculo
rep.innerHTML = `<P> letra origiral: ${msg.value.charAt(i)}</P>
<P>letra codigo da letra: ${msg.value.charCodeAt(i)}</P> 
<P>achave de incremeto: ${chave}</P> 
<P>codigo da letra + chave de incremeto: ${chave + msg.value.charCodeAt(i)}</P> 
<P>nova letra ${String.fromCharCode(msg.value.charCodeAt(i) + chave)}</P>      
<P>tamanho do texto : ${msg.value.length}</P>` */
//97 a 122 minusc
//65 a 90 maiuc