import React from "react";
import Bookmark from "../../../components/Bookmark";
import { useState, useEffect } from "react";
export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/bookmark", {
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
      <Bookmark bookmarkslist={props.data} />
    </div>
    )
  }
</>
  );
}
export default Index;
