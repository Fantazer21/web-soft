import React from 'react';
import s from "./app.module.scss"
import Header from "./ui/Header/header";

function App() {
  return (
    <div className={s.app}>
      <Header/>
    </div>
  );
}

export default App;
