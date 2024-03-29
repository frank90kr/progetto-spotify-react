import { Col, Figure } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ADD_TO_PLAYER } from "../redux/actions";

const SingleSection = (props) => {
  const dispatch = useDispatch();
  return (
    <Col xs={12} md={6} lg={3}>
      <Figure>
        <Figure.Image
          alt="171x180"
          src={props.album.album.cover_medium}
          onClick={() => {
            dispatch({
              type: ADD_TO_PLAYER,
              payload: {
                title: props.album.title,
                artist: props.album.artist.name,
                id: props.album.id,
              },
            });
          }}
        />
        <Figure.Caption>
          <h3>Track: {props.album.title}</h3>
          <h3>Artist: {props.album.artist.name}</h3>
        </Figure.Caption>
      </Figure>
    </Col>
  );
};
export default SingleSection;
