import { StyledH1, StyledParagraph } from "../styled/TextStyles";
import { ColumnWrapper } from "../styled/Wrappers";

export const Menu = () => {
  return (
    <ColumnWrapper>
      <StyledH1>Meny</StyledH1>
      <StyledParagraph>
        Dessa rätter kombinerar olika smaker och texturer för att skapa en
        varierad och lockande meny för våra gäster. Vi anpassar menyvalet efter
        säsong och tillgänglighet för att garantera de färskaste och bästa
        ingredienserna. Smaklig måltid!
      </StyledParagraph>
      <ol>
        <li>Färskrökt laxtartar med avokado- och limecrème</li>
        <li>
          Grillade pilgrimsmusslor med parmesanrisotto och balsamicoreduktion
        </li>
        <li>
          Saftig grillad entrecôte med rödvinssås och rostad vitlökspotatis
        </li>
        <li>Krämig tryffelpasta med champinjoner och parmesan</li>
        <li>
          Citronmarinerad kycklingbröst med örtig couscous och grön sparris
        </li>
        <li>Kryddig rödbetsbiff med picklad rödlök och getostkräm</li>
        <li>Smörstekt havsabborre med tomat- och kaprisrelish</li>
        <li>
          Vegetarisk ravioli fylld med ricotta och spenat i en salvia- och
          hasselnötssmör
        </li>
        <li>Smältande chokladtårta med saltkaramellglass och hallonkompott</li>
        <li>Lätt citronpannacotta med färska bär och myntaströssel</li>
      </ol>
    </ColumnWrapper>
  );
};
