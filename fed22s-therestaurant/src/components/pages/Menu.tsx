import { Link } from "react-router-dom";
import { NormalButton } from "../styled/StyledButtons";
import {
  StyledH1,
  StyledMenuParagraph,
  StyledMenuListItem,
  StyledCourseDescription,
} from "../styled/TextStyles";
import { ColumnWrapper, MenuWrapper } from "../styled/Wrappers";
import { useEffect } from "react";

export const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  const courseDescription: string[] = [
    "En vacker tallrik med finhackad färskrökt lax blandad med en krämig avokado- och limecrème, serverad med fina garneringar av örter och krispiga brödkrutonger.",
    "Perfekt grillade pilgrimsmusslor som serveras över en krämig parmesanrisotto, toppad med en delikat balsamicoreduktion och dekorativa örter.",
    "En saftig och perfekt grillad entrecôte som serveras med en rik och smakfull rödvinssås, tillsammans med krispigt rostad vitlökspotatis och färska grönsaker.",
    "En al dente kokt pasta med en krämig tryffelsås, sauterade champinjoner och generöst strödd med färskriven parmesan.",
    "Saftigt citronmarinerat kycklingbröst serverat på en säng av kryddig couscous med färska örter, tillsammans med knaprig grön sparris.",
    "En färgstark rödbetsbiff med en härlig kryddning, serverad med syrlig picklad rödlök och en krämig getostkräm.",
    "En vacker havsabborrefilé som är smörstekt till perfektion och serverad med en frisk tomat- och kaprisrelish som kompletterar den milda smaken av fisken.",
    "Hemgjord vegetarisk ravioli fylld med en krämig blandning av ricotta och spenat, serverad med en läcker salvia- och hasselnötssmörssås.",
    "En lockande chokladtårta med en fyllning av smältande choklad, serverad med en läcker saltkaramellglass och en syrlig hallonkompott.",
    "En lätt och krämig citronpannacotta med en uppfriskande citrusarom, serverad med färska och färgstarka bär som smakar sommar. Toppad med ett lätt och fräscht myntaströssel som ger en extra touch av fräschör till denna delikata dessert.",
  ];

  const html = (
    <MenuWrapper>
      <ol>
        {menuList.map((course, index) => (
          <StyledMenuListItem key={index}>
            {course}
            <StyledCourseDescription>
              {courseDescription[index]}
            </StyledCourseDescription>
          </StyledMenuListItem>
        ))}
      </ol>
    </MenuWrapper>
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
      <Link to={"/booking"}>
        <NormalButton>Gå till bokningar</NormalButton>
      </Link>
    </ColumnWrapper>
  );
};
