import React from "react";
import HomeScreen from "../../../components/homescreen";

const index = (props) => {
  return (
    <div>
      <HomeScreen title="Bayan ul Quran" surahslist={props.data} />
    </div>
  );
};
index.getInitialProps = async () => {
  const response = await fetch("http://localhost:3000/api/surahs", {
    method: "GET",
  });
  const result = await response.json();
  return {
    props: {
      data: result,
    },
  };
};

export default index;
