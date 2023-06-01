import { Link } from "react-router-dom";
import { NormalButton } from "../styled/StyledButtons";
export const Home = () => {
  return (
    <>
      <h1>Välkommen till Restaurangen!</h1>
      <Link to={"/booking"}>
        <NormalButton>Gå till bokningar</NormalButton>
      </Link>
    </>
  );
};
