import React from "react";
import "./App.css";
import InfinityCanvas from "./components/infinityCanvas";
import Arena from "./components/arena";
import Node from "./components/node";
import { vesselHierarchy } from "./mock.data";
import { ConnectProvider } from "react-connect-lines";
import { useApp } from "./hook/useApp";

function App() {
  const { expandedMap, toggle, search, setSearch } = useApp();

  return (
    <InfinityCanvas>
      <Arena>
        <input
          className="absolute top-2 left-2 p-2 border border-gray-300 bg-white rounded"
          placeholder="Search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ConnectProvider>
          {vesselHierarchy.map((node) => (
            <Node
              key={node.id}
              node={node}
              expandedMap={expandedMap}
              toggle={toggle}
            />
          ))}
        </ConnectProvider>
      </Arena>
    </InfinityCanvas>
  );
}

export default App;
