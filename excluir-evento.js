const params = parseQueryString(window.location.search);

if (!params.id) {
  window.location.replace("admin.html");
}

getEventoPorId(params.id);

const formulario = document.querySelector("main div form");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  fetch(`${BASE_URL}/events/${params.id}`, {
    method: "DELETE",
  })
    .then(() => {
      alert("Evento removido com sucesso");
      window.location.replace("admin.html");
    })
    .catch((error) => console.log(error.message));
});