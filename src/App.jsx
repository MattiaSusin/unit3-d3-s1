import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";
import MyAlert from "./components/MyAlert";
/* import AllTheBooks from "./components/AllTheBooks"; */
/* import SingleBook from "./components/SingleBook"; */
import SingleBookClass from "./components/SingleBookClass";
/* import SingleBook from "./components/SingleBook"; */

function App() {
  return (
    <div className="App">

      <TopBar/>
      <MyAlert/>
      {/* <AllTheBooks/> */}
      {/* <SingleBook/> */}
      <SingleBookClass/>
      <MyFooter/>
      
    </div>
  );
}

export default App;
