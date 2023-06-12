import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { Link } from "react-router-dom";
import { NormalButton } from "../styled/StyledButtons";

export const ShowBookedTimes = () => {
  const bookings = useContext(AdminContext);

  const html = (
    <>
      {bookings.length >= 1 ? (
        <table>
          <thead>
            <tr>
              <th>Namn</th>
              <th>Dag</th>
              <th>Tid</th>
              <th>Bokningsid</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, index) => (
              <tr key={index}>
                <td>{b.guest.name}</td>
                <td>{b.date.substring(5, 10)}</td>
                <td>{b.time}</td>
                <td>{b._id}</td>
                <td>
                  <Link to={"" + b._id}>
                    <NormalButton>Hantera bokning</NormalButton>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Det finns inga bokningar den här dagen</p>
      )}
    </>
  );

  return <>{html}</>;
};
