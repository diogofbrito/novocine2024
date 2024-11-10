import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { LangProvider } from "./components/LangProvider";

function App() {
    return (
        <LangProvider>
            <NavBar />
            <Outlet />
        </LangProvider>
    );
}

export default App;
