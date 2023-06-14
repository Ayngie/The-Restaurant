import {
  StyledH1,
  StyledMenuParagraph,
  StyledParagraph,
} from "../styled/TextStyles";
import { ColumnWrapper } from "../styled/Wrappers";
import { StyledListItem } from "../styled/menu/StyledListItem";

export const Menu = () => {
  const menuList: string[] = [
    "Färskrökt laxtartar med avokado- och limecrème",
    "Grillade pilgrimsmusslor med parmesanrisotto och balsamicoreduktion",
    "Saftig grillad entrecôte med rödvinssås och rostad vitlökspotatis",
    "Krämig tryffelpasta med champinjoner och parmesan",
    "Citronmarinerad kycklingbröst med örtig couscous och grön sparris",
    "Kryddig rödbetsbiff med picklad rödlök och getostkräm",
    "Smörstekt havsabborre med tomat- och kaprisrelish",
    "Vegetarisk ravioli fylld med ricotta och spenat i en salvia- och hasselnötssmör",
    "Smältande chokladtårta med saltkaramellglass och hallonkompott",
    "Lätt citronpannacotta med färska bär och myntaströssel",
  ];

  const html = (
    <ol>
      {menuList.map((course, index) => (
        <StyledListItem key={index}>{course}</StyledListItem>
      ))}
    </ol>
  );
  return (
    <ColumnWrapper>
      <StyledH1>Meny</StyledH1>
      <StyledMenuParagraph>
        Dessa rätter kombinerar olika smaker och texturer för att skapa en
        varierad och lockande meny för våra gäster. Vi anpassar menyvalet efter
        säsong och tillgänglighet för att garantera de färskaste och bästa
        ingredienserna. Smaklig måltid!
      </StyledMenuParagraph>
      {html}
    </ColumnWrapper>
  );
};
