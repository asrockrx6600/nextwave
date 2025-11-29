const formPlans = document.getElementById('formPlans')
const usage = document.getElementById('usageType')
const users = document.getElementById('users')
const submit = document.getElementById('submitPlan')
const msgP = document.getElementById('planMsg')

submit.addEventListener('click', function () {

    const uso = usage.value
    const qtd = users.value

    if (!uso || !qtd) {
        alert('teste')
        return
    }

    let target = ''

    if (uso === 'residencial' && qtd === '1-2') {
        target = '#firstPlan'
    } if (uso === 'residencial' && qtd === '3-4') {
        target = '#modifyBorder'
    } if (uso === 'residencial' && qtd === '5') {
        target = '#pro'
    } if (uso === 'gamer' && qtd === '1-2') {
        target = '#modifyBorder'
    } if (uso === 'gamer' && qtd === '3-4') {
        target = '#modifyBorder'
    } if (uso === 'gamer' && qtd === '5') {
        target = '#pro'
    } if (uso === 'work' && qtd === '1-2') {
        target = '#pro'
    } if (uso === 'work' && qtd === '3-4') {
        target = '#pro'
    } if (uso === 'work' && qtd === '5') {
        target = '#pro'
    }


    if (!target) {
        msgP.classList.add('active')
        msgP.textContent = 'Nenhum plano encontrado!'
        msgP.style.color = 'red'
        return
    }

    setTimeout(() => {
        msgP.classList.remove('active')
    }, 1);

    window.location.href = target
})
