import React from "react";
import JSON from "./JSON_AS_PROP/studentDetails.json"
import { Students } from './JSON_AS_PROP/Students';
import STYLE from "./JSON_AS_PROP/global.css"

const App = () => {
  return (
    <>
    <Students student={JSON}/>
    </>
  )
}

export default App;