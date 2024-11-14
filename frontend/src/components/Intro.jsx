import { useLang } from './LangProvider';
import { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import './style.css'

import { CSSRulePlugin } from "gsap/all";
import { Flip } from "gsap/all";

import sanityClient from '../SanityClient.js';
import { urlFor } from '../utils/imageUrlBuilder.js';

gsap.registerPlugin(useGSAP, Flip, CSSRulePlugin);
export function Intro() {

  const [film, setFilm] = useState(null);
  const [isScrollLocked, setIsScrollLocked] = useScrollLock();
  const { setAnimationDone } = useLang();



  useEffect(() => {
    async function getLatestFilm() {
      const filmData = await sanityClient.fetch(`
				*[_type == "filme"] | order(_createdAt desc)[0]{
					nome, 
					realizador, 
					pais, 
					ano, 
					minutos, 
					vimeoId, 
					sinopse, 
					sinopseENG,
					entrevista,
					entrevistaENG,
					autorEntrevista, 
					creditos, 
					dataExibicao, 
					stills[0]
				}
			`);
      if (filmData) {
        setFilm(filmData);
      }
    }

    getLatestFilm();
  }, []);




  const mainCon = useRef(null);
  const imgCon = useRef(null);
  const leftSlide2 = useRef(null);
  const rightSide2 = useRef(null);



  useEffect(() => {
    let isMob = false
    const paused = false
    console.log(isMob || paused, !isMob || paused)


    if (window.innerWidth <= 768) {
      isMob = false
    } else {
      isMob = true
    }

    setTimeout(() => {
      const t1 = gsap.timeline({
        defaults: {
          ease: 'circ.inOut',
          onStart: () => {
            mainCon.current.style.display = 'block';
            setTimeout(() => {
              setAnimationDone(true)
            }, 1000)
          },
          onComplete: () => {
            console.log("Ended 1")
          },
          paused: !isMob || paused,
        }
      });

      t1
        .to('.scaleCon', {
          scale: 1,
          duration: 0.5
        })

        .to('.dummy1', {
          duration: 0.5,
          top: 'calc(50vh - 305px)',
          right: '10px'
        })
        .to('.dummy2', {
          duration: 0.5,
          top: 'calc(50vh - 150px)',
          right: '10px'
        }, "<")
        .to('.dummy3', {
          duration: 0.5,
          top: 'calc(50vh + 5px)',
          right: '10px'
        }, "<")
        .to('.dummy4', {
          duration: 0.5,
          top: 'calc(50vh + 160px)',
          right: '10px'
        }, "<")
        .to('.dummy5', {
          duration: 0.5,
          top: 'calc(50vh - 305px)',
          left: '10px'
        }, "<")
        .to('.dummy6', {
          duration: 0.5,
          top: 'calc(50vh - 150px)',
          left: '10px'
        }, "<")
        .to('.dummy7', {
          duration: 0.5,
          top: 'calc(50vh + 5px)',
          left: '10px'
        }, "<")
        .to('.dummy8', {
          duration: 0.5,
          top: 'calc(50vh + 160px)',
          left: '10px'
        }, "<")

        .to([leftSlide2.current], {
          duration: 0.7,
          x: '-100%',
        }, '+=0.5')
        .to([rightSide2.current], {
          duration: 0.7,
          x: '100%',
        }, "<")

        .to(imgCon.current, {
          duration: 0.7,
          scaleX: 1,
        }, "<")
        .fromTo(mainCon.current, {
          opacity: 1,
        }, {
          duration: 1,
          opacity: 0,
          onComplete: () => {
            mainCon.current.style.display = 'none';
            setTimeout(() => {
              setIsScrollLocked(false)
            })
          }
        }, ">");


      const t2 = gsap.timeline({
        defaults: {
          ease: 'circ.inOut',
          onStart: () => {
            mainCon.current.style.display = 'block';
            setTimeout(() => {
              setAnimationDone(true)
            }, 1000)
          },
          onComplete: () => {
            console.log("Ended")
          },
          paused: isMob || paused,
        }
      });

      t2
        .to('.dummy1', {
          duration: 0.5,
          top: 'calc(50vh - 305px)',
          right: '10px'
        })
        .to('.dummy2', {
          duration: 0.5,
          top: 'calc(50vh - 150px)',
          right: '10px'
        }, "<")
        .to('.dummy3', {
          duration: 0.5,
          top: 'calc(50vh + 5px)',
          right: '10px'
        }, "<")
        .to('.dummy4', {
          duration: 0.5,
          top: 'calc(50vh + 160px)',
          right: '10px'
        }, "<")
        .to('.dummy5', {
          duration: 0.5,
          top: 'calc(50vh - 305px)',
          left: '10px'
        }, "<")
        .to('.dummy6', {
          duration: 0.5,
          top: 'calc(50vh - 150px)',
          left: '10px'
        }, "<")
        .to('.dummy7', {
          duration: 0.5,
          top: 'calc(50vh + 5px)',
          left: '10px'
        }, "<")
        .to('.dummy8', {
          duration: 0.5,
          top: 'calc(50vh + 160px)',
          left: '10px'
        }, "<")

        .to([leftSlide2.current], {
          duration: 0.7,
          x: '-65vw',
        }, '+=0.5')
        .to([rightSide2.current], {
          duration: 0.7,
          x: '65vw',
        }, "<")

        .to(imgCon.current, {
          duration: 0.7,
          scaleX: 1,
        }, "<")
        .fromTo(mainCon.current, {
          opacity: 1,
        }, {
          duration: 1,
          opacity: 0,
          onComplete: () => {
            mainCon.current.style.display = 'none';
            setTimeout(() => {
              setIsScrollLocked(false)
            })
          }
        }, ">");


    }, [1000])

  }, [])


  return (

    <div ref={mainCon} className='introPage bg-[--background-color-light] h-[100vh] w-[100vw] fixed z-[100] top-0 '>

      <div ref={imgCon} className='absolute h-[100vh] w-[100vw] top-0 scale-x-[0%]'>

        <div
          className='mx-[4.5rem] my-[4.5rem] rounded-[50px] h-[calc(100vh-9rem)]'
          style={{
            backgroundImage: `url(${film?.stills ? urlFor(film?.stills).url() : 'imgs/placeholder.webp'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        </div>
      </div>




      <div className='fakeCon h-[100vh]'>

        <div className='scaleCon mx-auto h-[100vh] '>
          <div ref={leftSlide2} id='intro__slider1' className='fixed flex justify-end  w-1/2 top-0 bottom-0 left-0 z-[999] '>
            <div id='title_1' className='text-[24vh] font-cine flex h-full relative w-full leading-[20vh]  gap-2'>
              <span className='dummy dummy1'>N</span>
              <span className='dummy dummy2'>O</span>
              <span className='dummy dummy3'>V</span>
              <span className='dummy dummy4'>O</span>
            </div>
          </div>
          <div ref={rightSide2} id='intro__slider2_horizontal' className='fixed flex justify-start  w-1/2  top-0 bottom-0 right-0 z-[999]'>
            <div id='title_2' className='text-[24vh] font-cine flex h-full relative w-full leading-[20vh]  gap-2'>
              <span className='dummy dummy5'>C</span>
              <span className='dummy dummy6'>I</span>
              <span className='dummy dummy7'>N</span>
              <span className='dummy dummy8'>E</span>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}




const useScrollLock = () => {
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    const captureScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const captureKeyScroll = (e) => {
      const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
      if (keys.includes(e.keyCode)) {
        e.preventDefault();
        return false;
      }
    };

    if (isLocked) {
      //document.body.style.overflow = 'hidden';
      window.addEventListener('scroll', captureScroll, { passive: false });
      window.addEventListener('wheel', captureScroll, { passive: false });
      window.addEventListener('touchmove', captureScroll, { passive: false });
      window.addEventListener('keydown', captureKeyScroll);
    } else {
      //document.body.style.overflow = 'visible';
      window.removeEventListener('scroll', captureScroll);
      window.removeEventListener('wheel', captureScroll);
      window.removeEventListener('touchmove', captureScroll);
      window.removeEventListener('keydown', captureKeyScroll);
    }

    return () => {
      //document.body.style.overflow = 'visible';
      window.removeEventListener('scroll', captureScroll);
      window.removeEventListener('wheel', captureScroll);
      window.removeEventListener('touchmove', captureScroll);
      window.removeEventListener('keydown', captureKeyScroll);
    };
  }, [isLocked]);

  return [isLocked, setIsLocked];
};
