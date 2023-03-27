import "./testimonyCard.css";

interface Props {
  profession: string;
  username: string;
  profilePhoto: string;
  testimony: string;
}

const TestimonyCard = ({
  profession,
  username,
  profilePhoto,
  testimony,
}: Props) => {
  return (
    <div className="testimony_container">
      <p className="testimony_text">{testimony}</p>
      <div className="user_profile_container">
        <img src={profilePhoto} alt="user img" className="profile_img" />
        <div className="user_data_container">
          <p className="username"> {username} </p>
          <p className="user_profession"> {profession} </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
