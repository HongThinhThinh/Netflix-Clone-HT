import React, { useState } from "react";
import { getFireBaseData, writeUserData } from "./firebase";

// useEffect(() => {
//   getData();
// }, []);
// const getData = async () => {
//   const data = await getFireBaseData(7);
//   setCheck(data);
// };
function Test() {
  getFireBaseData(5).then((res) => console.log(res));
  return <div>{}</div>;
}

export default Test;
