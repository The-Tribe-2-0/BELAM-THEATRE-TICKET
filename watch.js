function bookTicket(ticket) {
    const cardBox = document.createElement('li');
    cardBox.className = 'box';
    cardBox.innerHTML = `
      <div class="container">
        <img src="${ticket.poster}">
      
        <p>Capacity: ${ticket.capacity}</p>
        <p class="buttonMe">Tickets: ${ticket.tickets_sold}</p>
        <button class="buy-button">Buy</button>
      <button class="remove">Return</button>
      </div>
      
    `;
    return cardBox;
  }
  
  function buyTicket() {
    const ticketList = document.getElementById('ticket-list');
    fetch('http://localhost:3000/films')
      .then(res => res.json())
      .then(data => {
        data.forEach(ticket => {
          const cardBox = bookTicket(ticket);
          ticketList.appendChild(cardBox);
        });
        const buttons = document.querySelectorAll('.buy-button');
        buttons.forEach(button => {
          button.addEventListener('click', e => {
            e.preventDefault();
            const buttonMe = button.parentNode.querySelector('.buttonMe');
            const ticketsSold = parseInt(buttonMe.textContent.split(':')[1]);
            const newTicketsSold = Math.abs(ticketsSold - 1);
            buttonMe.textContent = `Tickets: ${newTicketsSold}`;
            if (newTicketsSold === 0) {
              alert('Sorry, no more tickets are available.');
              button.disabled = true;
            }
          });
        });
      })
      .catch(error => {
        console.error('error', error);
      });
  }
  
  buyTicket();
  