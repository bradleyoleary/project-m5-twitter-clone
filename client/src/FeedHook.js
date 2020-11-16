import React from "react";

const FeedHook = (obj) => {
  const { url, dataSet, loadingStatus, errorSet } = obj;
  React.useEffect(() => {
    fetch(`${url}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          errorSet(true);
          throw Error("Server error.");
        }
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        dataSet(data);
        loadingStatus("idle");
      })
      .catch((err) => console.log(err));

    return () => {
      loadingStatus("loading");
    };
  }, [url, dataSet, loadingStatus, errorSet]);
};

export default FeedHook;
