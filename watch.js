const searchBtn = document.getElementById('Movies');

searchBtn.addEventListener('click', getName);

function getName() {
  fetch('http://localhost:3000/films')
    .then(res => res.json())
    .then(data => {
      let html = '';
      data.forEach(movie => {
        html += `
          <h2>${movie.title}</h2>
        `;
      });
      document.getElementById('Movies').innerHTML = html;
    })
    .catch(error => {
      console.error(error);
    });
 
}


function bookTicket(ticket) {
    const cardBox = document.createElement('li');
    cardBox.className = 'box';
    cardBox.innerHTML = `
 <div class="wrapper">
      <div class="container">
        <img src="${ticket.poster}">
      
        <p>Capacity: ${ticket.capacity}</p>
        <p class="buttonMe">Tickets: ${ticket.tickets_sold}</p>
        <button class="buy-button">Book</button>
        <button class="buy"
      </div>
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
            if (newTicketsSold === ticketsSold-1) {
              alert('Note you can only buy only one ticket');
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
  //
  