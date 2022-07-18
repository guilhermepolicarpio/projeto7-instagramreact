export default function Sugestions(){

return(
    <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            <Sugestions2/>
          </div>
)}

function Sugestions2() {

  let users = [
    { name: 'bad.vibes.memes', source: "assets/img/bad.vibes.memes.svg" },
    { name: 'chibirdart', source: "assets/img/chibirdart.svg" },
    { name: 'razoesparaacreditar', source: "assets/img/razoesparaacreditar.svg" },
    { name: 'adorable_animals', source: "assets/img/adorable_animals.svg" },
    { name: 'smallcutecats', source: "assets/img/smallcutecats.svg" }
];
  return (
      users.map((element) => {
          return (
              <div class="sugestao">
                  <div class="usuario">
                      <img src={element.source} />
                      <div class="texto">
                          <div class="nome">{element.name}</div>
                          <div class="razao">Segue você</div>
                      </div>
                  </div>

                  <div class="seguir">Seguir</div>
              </div>
          )
      })
  )
}