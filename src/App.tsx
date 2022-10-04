import React from 'react';
import s from "./app.module.scss"
import Header from "./ui/Header/header";
import Main from "./ui/Main/main";

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
