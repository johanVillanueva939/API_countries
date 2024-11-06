import { countries } from './countries.js'

const searchInput = document.getElementById('searchInput')
const section = document.querySelector('main > section')

searchInput.addEventListener('input', search())

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
}

function search(){
    countries.forEach(country => {
        if(country.name == searchInput.value){
            section.innerHTML=""
            makeCard(country)
        }
    })
}

const makeCards = () => {
    countries.forEach(country => {
        makeCard(country)
    })
}
makeCards()

window.addEventListener('DOMContentLoaded', makeCards(countries))

/* <div class="card-country">
					<img src="assets/images/flags/Peru.png" alt="">
					<h2>Colombia</h2>
				</div> */