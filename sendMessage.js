const form = document.getElementById('form')
const message = document.getElementById('msg')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    message.classList.add('active');

    setTimeout(() => {
        message.classList.remove('active')
    }, 3000);
})

const number = '75981535154'
form.addEventListener('submit', function(e) {
    e.preventDefault()

    const name = document.getElementById('name').value
    const msg = document.getElementById('message').value.replace(/\n/g, '%0A')
    const email = document.getElementById('email').value

    const txt = `Olá, meu nome é ${name}.%0A Gostaria de tirar uma dúvida! ${msg}. o meu e-mail para contato é: ${email}.`

    const url = `https://wa.me/${number}?text=${txt}`

    setTimeout(() => {
        form.reset()
        window.open(url, '_blank')
        
    }, 1000);
});