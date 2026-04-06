import React, { useState } from 'react';
import { Interface } from './components/Interface.tsx';
import { Scene } from './components/Scene.tsx';

function App() {
  const [selectedSatellite, setSelectedSatellite] = useState<any | null>(null);

  return (
    <div className="w-full h-screen bg-[#02040a] text-white overflow-hidden relative">
      <Scene selectedSatellite={selectedSatellite} setSelectedSatellite={setSelectedSatellite} />
      <Interface selectedSatellite={selectedSatellite} setSelectedSatellite={setSelectedSatellite} />
    </div>
  );
}

export default App;
