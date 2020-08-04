const loader = document.querySelector('.loader')
const imagenesCarrusel = Array.from(document.querySelectorAll('.carousel_img'))
const staffSection = document.querySelector('#staffDesc')

sacarLoader()

function descripcionStaff(e){
  const staff = e.target.dataset.name
  staffNombre = staff
  let publicacion = `
  <div class='staffDescripcion'>
  <div id="cerrarDescripcion"></div>
  <h3>${staff}</h3>
  <img src="imagenes/${staff}.png" alt="Logo ${staff}" class="descImg">
  <div class="textoDescripcion">
  `
  if(staff === 'sailentk'){
    const descripcion =`<p>SailentK es el creador, editor y programador web de Gentuza</p>
    <p>Discord: SailentK&lt3MAriii_#7972</p>
    </div>
    </div>`
    publicacion += descripcion
  }else if(staff === 'juanito'){
    const descripcion =`<p>Juanito es el campeon iberoamericano de tetris, la voz de razon del grupo</p>
    <p>Discord: Harnandez#6739</p>
    </div>
    </div>`
    publicacion += descripcion
  }else if(staff === 'nueve'){
    const descripcion =`<p>Nueve es el carismatico, maneja nuestras redes sociales y discord developer</p>
    <p>Discord: Nueve🌸#2051</p>
    </div>
    </div>`
    publicacion += descripcion
  }else if(staff === 'ghost'){
    const descripcion =`<p>El colombiano del grupo, le agrega el toque intercultural</p>
    <p>Discord: GcGhost#9706</p>
    </div>
    </div>`
    publicacion += descripcion
  }else if(staff === 'morgan'){
    const descripcion =`<p>Streamer de CABEZA GAMES, y si, es la ardilla psicodélica de la comunidad, si queres comprobar si eso es bueno o malo, metete a su stream</p>
    <p>Discord: Cabeza Games#3076</p>
    </div>
    </div>`
    publicacion += descripcion
  }
  staffSection.innerHTML = publicacion

setTimeout(function(){
  const fondo = document.querySelector('.staffDescripcion')
  fondo.style.background = 'rgba(0, 0, 0, 0.9)'
},100)

setTimeout(function(){
  const descImg = document.querySelector('.descImg')
  descImg.classList.add('animacionStaff')
}, 500)

setTimeout(function(){
  const textos = document.querySelector('.textoDescripcion')
  textos.style.opacity = '1'
},200)



}

function sacarDescripcion(e){
  if(!e.target.matches('#cerrarDescripcion')) return
  const descripcion = document.querySelector('.staffDescripcion')
  descripcion.style.display = 'none'
}

function sacarLoader(){
  setTimeout(function(){
      console.log('ya te desaparezco el loader MAESTRO')
      loader.classList.add('loaderSalida')

  },3000)
}

imagenesCarrusel.forEach(staf => staf.addEventListener('click', descripcionStaff))
staffSection.addEventListener('click', sacarDescripcion)
window.addEventListener('keydown', function (e){
  if (e.keyCode === 27){
    const descripcion = document.querySelector('.staffDescripcion')
  descripcion.style.display = 'none'
  }
})
