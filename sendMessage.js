const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const phoneInput = document.getElementById('phone')
const msgAtention = document.getElementById('msg')
const btn = document.getElementById('btnSend')
const number = '75981535154'


btn.addEventListener('click', (e) => {
    e.preventDefault()

    const msgReturn = msg.value

    const txt = `Olá, meu nome é ${nameInput}.%0A Gostaria de tirar uma dúvida! ${msgReturn}. O meu e-mail para contato é: ${emailInput}.`

    const url = `https://wa.me/${number}?text=${txt}`

    if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '') {
        msgAtention.classList.add('active')
        msgAtention.textContent = 'Preencha os campos!'

    } else {
        setTimeout(() => {
            msgAtention.classList.remove('active')
            window.open(url, '_blank')    
        }, 2000);  
    }

    const nameReturn = nameInput.value.trim()
    const emailReturn = emailInput.value.trim()

    msgAtention.classList.add('active')

    if (nameReturn === '' || emailReturn === '' || phoneInput === '') {
        msgAtention.textContent = 'Preencha os campos!'
        msgAtention.style.color = 'red'

    } else if (nameInput.value && emailInput.value && phoneInput.value) {
        msgAtention.textContent = 'Enviado!'
        msgAtention.style.color = 'green'
    }

    setTimeout(() => {
        msgAtention.classList.remove('active')
    }, 5000);

    form.reportValidity()
    form.reset()

})

