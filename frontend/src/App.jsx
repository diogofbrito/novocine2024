import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { LangProvider } from "./components/LangProvider"
import { SmoothScrolling } from "./components/SmoothScrolling";

function App() {
    return (
			<SmoothScrolling>
				<LangProvider>
					<NavBar />
					<Outlet />
				</LangProvider>
			</SmoothScrolling>
		);
}

export default App;
