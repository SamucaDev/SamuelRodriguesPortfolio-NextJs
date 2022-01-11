import { ProjectInterface } from '../../../../core/interface/ProjectInterface';
import SliderSlick from '../SliderSlick/SliderSlick';
import * as S from './styles';

export default function SectionProject(props) {
  const informationProject: ProjectInterface = props.informationProject;

  return (
    <S.Wrapper>
      <S.SlideSquare>
        <SliderSlick images={props.informationProject.images} />
      </S.SlideSquare>

      <S.Description>
        <S.Title>
          {informationProject.name}
          <S.ParagraphDate>{informationProject.date}</S.ParagraphDate>
        </S.Title>

        {informationProject.information.map((info, index) => {
          return (
            <S.Information key={index}>
              <strong>{info.title}:</strong> {info.value}
            </S.Information>
          );
        })}
      </S.Description>
    </S.Wrapper>
  );
}
