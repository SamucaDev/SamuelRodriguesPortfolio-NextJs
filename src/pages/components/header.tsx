import 'tailwindcss/tailwind.css';
import avatar from '../../assets/img/picture/avatar.png';

export default function Header() {
  return (
    <div className="h-full">
      <div className="flex justify-between w-3/4 mx-auto my-0 size-header">
        <div className="text-gray-50">SamucaDev</div>
        <div>
          <ul className="flex space-x-8">
            <li>
              <a className="text-gray-50">Sobre mim</a>
            </li>
            <li>
              <a className="text-gray-50">Projetos</a>
            </li>
            <li>
              <a className="text-gray-50">Contato</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="h-full flex flex-col items-center justify-center" >
        <h1 className="h-8">Samuel Rodrigues</h1>
        <h1 className="h-8">Desenvolvedor FullStack</h1>
      </div> */}

      <div className="h-full w-4/6 mx-auto my-0 flex items-center justify-between">
        <div>
          <h1 className="font-black text-5xl text-gray-50 ">Samuel Rodrigues</h1>
          <h1 className="font-black text-5xl mt-6 text-gray-50">Engenheiro de Software</h1>
        </div>
        <div className="h-72 w-72 rounded-full bg-illustrate-samucadev bg-cover">
          {/* <img src={require('../../assets/img/picture/avatar.png')} alt="Avatar Samuel Rodrigues"/> */}
        </div>
      </div>
    </div>
  );
}
