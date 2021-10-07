import 'tailwindcss/tailwind.css';
import SliderSlick from '../SliderSlick/SliderSlick';

export default function SectionProject() {
  return (
    <div className="flex w-full">
      <div className="w-2/5 mr-20">
        <div className="">
          <SliderSlick />
        </div>
      </div>
      <div className="w-3/5 ">
        <h2 className="text-2xl mb-2 text-gray-50">
          MenuBoard <p className="text-xs">Fev/20 - Mar/21</p>
        </h2>
        <p className="mb-1 text-gray-50">
          <strong>Descrição:</strong> Responsável por desenvolver todas as
          vertentes de um projeto destinado ao nicho de restaurantes, incluindo,
          registro de dados das entidades envolvidas, gerenciamento de filiais,
          produtos e preços, cardápios gerados dinamicamente, e diversas
          dashboard com dados essenciais para um dono/funcionário de um comercio
          alimentício. Responsável por criar diversos componentes utilizados por
          outros projetos da empresa, como chat de registro de usuário, cards
          customizados, gráficos, e diversas estratégias de experiência de
          usuário.
        </p>
        <p className="mb-1 text-gray-50">
          <strong>Linguagens:</strong> Vue js e Laravel.
        </p>
        <p className="mb-1 text-gray-50">
          <strong>Banco de dados:</strong> Mysql.
        </p>
        <p></p>
      </div>
    </div>
  );
}
