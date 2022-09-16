import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export const Test = () => {
  const handleUpload = (e) => {
    const files = e.target.files;
    console.warn(files);
  };

  const render = (status: Status) => {
    return <h1>Map status is: {status}</h1>;
  };

  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  return (
    <>
      <input type="file" name="file" onChange={handleUpload} />

      <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
        {/* <YourComponent /> */}
      </Wrapper>
    </>
  );
};
