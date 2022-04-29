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

  fetch(`${BASE_URL}/events/${params.id}`, {
    method: "DELETE",
  })
    .then(() => {
      alert("Evento removido com sucesso");
      window.location.replace("admin.html");
    })
    .catch((error) => console.log(error.message));
});