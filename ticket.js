function bookTicket(ticket){
    const cardBox = document.createElement('li')
    cardBox.className ='box'
    cardBox.innerHTML = `
    <div class="mac">
    <img src="${ticket.poster}">
    <p>
    <p>${ticket.description}</p>
    <p>Capacity:${ticket.capacity}</p>
    <p>Tickets:${ticket.tickets_sold}</p>
    </div>
    `
    return cardBox
}

function buyTicket(){
    const ticketList = document.getElementById('ticket-list');
    fetch('http://localhost:3000/films')
    .then(res => res.json())
    .then(data  => {
        data.forEach(ticket =>{
            const cardBox = bookTicket(ticket);
            ticketList.appendChild(cardBox);
        })
    })
    .catch(error =>{
        console.error('error', error)
    })
}

window.addEventListener('DOMContentLoaded', buyTicket);
