const User = (props) => {
  const { nameProp, handleProp } = props;
  return (
    <span className="user">
      <span className="name">{nameProp}</span>
      <span className="handle">@{handleProp}</span>
    </span>
  );
};
export default User;
