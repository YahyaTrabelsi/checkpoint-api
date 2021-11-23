import "./carduser.css";

const CardUser = ({ user }) => {
  return (
    <div className="style">
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
      <h3>{user.phone}</h3>
    </div>
  );
};

export default CardUser;
