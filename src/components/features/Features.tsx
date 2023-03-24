import "./features.css";

interface Props {
  description: string;
  title: string;
  image: string;
  altText: string;
}

const Features = ({ description, title, image, altText }: Props) => {
  return (
    <div className="features_card_container">
      <img src={image} alt={altText} className="feature_img" />
      <h3 className="feature_title"> {title} </h3>
      <p className="feature_description"> {description} </p>
    </div>
  );
};

export default Features;
