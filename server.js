const express = require('express')
const app = express()
const PORT = 8

const teams = {
    'atlanta hawks': {
        'name': 'Trae Young',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629027.png'
    },

    'boston celtics': {
        'name': 'Jayson Tatum',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png'
    },

    'charlotte hornets': {
        'name': 'Lamelo Ball',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630163.png'
    },

    'chicago bulls': {
        'name': 'Demar Derozan',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/201942.png'
    },

    'cleveland cavaliers': {
        'name': 'Donavan Mitchell',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628378.png'
    },

    'dallas mavericks': {
        'name': 'Luka Doncic',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png'
    },

    'denver nuggets': {
        'name': 'Nikola Jokic',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png'
    },

    'detroit pistons': {
        'name': 'Cade Cunningham',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630595.png'
    },

    'golden state warriors': {
        'name': 'Stephen Curry',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png'
    },

    'houston rockets': {
        'name': 'Jalen Green',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630224.png'
    },

    'indiana pacers': {
        'name': 'Tyrese Haliburton',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1630169.png'
    },

    'los angeles clippers': {
        'name': 'Kawhi Leonard',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/202695.png'
    },

    'los angeles lakers': {
        'name': "Le'Bron James",
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png'
    },

    'memphis grizzlies': {
        'name': 'Ja Morant',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629630.png'
    },

    'miami heat': {
        'name': 'Jimmy Butler',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png'
    },

    'milwaukee bucks': {
        'name': 'Giannis Antetokounmpo',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png'
    },

    'minesotta timberwolves': {
        'name': 'Karl-Anthony Towns',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626157.png'
    },

    'new orleans pelicans': {
        'name': 'Zion Williamson',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629627.png'
    },

    'new york knicks': {
        'name': 'Julius Randle',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/203944.png'
    },

    'oklahoma city thunder': {
        'name': 'Shai Gilgeous-Alexander',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628983.png'
    },

    'orlando magic': {
        'name': 'Paolo Banchero',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1631094.png'
    },

    'philadelphia 76ers': {
        'name': 'Joel Embiid',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/203954.png'
    },

    'phoenix suns': {
        'name': 'Devin Booker',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1626164.png'
    },

    'portland trailblazers': {
        'name': 'Damian Lillard',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/203081.png'
    },

    'sacramento kings': {
        'name': "De'Aaron Fox",
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628368.png'
    },

    'san antonio spurs': {
        'name': 'Keldon Johnson',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1629640.png'
    },

    'toronto raptors': {
        'name': 'Pascal Siakam',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1627783.png'
    },

    'utah jazz': {
        'name': 'Lauri Markkanen',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/1628374.png'
    },

    'washington wizards': {
        'name': 'Bradley Beal',
        'img': 'https://cdn.nba.com/headshots/nba/latest/1040x760/203078.png'
    },

}

app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`)
})


app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
}) 