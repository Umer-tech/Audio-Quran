import React from "react";
import HomeScreen from "../../../components/homescreen";
export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/surahs", {
    method: "GET",
  });
  const result = await response.json();
  return {
    props: {
      data: result,
    },
  };
}
const index = (props) => {
  return (
    <div>
      <HomeScreen title="Tilawat e Quran" surahslist={props.data} />
    </div>
  );
};

export default index;
