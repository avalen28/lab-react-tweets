const ProfileImage = (props) => {
  const { imageProp } = props;
  return <img src={imageProp} className="profile" alt="profile" />;
};

export default ProfileImage;
