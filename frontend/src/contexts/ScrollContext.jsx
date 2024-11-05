import React, { createContext, useContext, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const ScrollContext = createContext();

export function useScroll() {
	return useContext(ScrollContext);
}

export function ScrollProvider({ children }) {
	const scrollRef = useRef(null);

	useEffect(() => {
		let locomotiveScroll;

		if (scrollRef.current) {
			locomotiveScroll = new LocomotiveScroll({
				el: scrollRef.current,
				smooth: true,
				// Se você quiser adicionar mais opções, pode fazer aqui
			});
		}

		return () => {
			if (locomotiveScroll) locomotiveScroll.destroy();
		};
	}, []);

	return (
		<ScrollContext.Provider value={{ scrollRef }}>
			<div ref={scrollRef} data-scroll-container>
				{children}
			</div>
		</ScrollContext.Provider>
	);
}
