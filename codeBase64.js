const menssagem = document.querySelector("#msg");
const rep = document.querySelector("#rep")


function cripto(){
    //document.write(btoa(menssagem.value)); 
   rep.innerHTML = `codificado ${btoa(menssagem.value)} `
}

const desripto = () => { rep.innerHTML = ` <textarea> descodificado ${atob(menssagem.value)}</textarea> `}

///////////////////////////////////

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (menssagem.value == "") {
        rep.innerHTML = `null`
    } else {
        rep.innerHTML = `codificado ${btoa(menssagem.value)} `
    }
})

function cripto() {

}
