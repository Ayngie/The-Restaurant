import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { Link } from "react-router-dom";

export const ShowBookedTimes = () => {
  const bookings = useContext(AdminContext);

  const html = (
    <>
      {bookings.map((b) => (
        <Link key={b._id} to={"`/admin/${b._id}`"}>
          <tr>
            <td>{b.guest.name}</td>
            <p>{b.date}</p>
            <p>{b.time}</p>
            <td>{b._id}</td>
          </tr>
        </Link>
      ))}
    </>
  );

  return (
    <>
      <table>
        <tr>
          <th>Namn</th>
          <th>Dag</th>
          <th>Tid</th>
          <th>Bokningsid</th>
        </tr>

        {html}
      </table>
    </>
  );
};
