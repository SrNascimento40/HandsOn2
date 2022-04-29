const formulario = document.querySelector("main div form");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const body = {};

  for (i = 0; i < formulario.elements.length - 1; i++) {
    const item = formulario.elements[i];

    body[item.name] =
      item.name === "attractions" ? item.value.split(",") : item.value;
  }

  fetch(`${BASE_URL}/events`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(() => {
      alert("Evento criado com sucesso");
      window.location.replace("admin.html");
    })
    .catch((error) => console.log(error.message));
});