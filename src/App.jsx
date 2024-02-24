import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routeItems } from "./assets/config/route";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routeItems.map((item, index) => (
            <Route key={index} path={item.url} element={item.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
