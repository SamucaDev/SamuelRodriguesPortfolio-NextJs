import 'tailwindcss/tailwind.css';
import SectionProject from '../components/section-project/section-project'

export default function Projects() {
  return (
    <div className="w-4/6 p-8 mx-auto my-0 mt-12 ">
      <h1 className="text-gray-50 text-5xl text-center mb-12">Projetos</h1>
      <div>
          <SectionProject />
      </div>
    </div>
  );
}
