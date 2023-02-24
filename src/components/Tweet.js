import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  const {
    tweet: {
      message,
      timestamp,
      user: { name, image, handle },
    },
  } = props;

  return (
    <div className="tweet">
      <ProfileImage imageProp={image} />

      <div className="body">
        <div className="top">
          <User nameProp={name} handleProp={handle} />
          <Timestamp timestampProp={timestamp} />
        </div>

        <Message messageProp={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
