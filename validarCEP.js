const inputCep = document.getElementById('cepInput')
const inputCity = document.getElementById('cityInput')
const btnVerify = document.getElementById('btnVerify')
const cepMsg = document.getElementById('cepMsg')

function checkCoverage(inputCep) {
    const cep = Number(inputCep.replace(/\D/g, ''))

    for (const region of coverage) {
        if (cep >= region.min && cep <= region.max) {
            return { available: true, state: region.state }
        }
    }

    return { available: false, state: null }
}

function normalize(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

}

function validateCepCity(cep, city) {
    const numericCep = Number(cep.replace(/\D/g, ''))
    const coverage = [
        { state: 'BA', min: 40000000, max: 48999999 },
        { state: 'PE', min: 50000000, max: 56999999 },
        { state: 'AL', min: 57000000, max: 57999999 },
        { state: 'PB', min: 58000000, max: 58999999 },
        { state: 'CE', min: 60000000, max: 63999999 }
    ]

    const cities = [
        'salvador',
        'feira de santana',
        'fortaleza',
        'recife',
        'maceio',
        'joao pessoa'
    ]

    const normalizedCity = normalize(city.trim().toLowerCase())

    const cepMatch = coverage.some(r => numericCep >= r.min && numericCep <= r.max)
    const cityMatch = cities.includes(normalizedCity)

    return cepMatch || cityMatch
}

btnVerify.addEventListener('click', (e) => {
    e.preventDefault()

    const cep = inputCep.value.trim()
    const city = inputCity.value.trim()

    cepMsg.classList.add('active')

    if (validateCepCity(cep, city)) {
        cepMsg.textContent = 'Planos disponíveis para a sua região!'
        cepMsg.style.color = 'green'

    } else {
        cepMsg.textContent = 'Em breve na sua localidade!'
        cepMsg.style.color = 'red'
    }
})