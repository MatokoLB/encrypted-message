const mensagem = document.querySelector("#msg");
const rep = document.querySelector("#rep");
const btnCripto = document.querySelector("#btnCripto");
const btnDescripto = document.querySelector("#btnDescripto");


btnCripto.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (mensagem.value == "") {
        rep.innerHTML = `null`
    } else {
        rep.innerHTML = `codificado ${btoa(mensagem.value)} `
    }
})

btnDescripto.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (mensagem.value == "") {
        rep.innerHTML = `null`
    } else {
        rep.innerHTML = `codificado ${atob(mensagem.value)} `
    }
})