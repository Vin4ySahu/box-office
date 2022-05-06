import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../Misc/config";
import react from "react";

const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        if (isMounted) {
          setShow(results);
          setIsloading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setIsloading(false);
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
