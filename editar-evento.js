/* Código para responsividade do painel administrativo */

const aside = document.querySelector('aside')
const inputs = document.querySelectorAll('input')
const textarea = document.querySelector('textarea')


    const largura = window.screen.width;
  
    if(largura < 395){

      aside.classList.remove('col-2')

      inputs.forEach((input) =>{
        input.style.width = '285px'
      })

      textarea.style.width = '310px'



    }
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