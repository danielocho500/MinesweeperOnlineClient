import { Header } from "./components/basics/Header";

import './App.css'
import { Menu } from "./components/menu/Menu";
import { useState } from "react";
import { ScreenType } from "./components/helper/ScreenType";
import { SelectDiff } from "./components/menu/SelectDiff";
import { SoloMatch } from "./SoloMatch/SoloMatch";

function App() {

    const [screen, setScreen] = useState(ScreenType.MenuMain);
    const [match, setMatch] = useState({
      bombs: 1,
      height: 1,
      width: 1
    })

    const renderSwitch = (param) =>{
      switch (param) {
        case ScreenType.MenuMain:
          return <Menu setScreen={setScreen}/>

        case ScreenType.MenuDifficulty:
          return <SelectDiff setScreen={setScreen} setMatch={setMatch}/>

        case ScreenType.SoloMatch:
          return <SoloMatch setScreen={setScreen} match={match}/>

        default:
          return <Menu setScreen={setScreen}/>
      }
    }

    return(
      <>
          <Header setScreen={setScreen}/>
          {renderSwitch(screen)}
      </>
    )
}

export default App;
