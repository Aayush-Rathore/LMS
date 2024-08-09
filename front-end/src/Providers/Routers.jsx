import { Route, Routes, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
//import AuthPage from "../Pages/AuthPage";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
// let allRoutes=createBrowserRouter(
//   [
//     {
//       path:'/',
//       element:<Home/>,
//     },
//     {
//       path:'AuthPage',
//       element:<AuthPage/>,
//     },
//     {
//       path:'Blog',
//       element:<Blog/>,
//     },
//     {
//       path:'Contact',
//       element:<Contact/>,
//     },
//   ]
// )


function Routers() {
  return (
    <>
   
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Contact" Component={Contact} />
        {/* <Route path={allRoutes.path} Component={Home} /> */}
      </Routes>
    </>
  );
}

export default Routers;
