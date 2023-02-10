import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const FavouriteCities = () => {
  const city = useSelector((state) => {
    return state.city;
  });
  return (
    <div>
      {city.favourites.map((singleCity) => {
        return (
          <div>
            <Card key={singleCity}>
              {/* <Card.Img variant="top" src="https://picsum.photos/200" />
              <Card.Body>
                <Card.Title>{singleCity.favourites.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go To City</Button>
                <Button variant="danger">Delete From Saved/Fav</Button>
              </Card.Body> */}
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default FavouriteCities;
