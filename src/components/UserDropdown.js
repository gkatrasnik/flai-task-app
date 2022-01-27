function UserDropdown(props) {
  return (
    <select
      onChange={(e) => {
        props.handleUserSelect(e.target.value);
      }}
    >
      {props.users &&
        props.users.map((user, index) => (
          <option key={index} user={user} value={user.userid}>
            {user.name} {user.surname}
          </option>
        ))}
    </select>
  );
}

export default UserDropdown;
