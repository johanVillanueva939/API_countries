import { countries } from './countries.js'

// const searchInput = document.getElementById('searchInput')
const section = document.querySelector('main > section')

// searchInput.addEventListener('input', search())

const makeCard = (country) => {
    const container = document.createElement('div')
    container.classList.add('card-country')
    
    const img = document.createElement('img')
    img.src = country.flag
    img.alt = country.name
    
    const h2 = document.createElement('h2')
    h2.textContent = country.name
    
    container.appendChild(img)
    container.appendChild(h2)
    
    section.appendChild(container)
    
    container.addEventListener('mouseenter', showInfo)
    container.addEventListener('mouseleave', deleteInfo)
    
}

const showInfo = (event) =>{
    const demographics = document.querySelector('.demographics')
    
    let currentCountry = event.target.children[1].textContent
    let foundCountry = countries.find(country => country.name === currentCountry)
    
    demographics.children[0].textContent = `Pais: ${foundCountry.name}`
    demographics.children[1].textContent = `Pais: ${foundCountry.capital}`
    demographics.children[2].textContent = `Pais: ${foundCountry.population}`
    
    
}
const deleteInfo = () =>{
    const demographics = document.querySelector('.demographics')
    demographics.children[0].textContent = 'Pais'
    demographics.children[1].textContent = 'Capital'
    demographics.children[2].textContent = 'Poblacion'
}


// function search(){
//     countries.forEach(country => {
//         if(country.name == searchInput.value){
//             section.innerHTML=""
//             makeCard(country)
//         }
//     })
// }

const makeCards = () => {
    countries.forEach(country => {
        makeCard(country)
    })
}
// makeCards()

window.addEventListener('DOMContentLoaded', makeCards(countries))

/* <div class="card-country">
					<img src="assets/images/flags/Peru.png" alt="">
					<h2>Colombia</h2>
				</div> */