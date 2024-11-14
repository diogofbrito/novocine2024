import React, { useRef, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider';
import { ThemeSwitch } from './ThemeSwitch';
import { useLang } from './LangProvider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Newsletter } from './Newsletter';
import { translation } from '../Lang/translation';

gsap.registerPlugin(ScrollTrigger);

export function NavBar() {
  const navbarRef = useRef(null);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const isFilmDetailPage = currentPath.toLowerCase().startsWith('/arquivo/') && !['/arquivo', '/arquivo/'].includes(currentPath.toLowerCase());

  const { lang, toggleLang, animationDone } = useLang();

  useEffect(() => {
    const navbar = navbarRef.current;

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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ThemeProvider>
      <>
        <div className={`fixed z-50 top-0 px-[4.5rem] flex w-screen h-[4.5rem] items-center opacity-0 ${animationDone && "!opacity-100"}`} ref={navbarRef}>
          {!isFilmDetailPage ? (
            <div className='grid-cols-3 w-full items-center grid'>
              <div className='font-bold text-md flex flex-row gap-4 '>
                <NavLink to='/arquivo' className='uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'>
                  {translation[lang].arquivo}
                </NavLink>
                <NavLink to='/sobre' className='uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'>
                  {translation[lang].sobre}
                </NavLink>
                <button
                  onClick={() => setShowNewsletter(true)}
                  className='uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'
                >
                  NEWSLETTER
                </button>
              </div>
              <div className='justify-center flex '>
                <NavLink to='/' className='font-cine text-4xl '>
                  NOVOCINE
                </NavLink>
              </div>
              <div className='font-bold flex justify-end gap-4 '>
                <button onClick={() => toggleLang()} className='px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out'>
                  {lang === 'PT' ? 'EN' : 'PT'}
                </button>
                <ThemeSwitch />
              </div>
            </div>
          ) : (
            <div className='flex justify-end items-center w-full filmes'>
              <NavLink
                to='/arquivo'
                className='uppercase px-3 py-1 border rounded-full hover:bg-[rgba(255,255,255,0.5)] dark:hover:bg-[rgba(234,235,222,0.5)] transition duration-300 ease-in-out font-bold'
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
