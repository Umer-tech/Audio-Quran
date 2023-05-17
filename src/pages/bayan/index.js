import React from "react";
import Bayan_and_Tafheem from "../../../components/Bayan_and_Tafheem";
import { useState, useEffect } from "react";
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
const Index = (props) => {
  const [isLoading, setisLoading] = useState(true);
   
  useEffect(() => {
    if(props.data != [])
       setisLoading(false)
  }, []);
  return (
    <>
    {isLoading ? (
      <span>Loading....................</span>
    ) :(
    <div>
    <Bayan_and_Tafheem title="Byan-ul-Quran" surahslist={props.data} />
    </div>
    )
  };
</>
  );
}
export default Index;
