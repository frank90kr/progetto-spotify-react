import { Container } from "react-bootstrap";

const Player = () => {
  return (
    <Container fluid className="player fixed-bottom">
      <div className="d-flex justify-content-center align-items-center mypadding">
        <div>
          <div className="text-light d-flex"></div>
          <img src="/playerbuttons/shuffle.png" alt="shuffle" className="player-buttons" />
          <img src="/playerbuttons/prev.png" alt="prev" className="player-buttons" />
          <img src="/playerbuttons/play.png" alt="play" className="player-buttons" />
          <img src="/playerbuttons/next.png" alt="next" className="player-buttons" />
          <img src="/playerbuttons/repeat.png" alt="repeat" className="player-buttons" />
        </div>
      </div>
    </Container>
  );
};
export default Player;
