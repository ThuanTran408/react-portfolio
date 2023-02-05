import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai';
import { HiChevronDoubleLeft, HiChevronDoubleDown, HiChevronDoubleRight } from "react-icons/hi";
import Image from 'next/image';
import cat from '../public/Cat.png';
import GraceShopper from '../public/GraceShopper.png';
import GraceShopper2 from '../public/GraceShopper2.png';
import GraceShopper3 from '../public/GraceShopper3.png';
import FitnessTrackr from '../public/FitnessTrackr.png';
import FitnessTrackr2 from '../public/FitnessTrackr2.png';
import StrangersThings from '../public/StrangersThings.png';
import StrangersThings2 from '../public/StrangersThings2.png';
import ArtCollector1 from '../public/ArtCollector1.png';
import ArtCollector2 from '../public/ArtCollector2.png';
import tictactoe from '../public/tictactoe3.png';
import puppybowl from '../public/puppybowl.png'
import idea from '../public/idea.png';
import rocket from '../public/rocket.png';
import forwardArrow from '../public/fast-forward.png'
import {DiJsBadge, DiReact} from 'react-icons/di';
import { useEffect, useState } from 'react';



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thuantran408')
    .then(response => response.json())
    .then (data => {
      setBlogs(data.items)
    })
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Thuan Tran</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 '>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between '>
            <h1 className='text-xl font-beginner dark:text-white'>developedbythuan</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode) } className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a className='bg-gradient-to-r from-orange-400 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="https://flowcv.com/resume/erokhgw9q5" target="_blank">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl font-bold py-2 text-orange-400 font-medium md:text-6xl'>Thuan Tran</h2>
            <h3 className='text-xl py-2  dark:text-white'>Web Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto  dark:text-white'>A new developer looking to create fun and interesting web applications.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href='https://www.linkedin.com/in/thuantran408/' target="_blank"><AiFillLinkedin/></a>
            <a href='https://www.facebook.com/thuantran408/' target="_blank"><AiFillFacebook/></a>
            <a href='https://github.com/ThuanTran408' target="_blank"><AiFillGithub/></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={cat} layout="fill" objectFit='cover'/>
          </div>
        </section>


        <section>
          <div className='text-center'>
            {/* <h3 className='text-3xl py-1  dark:text-white'>Technologies I've Used!</h3> */}
            {/* <div className=' dark:bg-white'>
            <DiJsBadge />
            <DiReact /> 
            </div> */}
            <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'>Since the beginning of my coding journey, I have been inspired by easy-to-use and clean looking user interfaces. I started to notice the small features on the websites I use and it gave a new appreciation for the creative people who created them. People are amazing and I'm striving to be just that. </p>
            {/* <p className='dark:text-white'>**MY STRENGTHS AND SERVICES LISTED HERE**</p> */}
          </div>
          <div className='lg:flex gap-10 text-center'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white'>
              <center><Image src={idea} width={100} height={100} /></center>
              <h3 className='text-lg font-medium pt-8 pb-2 text-teal-500 dark:bg-white'>DEMOS</h3>
              {/* <p className='py-2'>Here are some projects, I have worked on!</p> */}
              {/* <h4 className='py-4 text-teal-500 dark:bg-white'>DEMO</h4> */}
              <p className='text-gray-800 cursor-pointer py-1' ><a href='https://dreamy-queijadas-fff4f9.netlify.app/' target='_blank'>Fitness Trackr</a></p>
              
              <p className='text-gray-800 py-1' href="#">Graceshopper - Sticky Situations Stickers</p>
              <p className='text-gray-800 cursor-pointer py-1' ><a href='https://gleeful-paletas-0153de.netlify.app/' target='_blank'>Strangers Things - Buy/Sell/Trade</a></p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <center><Image src={rocket} width={100} height={100} /></center>
              <h3 className='text-lg font-medium pt-8 text-teal-500 pb-2'>ABOUT ME</h3>
              {/* <p className='py-2'>When I'm not coding, I love doing all these things!</p> */}
              {/* <h4 className='py-4 text-teal-600'>Hobbies</h4> */}
              <p className='text-gray-800 py-1'>Cheering for the Golden State Warriors</p>
              <p className='text-gray-800 py-1'>Being a foodie</p>
              <p className='text-gray-800 py-1'>Working on my fitness goals</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <center><Image src={forwardArrow} width={100} height={100} /></center>
              {/* <h3 className='text-lg font-medium pt-8 text-teal-500 pb-2'>BLOG?</h3> */}
              {/* <p className='py-2'>Blah, blah, blah, blah, blah</p> */}
              {/* <h4 className='py-4 text-teal-600'>Blah</h4> */}
              {/* <p className='text-gray-800 py-1'>ESPN</p>
              <p className='text-gray-800 py-1'>YouTube</p>
              <p className='text-gray-800 py-1'>Udemy</p> */}
              <div className="">
                  <h3 className='text-lg font-medium pt-8 text-teal-500 pb-2'>MY BLOGS</h3>
                  {blogs.map(blog => {
                    return (<div key={blog.id}>
                      <h1>{blog.title}</h1>
                      <center><img src={blog.thumbnail} alt={blog.title} width={200} height={200} /></center>
                      <br />
                      <a href={blog.link} target="_blank" rel="noopener noreferrer">View Blog Post</a>
                    </div>)
                  })}
                </div>
            </div>
          </div>
        </section>
        <section>
          <div className='text-center dark:text-white'>
            <h3 className='text-3xl mt-10 py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'>
            
            I began my journey by acquiring my Web development Certification from Full Stack Academy. During my immersive 6-month bootcamp, I worked on a variety of different projects designed to build coding fundamentals and spark innovation. With no tech background and with projects due every week, I took on the challenge to learn how to code.

            I consider myself a full stack software engineer, but I tend to favor the front end more than the back end. I love the instant satisfaction that comes along with being a front end developer. I have experience working with technologies such as Javascript, React, Express.js, Node.js, PostgreSQL, HTML, and CSS.

            I have always been fascinated with technology. I love the logic, algorithms, and puzzles that come along with programming.</p>
            {/* <p className='dark:text-white'>**MY STRENGTHS AND SERVICES LISTED HERE**</p> */}
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={GraceShopper} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={GraceShopper3} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={puppybowl} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={FitnessTrackr} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={FitnessTrackr2} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={ArtCollector1} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={tictactoe}className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={StrangersThings} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
            </div>
            {/* <div className='basis-1/3 flex-1'>
              <Image src={StrangersThings2} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
            </div> */}

          </div>
        </section>
      </main>
    </div> 
  )
}
