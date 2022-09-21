import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addlist from "./component/Addlist";
import Editlist from "./component/Editlist";
import ShowList from "./component/ShowList";

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowList/>}/>
        <Route path="/Add" element={<Addlist/>}/>
        <Route path="/Edit/:id" element={<Editlist/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
