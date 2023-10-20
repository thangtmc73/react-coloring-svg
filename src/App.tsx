import { useState } from "react"
import './App.css'
import ColorContext from "./colorContext";
import SvgMonaLisa from "./svg-components/MonaLisa";

const COLORS = [
  '#844A09',
  '#995C0D',
  '#B27214',
  '#FCD495',
  '#FCD495',
  '#E2B376',
  '#2197D8',
  '#9AD14B',
  '#80A52F',
  '#4D4D4D',
  '#808080',
  '#666666',
]

function App() {
  const [colors, setColors] = useState<MapColor>({});
  const [selectedColor, setSelectedColor] = useState("#ffff");
  return (
    <div style={{ height: '100vh', width: '100%', background: '#f2f2f2', textAlign: 'center', }}>
      <ColorContext.Provider value={colors}>
        <SvgMonaLisa
          colors={colors}
          onItemClick={(name: string) => {
            console.log("coloring", name, selectedColor);
            setColors(colors => {
              return {
                ...colors,
                [name]: selectedColor,
              }
            })
          }}
          style={{ width: '256px', height: '256px' }} />
      </ColorContext.Provider>
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '16px', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
        <span>Selected Color:</span>
        <div style={{ background: selectedColor, width: '50px', height: '50px' }} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '16px', justifyContent: 'center' }}>
        {COLORS.map(color => (
          <div style={{ background: color, width: '50px', height: '50px' }} onClick={() => setSelectedColor(color)} />
        ))}
      </div>
    </div>
  )
}

export default App
