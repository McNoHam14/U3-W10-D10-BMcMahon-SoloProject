import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const WeatherInfo = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => {
    return state.weather;
  });
  if (!weather) {
    return <></>;
  } else {
    return (
      <div>
        <h1> {weather.name} </h1>
        <h2> {weather.weather[0].main} </h2>
        <p> {weather.weather[0].description} </p>
        <Button
          onClick={() => {
            dispatch({
              type: "STORE_CITY",
              payload: weather,
            });
          }}
        >
          ADD TO FAV
        </Button>
      </div>
    );
  }
};

export default WeatherInfo;
