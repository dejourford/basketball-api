const searchBtn = document.querySelector('#search-btn').addEventListener('click', () => {
    getPlayer()
})

getPlayer = () => {
    const userInput = document.querySelector('#team-input').value.toLowerCase()
    console.log(userInput) 
}