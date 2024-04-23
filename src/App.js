import "./App.css";

import Desktop from "./components/Desktop";
import DesktopMobile from "./mobile/components/Desktop-mob.jsx";

import { useMediaQuery } from "react-responsive";

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="App">
      {isTabletOrMobile ? (
        <DesktopMobile isTabletOrMobile={isTabletOrMobile} />
      ) : (
        <Desktop isTabletOrMobile={isTabletOrMobile} />
      )}
    </div>
  );
}

export default App;
