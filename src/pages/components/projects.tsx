import 'tailwindcss/tailwind.css';
import { ProjectInterface } from '../../core/interface/ProjectInterface';
import SectionProject from './main/wrapper-project/section-project';

export default function Projects() {
  const informationProjects: Array<ProjectInterface> = [
    {
      name: 'MenuBoard',
      date: 'Fev/20 - Mar/21',
      images: [
        {
          path: '/assets/img/projects/menuboard/1595423578331.jpeg',
        },
        {
          path: '/assets/img/projects/menuboard/1597204371941.jpeg',
        },
        {
          path: '/assets/img/projects/menuboard/1602186759334.jpeg',
        },
        {
          path: '/assets/img/projects/menuboard/1612278573475.jpeg',
        },
        {
          path: '/assets/img/projects/menuboard/1612278710034.jpeg',
        },
        {
          path: '/assets/img/projects/menuboard/1612279063011.jpeg',
        },
      ],
      information: [
        {
          title: 'Descrição',
          value:
            'Responsável por desenvolver todas as vertentes de um projeto destinado ao nicho de restaurantes, incluindo, registro de dados das entidades envolvidas, gerenciamento de filiais, produtos e preços, cardápios gerados dinamicamente, e diversas dashboard com dados essenciais para um dono/funcionário de um comercio alimentício. Responsável por criar diversos componentes utilizados por outros projetos da empresa, como chat de registro de usuário, cards customizados, gráficos, e diversas estratégias de experiência de usuário.',
        },
        {
          title: 'Linguagens',
          value: 'Vue js e Laravel.',
        },
        {
          title: 'Banco de dados',
          value: 'Mysql.',
        },
      ],
    },
  ];

  return (
    <div className="w-4/6  p-8 mx-auto my-0 mt-12 ">
      <h1 className="text-gray-50 text-5xl text-center mb-12">Projetos</h1>
      <div>
        {informationProjects.map((project) => {
          return <SectionProject informationProject={project} />;
        })}
      </div>
    </div>
  );
}
