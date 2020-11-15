import React from "react";

const FeedHook = (obj) => {
  const { url, dataSet, loadingStatus } = obj;
  React.useEffect(() => {
    fetch(`${url}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        dataSet(data);
        loadingStatus("idle");
      })
      .catch((err) => console.log(err));

    return () => {
      loadingStatus("loading");
    };
  }, [url, dataSet, loadingStatus]);
};

export default FeedHook;
