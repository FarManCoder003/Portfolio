import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./assets/Components/root/RootLayout";
import Main from "./assets/Components/Main";
import Fed from "./assets/Components/Fed";
import Cyber from "./assets/Components/Cyber";
import Contact from "./assets/Components/Contact";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={ <Main/> }></Route>
      <Route path="/Fed" element={ <Fed/> }></Route>
      <Route path="/Cyber" element={ <Cyber/> }></Route>
      <Route path="/Contact" element={ <Contact/> }></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
