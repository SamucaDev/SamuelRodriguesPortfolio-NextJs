import 'tailwindcss/tailwind.css';

export default function AboutMe() {
  return (
    <div className="w-4/6 p-8 mx-auto my-0 mt-12 ">
      <h1 className="text-5xl text-center">Sobre mim</h1>

      <p className="mt-12 text-center">
        Vivemos em tempos desafiadores, onde dormimos 1 hora a mais e diversas
        pessoas passaram na nossa frente, a tecnologia nós surpreende a cada
        dia, e nos prova que devemos ter os sonhos mais maluco que ninguém
        compreende!!! Usando os desafios como combustível para aprender mais,
        ensinar mais, amadurecer e buscar o novo!!! Estudando Sistemas de
        Informação na instituição FIAP, com certificações em desenvolvimento
        FullStack, arquitetura de software, padrões de projetos, gestão de
        equipes e aplicação de todos os conceitos do "guarda-chuva" da UX!!
      </p>

      <h1 className="text-3xl text-center mt-12 mb-12">
        Empresas por onde passei
      </h1>

      <div className="">
        <div className="flex mb-8">
          <div className="w-2/4 h-36 flex justify-center items-center">
            <img
              className="w-2/4 h-36 object-contain"
              src="/assets/img/enterprises/alcon-engenharia-logo.png"
            />
          </div>

          <div className="w-2/4 flex justify-center items-center">
            <p>
              A série de incêndios na Amazônia é fruto de uma operação dos
              maconheiros em associação com a Britney Spears, eu sempre disse
              isso.
            </p>
          </div>
        </div>

        <div className="flex mb-8 ">
          <div className="w-2/4 flex justify-center items-center">
            <img
              className="w-2/4 h-36 object-contain"
              src="/assets/img/enterprises/wiplay.png"
            />
          </div>
          <div className="w-2/4 flex justify-center items-center">
            <p>
              A fome no Brasil é resultado da ação dos antifas em associação com
              o Chico Barney, não precisa de prova isso daí.
            </p>
          </div>
        </div>

        <div className="flex mb-8">
          <div className="w-2/4 flex justify-center items-center">
            <img
              className="w-2/4 h-36 object-contain"
              src="/assets/img/enterprises/fabapp.png"
            />
          </div>
          <div className="w-2/4 flex justify-center items-center">
            <p>
              A fome no Brasil é resultado da ação dos antifas em associação com
              o Chico Barney, não precisa de prova isso daí.
            </p>
          </div>
        </div>

        <div className="flex  mb-8">
          <div className="w-2/4 flex justify-center items-center">
            <img
              className="w-2/4 h-36 object-contain"
              src="/assets/img/enterprises/fabiDelivery.png"
            />
          </div>
          <div className="w-2/4 flex justify-center items-center">
            <p>
              A fome no Brasil é resultado da ação dos antifas em associação com
              o Chico Barney, não precisa de prova isso daí.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
