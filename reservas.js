const main = async () => {
    //procura na queryString
    const params = parseQueryString(window.location.search);
  
    if (!params.id) {
      window.location.replace("admin.html");
    }
    //!!!esse tbody é pra criar uma tabela no site, precisa ter no html
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    //elemento para a tabela
    const trLoading = document.createElement("tr");
    //elemento para a tabela
    const tdLoading = document.createElement("td");
    //mensagem de espera
    tdLoading.setAttribute("colspan", 5);
    tdLoading.setAttribute("align", "center");
    tdLoading.append("Carregando!");
    trLoading.appendChild(tdLoading);
    tbody.appendChild(trLoading);
    //puxa os dados do API
    const [dataEvent, dataBookings] = await Promise.all([
      fetch(`${BASE_URL}/events/${params.id}`).then((response) =>
        response.json()
      ),
      fetch(`${BASE_URL}/bookings/event/${params.id}`).then((response) =>
        response.json()
      ),
    ]);
  
    tbody.innerHTML = "";
  
    //!!!editar o querySelector de acordo com o que colocar na página
    document.querySelector("#oTituloDoEvento").innerHTML = dataEvent?.name;
    //mensagem se não tiver reservas
    if (dataBookings.length === 0) {
      //criação da linha
      const trSemReserva = document.createElement("tr");
      //dados da linha
      const tdSemReserva = document.createElement("td");
      //formatação do texto
      tdSemReserva.setAttribute("colspan", 5);
      //alinhamento do texto
      tdSemReserva.setAttribute("align", "center");
      //adiciona o texto
      tdSemReserva.append("sem reserva disponível");
  
      trSemReserva.appendChild(tdSemReserva);
      tbody.appendChild(trSemReserva);
    }

    //aqui os dados puxados da API lá em cima são exibidos
    dataBookings.forEach((row, index) => {
  
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <th scope="row" width="20px">${index + 1}</th>
        <td>${new Date(row.created_at).toLocaleString("pt-br")}</td>
        <td>${row.owner_name}</td>
        <td>${row.owner_email}</td>
        <td>${row.number_tickets}</td>`;
  
      tbody.appendChild(tr);
    });
  };
  
  main();