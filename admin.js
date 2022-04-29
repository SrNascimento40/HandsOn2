const main = async () => {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
  
    const trLoading = document.createElement("tr");
    const tdLoading = document.createElement("td");
    tdLoading.setAttribute("colspan", 5);
    tdLoading.setAttribute("align", "center");
    tdLoading.append("Carregando eventos...");
  
    trLoading.appendChild(tdLoading);
    tbody.appendChild(trLoading);
  
    const data = await fetch(`${BASE_URL}/events`).then((response) =>
      response.json()
    );
  
    tbody.innerHTML = "";
  
    data
      .sort((a, b) => new Date(b.scheduled) - new Date(a.scheduled))
      .forEach((row, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th scope="row" width="20px">${index + 1}</th>
        <td>${new Date(row.scheduled).toLocaleString("pt-br")}</td>
        <td>${row.name}</td>
        <td>${row.attractions.join(", ")}</td>
        <td>
          <a href="apagar.html?id=${row._id}" class="btn btn-dark"
            >ver reservas</a
          >
          <a href="editar-evento.html?id=${
            row._id
          }" class="btn btn-secondary">editar</a>
          <a href="excluir-evento.html?id=${
            row._id
          }" class="btn btn-danger">excluir</a>
        </td>`;
  
        tbody.appendChild(tr);
      });
  };
  
  main();