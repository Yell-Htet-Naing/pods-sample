import Header from "./components/Header/Header";
import Mint from "./components/BestDeal/Mint";
import Flavor from "./components/NewRelease/Flavor";
import DeviceContainer from "./components/ThreeCaro/DeviceContainer";
import DisposableContainer from "./components/ThreeCaro/DisposableCaroContainer";
import PodsCaroContainer from "./components/ThreeCaro/PodsCaroContainer";
import FirstFooter from "./components/Footer/FirstFooter";
import SecondFooter from "./components/Footer/secondFooter";
const App = () => {
  return (
    <div>
      <Header />
      <Mint />
      <Flavor />
      <DeviceContainer />
      <PodsCaroContainer />
      <DisposableContainer />
      <FirstFooter />
      <SecondFooter />
    </div>
  );
};

export default App;
