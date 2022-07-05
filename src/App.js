import "./App.css";
import iconLuxury from "./icon-luxury.svg";
import iconSedan from "./icon-sedans.svg";
import iconSuvs from "./icon-suvs.svg";

function App() {
  return (
    <div className="container">
      <SingleCard cardName="container__single-card container-sedans">
        <CardContent
          imageSource={iconSedan}
          title="Sedans"
          data={TextSedans.text}
        />
        <button
          className="container__btn btn-sedans btn-sedans--hover"
          type="submit"
        >
          Learn More
        </button>
      </SingleCard>
      <SingleCard cardName="container__single-card container-suvs">
        <CardContent imageSource={iconSuvs} title="Suvs" data={TextSvus.text} />
        <button
          className="container__btn btn-suvs btn-suvs--hover"
          type="submit"
        >
          Learn More
        </button>
      </SingleCard>
      <SingleCard cardName="container__single-card container-luxury">
        <CardContent
          imageSource={iconLuxury}
          title="Luxury"
          data={TextLuxury.text}
        />
        <button
          className="container__btn btn-luxury btn-luxury--hover"
          type="submit"
        >
          Learn More
        </button>
      </SingleCard>
    </div>
  );
}

const SingleCard = (props) => {
  return <div className={props.cardName}>{props.children}</div>;
};

const CardContent = (props) => {
  return (
    <>
      <img className="container___image" src={props.imageSource} alt="" />
      <p className="container__title">{props.title}</p>
      <p className="container__text">{props.data}</p>
    </>
  );
};

const TextSedans = {
  text: "Choose a sedan for its affordability and excellent fuel economy.Ideal for cruising in the city or on your next road trip.",
};

const TextLuxury = {
  text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
};

const TextSvus = {
  text: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
};

export default App;
