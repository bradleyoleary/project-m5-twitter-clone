import React from "react";

export const HomeFeedContext = React.createContext(null);

const HomeFeedContextProvider = ({ children }) => {
  const [feed, setFeed] = React.useState(null);
  const [feedLoadingStatus, setFeedLoadingStatus] = React.useState("loading");
  const [error, setError] = React.useState(false);
  return (
    <HomeFeedContext.Provider
      value={{
        feed,
        setFeed,
        feedLoadingStatus,
        setFeedLoadingStatus,
        error,
        setError,
      }}
    >
      {children}
    </HomeFeedContext.Provider>
  );
};

export default HomeFeedContextProvider;
