const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const phoneInput = document.getElementById('phone')
const msgAtention = document.getElementById('msg')
const message = document.getElementById('message')
const btn = document.getElementById('btnSend')
const number = '75981535154'


btn.addEventListener('click', (e) => {
    e.preventDefault()

    const name = nameInput.value.trim()
    const email = emailInput.value.trim()
    const phone = phoneInput.value.trim()
    const msgReturn = message.value.trim()

    if (!name || !email || !phone) {
        msgAtention.classList.add('active')
        msgAtention.textContent = 'Preencha os dados'
        msgAtention.style.color = 'red'
        return
    }

    const txt = `Olá, meu nome é ${name}.%0A Gostaria de tirar uma dúvida! ${msgReturn}. O meu e-mail para contato é: ${email}.`

    const url = `https://wa.me/${number}?text=${txt}`

    msgAtention.classList.add('active')
    msgAtention.textContent = 'Enviado!'
    msgAtention.style.color = 'green'

    setTimeout(() => {
        msgAtention.classList.remove('active')
        window.open(url, '_blank')
    }, 2000);

    form.reset()

})

