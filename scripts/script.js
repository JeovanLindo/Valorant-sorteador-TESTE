// CONSTANTES

const AGENTS = [
    'Fade', 'Neon', 'Chamber', 'Skye',
    'Yoru', 'Astra', 'KAY/O', 'Phoenix',
    'Raze', 'Brimstone', 'Jett', 'Sage',
    'Viper', 'Breach', 'Cypher', 'Sova',
    'Omen', 'Reyna', 'Killjoy', 'Harbor'
]

const MAPS = [
    'Ascent', 'Bind', 'Breeze', 'Fracture',
    'Haven', 'Icebox', 'Pearl', 'Split'
]

const PLAYERS = []


function testeMapas() {
    
}











// FUNÇÕES

function getRandomItem(array) {
    // retorna um item aleatório de um array
    return array[Math.floor(Math.random() * array.length)]
}

function getPlayers(input) {
    // retorna um array com os nomes dos players
    return input.value.split(/,\s+|[\n]+/)
}

function insertPlayer(playerArray = []) {
    console.log(PLAYERS)

    playerArray.forEach(name => {
        if (!!isPresent(name)) {
            // verifica se o jogador está presente
            console.log('Jogador já presente!')

        } else {
            // insere o jogador no array
            PLAYERS.push(name)

            // adiciona os players na tela
            const player = document.createElement('p')
            const addedPlayersGroup = document.querySelector('#grupo-jogadores')

            // cria um p e usa o nome do jogador (para cada jogador)
            player.textContent = name

            // coloca-o no grupo e adiciona a ele a opção de remove-lo
            addedPlayersGroup.appendChild(player)
            player.addEventListener('click', removePlayer)
        }
    })
}

function removePlayer(player) {
    const addedPlayersGroup = document.querySelector('#grupo-jogadores')

    // remove o player clicado da tela
    addedPlayersGroup.removeChild(player.target)
    // remove o player clicado do array
    PLAYERS.pop(PLAYERS.indexOf(player.target))
}

function isPresent(player) {
    // verifica se o player já está presente no array
    if (PLAYERS.includes(player) === true) {
        return true // está presente
    } else {
        return false // não está presente
    }
}

function isSufficient() {
    const playersContainer = document.querySelector('#jogadores-adicionados')
    const minPlayerAlert = document.querySelector('#minimo-jogadores')

    // verifica se há players suficientes 
    if (PLAYERS.length < 2) {
        // revela o alerta de jogadores mínimos
        minPlayerAlert.style.display = 'flex'

        // adiciona classe para borda vermelha
        playersContainer.classList.add('insuficiente')

        // remove ambos com delay
        setTimeout(() => {
            minPlayerAlert.style.display = 'none'
            playersContainer.classList.remove('insuficiente')
        }, 1500)

        return false
    } else {
        return true
    }
}

// FUNÇÃO FINAL

function generateTeams() {
    if (isSufficient()) {
        console.log('gerando times')
    }
}

function addPlayer() {
    const playersInput = document.querySelector('textarea#players-add')

    insertPlayer(getPlayers(playersInput))
}

// EVENTOS

// adicionar jogadores
const addPlayerButton = document.querySelector('#button-add')
addPlayerButton.addEventListener('click', addPlayer)

// gerar times
const generateTeamsButton = document.querySelector('#button-gerar')
generateTeamsButton.addEventListener('click', generateTeams)