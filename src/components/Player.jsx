import { Container, ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../redux/actions";
import { useEffect, useState } from "react";

const Player = () => {
  const arrayOfFavs = useSelector((state) => state.favourite);
  const selectedSong = useSelector((state) => state.content);
  const dispatch = useDispatch();
  const [removeArray, setRemoveArray] = useState(arrayOfFavs);

  const removeFavourite = () => {
    setRemoveArray(
      arrayOfFavs.filter((fav) => {
        return fav !== selectedSong.id;
      })
    );
  };
  useEffect(() => {
    dispatch({
      type: REMOVE_FROM_FAV,
      payload: removeArray,
    });
  }, [removeArray]);

  return (
    <Container fluid className="player fixed-bottom">
      <div className="d-flex justify-content-center align-items-center mypadding">
        <div>
          <div className="text-light d-flex">
            <p>{selectedSong.title}</p>

            <p> {selectedSong.artist}</p>
            <div>
              {selectedSong.id ? (
                arrayOfFavs.find((id) => {
                  return selectedSong.id === id;
                }) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="red"
                    class="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                    onClick={() => {
                      removeFavourite();
                    }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="red"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                    onClick={() => {
                      dispatch({
                        type: ADD_TO_FAV,
                        payload: selectedSong.id,
                      });
                    }}
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                )
              ) : (
                ""
              )}
            </div>
          </div>
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
