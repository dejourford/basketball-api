// create event listener for button click
const searchBtn = document.querySelector('#search-btn').addEventListener('click', () => {
    apiRequest()
})

// create function for getting player
async function apiRequest(){
    const teamName = document.querySelector('#team-input').value.toLowerCase()
    const response = await fetch(`/api/${teamName}`)
    const data = await response.json()
    console.log(data)
    const playerImg = document.querySelector('#player-img').src = data.img
    const answerText = document.querySelector('.answer-text').textContent = data.name
    
}

