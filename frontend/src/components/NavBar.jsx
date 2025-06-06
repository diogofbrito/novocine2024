import { useRef, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider';
import { ThemeSwitch } from './ThemeSwitch';
import { useLang } from './LangProvider';
import { langId } from '../Lang/translation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Newsletter } from './Newsletter';
import { translation } from '../Lang/translation';
import { langRouteMap, routeTranslations } from '../Lang/translationRoutes';
import { NavBarMobile } from './Mobile/NavBarMobile';

gsap.registerPlugin(ScrollTrigger);

export function NavBar() {
	const navbarRef = useRef(null);
	const [showNewsletter, setShowNewsletter] = useState(false);
	const { lang, toggleLang, animationDone } = useLang();
	const location = useLocation();
	const currentPath = location.pathname;
	const [_, basePath, ...rest] = currentPath.split('/');
	const isFilmDetailPage = [langRouteMap.EN.arquivo, langRouteMap.PT.archive].includes(basePath.toLowerCase()) && rest.length > 0;
	const isNotHomePage = !(currentPath === '/' || currentPath === '/home');

	useEffect(() => {
		const navbar = navbarRef.current;

		if (window.innerWidth > 768) {
			ScrollTrigger.create({
				trigger: navbar,
				start: '30px top',
				end: 'bottom top',
				onUpdate: self => {
					if (self.direction === 1) {
						gsap.to(navbar, {
							y: -navbar.offsetHeight,
							duration: 0.4,
							ease: 'power1.out',
						});
					} else if (self.direction === -1) {
						gsap.to(navbar, {
							y: 0,
							duration: 0.4,
							ease: 'power1.out',
						});
					}
				},
			});
		}

		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		};
	}, []);

	

	return (
		<ThemeProvider>
			<>
				<div
					className={`fixed z-50 top-0 px-[4.5rem] iphone:px-[1rem] flex w-screen h-[4.5rem] items-center opacity-0 mobileNavBar ${(animationDone || isNotHomePage) && '!opacity-100'}`}
					ref={navbarRef}
				>
					{!isFilmDetailPage ? (
						<div className='grid-cols-3 w-full items-center grid '>
							<div className=' text-md flex flex-row gap-4 iphone:hidden iphone:text-base'>
								<NavLink
									to={`/${routeTranslations.arquivo[lang]}`}
									className='uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'
								>
									{translation[lang].arquivo}
								</NavLink>
								<NavLink
									to={`/${routeTranslations.sobre[lang]}`}
									className='uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'
								>
									{translation[lang].sobre}
								</NavLink>
								<button
									onClick={() => setShowNewsletter(true)}
									className='uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'
								>
									NEWSLETTER
								</button>
							</div>
							<div className='hidden iphone:block '></div>

							<div className='justify-center flex  iphone:mt-0 '>
								<NavLink to={`/${routeTranslations.home[lang]}`} className='font-cine text-5xl -mt-1'>
									NOVOCiNE
								</NavLink>
							</div>
							

							<NavBarMobile useLang={useLang} translation={translation} showNewsletter={showNewsletter} setShowNewsletter={setShowNewsletter} />

							<div className=' flex justify-end gap-4 iphone:hidden'>
								<button
									onClick={() => toggleLang()}
									className='px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out '
								>
									{lang === langId.PT ? langId.EN : langId.PT}
								</button>
								<ThemeSwitch />
							</div>
						</div>
					) : (
						<div className='flex justify-center items-center w-full filmes iphone:justify-center '>
							<NavLink
								to={`/${routeTranslations.arquivo[lang]}`}
								className='uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out '
							>
								{translation[lang].fechar}
							</NavLink>
						</div>
					)}
				</div>

				<Newsletter showNewsletter={showNewsletter} setShowNewsletter={setShowNewsletter} />
			</>
		</ThemeProvider>
	);
}
