import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../Misc/config";

import ShowMainData from "../Commponents/show/ShowMainData";
import Details from "../Commponents/show/Details";
import Cast from "../Commponents/show/Cast";
import Seasons from "../Commponents/show/Seasons";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_SUCCES": {
      return { isLoading: false, error: null, show: action.show };
    }
    case "FETCH_FAILED": {
      return {
        ...prevState,
        isLoading: false,
        show: null,
        error: action.error,
      };
    }
    default: {
      return prevState;
    }
  }
};

const initialState = {
  show: null,
  isLoading: false,
  error: null,
};

const Show = () => {
  const { id } = useParams();
  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    let isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        if (isMounted) {
          dispatch({ type: "FETCH_SUCCES", show: results });
        }
      })
      .catch((err) => {
        if (isMounted) {
          dispatch({ type: "FETCH_FAILED", error: err.message });
        }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);
  console.log("show", show);

  if (isLoading || !show) {
    return <div>Data is loaded</div>;
  }
  if (error) {
    <div>Error occured: {error}</div>;
  }
  return (
    <div>
      <div>
        <ShowMainData
          image={show.image}
          name={show.name}
          rating={show.rating}
          tags={show.genres}
          summary={show.summary}
        />
      </div>
      <div>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </div>
      <div>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </div>
      <div>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </div>
    </div>
  );
};

export default Show;
