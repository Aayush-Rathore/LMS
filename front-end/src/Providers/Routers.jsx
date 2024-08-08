import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";


function Routers() {
  return (
    <>
   
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </>
  );
}

export default Routers;
