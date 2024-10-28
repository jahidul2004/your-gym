import "./App.css";
import DaisyNav from "./componants/daisynav/DaisyNav";
import Navbar from "./componants/Navbar/Navbar";
import PriceOptions from "./componants/PriceOptions/PriceOptions";
import LineChart from "./componants/Chart/LineChart";

function App() {
    return (
        <div className="relative w-[90%] md:container m-auto">
            <Navbar></Navbar>
            <PriceOptions></PriceOptions>
            <LineChart></LineChart>
        </div>
    );
}

export default App;
