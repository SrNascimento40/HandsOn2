const params = parseQueryString(window.location.search);

if (!params.id) {
  window.location.replace("admin.html");
}

getEventoPorId(params.id);

const formulario = document.querySelector("main div form");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const body = {};

  for (i = 0; i < formulario.elements.length - 1; i++) {
    const item = formulario.elements[i];

    body[item.name] =
      item.name === "attractions" ? item.value.split(",") : item.value;
  }

  fetch(`${BASE_URL}/events/${params.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(() => {
      alert("Evento atualizado com sucesso");
      window.location.replace("admin.html");
    })
    .catch((error) => console.log(error.message));
});