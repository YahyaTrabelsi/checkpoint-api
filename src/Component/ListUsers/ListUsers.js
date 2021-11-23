import CardUser from "../CardUser/CardUser";
import "./listusers.css";

const ListUsers = ({ users }) => {
  return (
    <div className="edit">
      {users.map((user) => (
        <CardUser user={user} />
      ))}
    </div>
  );
};

export default ListUsers;
