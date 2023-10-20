import { useState } from "react"
import './App.css'
import ColorContext from "./colorContext";
import SvgMonaLisa from "./svg-components/MonaLisa";
function App() {
  const [colors, setColors] = useState<MapColor>({});
  const [selectedColor, setSelectedColor] = useState("#ffff");
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ColorContext.Provider value={colors}>
        <SvgMonaLisa
          colors={colors}
          onItemClick={(name: string) => {
            console.log("coloring", name, selectedColor);
          }}
          style={{ width: '256px', height: '256px' }} />
      </ColorContext.Provider>
    </div>
  )
}

export default App
