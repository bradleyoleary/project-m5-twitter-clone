import React from "react";

export const HomeFeedContext = React.createContext(null);

const HomeFeedContextProvider = ({ children }) => {
  const [feed, setFeed] = React.useState(null);
  const [feedLoadingStatus, setFeedLoadingStatus] = React.useState("loading");
  return (
    <HomeFeedContext.Provider
      value={{
        feed,
        setFeed,
        feedLoadingStatus,
        setFeedLoadingStatus,
      }}
    >
      {children}
    </HomeFeedContext.Provider>
  );
};

export default HomeFeedContextProvider;
