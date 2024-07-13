import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simüle edilen ağ isteği
    setTimeout(() => {
      setLoading(false); // Yükleme 3 saniye sonra tamamlanacak
    }, 1580);
  }, []);

  if (loading) {
    return <Loader />;
  }
}

function Loader() {
  return (
    <div className="loader">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
