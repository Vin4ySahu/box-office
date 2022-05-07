import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../Misc/config";
import react from "react";

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

  if (isLoading) {
    return <div>Data is loaded</div>;
  }
  if (error) {
    <div>Error occured: {error}</div>;
  }
  return <div>This is Show Page</div>;
};

export default Show;
