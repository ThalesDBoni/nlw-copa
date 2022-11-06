function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon_${player1}.svg" alt="">
      <strong>${hour}</strong>
      <img src="./assets/icon_${player2}.svg" alt="">
    </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
  createCard("24/11", "quinta", createGame("brazl", "16:00", "cameroon")) +
  createCard("02/12", "sexta", createGame("southkorea", "10:00", "japan")) +
  createCard("29/11", "terça", createGame("argentina", "09:24", "brazl"))
