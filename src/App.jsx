import Navbar from "./component/navbar.jsx";
import discord from "./image/discord-icon.svg";
import email from "./image/email-icon.svg";
import myphoto from "./image/photo.png";
import linkedin from "./image/linkedin-icon.svg";
import github from "./image/github-icon.svg";
import html5 from "./image/html5.svg";
import css3 from "./image/css3.svg";
import js from "./image/javascript.svg";
import react from "./image/react.svg";
import nodejs from "./image/nodejs.svg";
import nextjs from "./image/nextjs.svg";
import mongodb from "./image/mongodb-icon.svg";
import postgresql from "./image/postgresql.svg";
import supabase from "./image/supabase-icon.svg";
import vite from "./image/vite.svg";
import tailwindcss from "./image/tailwind-css.svg";
import daisyui from "./image/daisyui-logo.svg";

import gtjlogo from "./image/gtj-logo-full.svg";
import gtjpage from "./image/gtj-srcn.png";
import tripp from "./image/Tripp-logo.svg";
import trippw from "./image/Tripp-white.png";
import travelpage from "./image/travel-company-ss.png";
import tictactoe from "./image/tictactoe-scrn.png";

import git from "./image/git-icon.svg";
import python from "./image/python.svg";
import cpp from "./image/cpp.svg";
import csharp from "./image/cs.svg";

// function App() {
//   return (
//     <>
//       <div className="min-w-screen min-h-screen bg-slate-800 flex flex-col relative">
//         <Navbar />
//         <div className="flex flex-row m-20">
//           <div className="">
//             <div className="flex flex-col text-start text-3xl m-6 text-white">
//               <h1 className="mr-3 mb-3">Hi, My name is</h1>
//               <h1 className=""></h1>
//               <h1 className="text-5xl font-bold">Kritwatchara Wangkhumphai</h1>
//             </div>
//             <h1 className="text-3xl m-6 text-white">
//               I'm Full-Stack Developer
//             </h1>
//             <div className="flex flex-row m-6 text-white text-center">
//               <img width="40" height="40" src={discordLogo} />
//               <h1>[Email]</h1>
//               <h1>[LinkedIn]</h1>
//               <h1>[GitHub]</h1>
//             </div>
//           </div>
//           <div className="absolute right-[100px]">
//             <img
//               src="./src/image/photo.png"
//               width="400"
//               height="400"
//               alt="photo"
//             />
//           </div>
//         </div>
//         <div className="flex flex-row m-20 bg-slate-100">Section 2</div>
//       </div>
//     </>
//   );
// }

// export default App;

function App() {
  return (
    <>
      <div className="min-w-screen min-h-screen bg-base-300 font-serif font-normal">
        {/* NAVBAR */}
        <div className="relative pb-20">
          <div className="navbar bg-base-100 rounded-lg fixed z-20 px-6">
            <div className="navbar-start">
              <a className="btn btn-ghost normal-case text-2xl" href="">
                Kritwatchara W.
              </a>
            </div>
            <div className="navbar-end">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a href="https://www.linkedin.com/in/kritwatchara-wangkhumphai-b2a57b288/">
                    LinkedIn
                  </a>
                </li>

                <li>
                  <a href="https://github.com/JumbKWC">Portfolio</a>
                </li>
                {/* <li>
                  <a href="https://www.youtube.com/watch?v=kerXy7fMv-U">
                    Passions
                  </a>
                </li> */}
              </ul>
              <a
                href="#contact"
                className="btn bg-gray-700 hover:bg-gray-400 text-white font-extrabold"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
        {/* <Navbar /> */}

        {/* section 1 */}
        <div className="hero w-100">
          <div className="hero-content flex-row-reverse text-left">
            <img src={myphoto} className="max-w-sm rounded-lg" />
            <div className="m-8">
              <h1 className="text-2xl py-4">Hi !</h1>
              <h1 className="text-4xl font-bold">
                I'm Kritwatchara Wangkhumphai
              </h1>
              <h1 className="text-4xl font-bold">a Full-Stack Developer</h1>
              <br />
              <h1 className="text-l">
                based in Thailand. I'm coding with a clean and beautiful problem
                solving in mind.
              </h1>
              <div className="flex flex-row pt-4">
                <a href="https://discordapp.com/users/1119207186023854181">
                  <img
                    className="mr-6 hover:scale-125"
                    width={50}
                    src={discord}
                  />
                </a>
                <a href="mailto: kritwatchara.wang@gmail.com">
                  <img
                    className="mr-6 hover:scale-125"
                    width={50}
                    src={email}
                  />
                </a>
                <a href="https://www.linkedin.com/in/kritwatchara-wangkhumphai-b2a57b288/">
                  <img
                    className="mr-6 hover:scale-125"
                    width={50}
                    src={linkedin}
                  />
                </a>
                <a href="https://github.com/JumbKWC/">
                  <img className=" hover:scale-125" width={50} src={github} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Section 2 | Technical skills */}
        <div class="">
          <div className="flex justify-center p-10 space-x-2">
            <h1 className="text-4xl">Technical</h1>
            <h1 className="text-4xl font-extrabold dark:text-gray-200">
              Skills
            </h1>
            {/* <h1 className="text-4xl font-bold">stack</h1> */}
          </div>
          <div className="flex flex-col items-center">
            <div className="card bg-base-100 dark:bg-gray-800 shadow-xl">
              <div className="card-body flex-col items-center">
                <div className="flex justify-center space-x-2 pb-2">
                  <h1 className="card-title text-2xl font-extrabold dark:text-gray-200">
                    Front-End
                  </h1>
                  <p className="text-2xl">Developer</p>
                </div>
                <div className="flex flex-row">
                  <img className="m-2" src={html5} width={50} />
                  <img className="m-2" src={css3} width={50} />
                  <img className="m-2" src={js} width={50} />
                  <img className="m-2" src={react} width={50} />
                  <img className="m-2" src={vite} width={50} />
                  <img className="m-2" src={tailwindcss} width={50} />
                  <img className="m-2" src={daisyui} width={50} />
                </div>
              </div>
            </div>

            <div className="card bg-base-100 dark:bg-gray-800 shadow-xl my-8">
              <div className="card-body items-center text-center">
                <div className="flex justify-center space-x-2 pb-2">
                  <h1 className="card-title text-2xl dark:text-gray-200 font-extrabold">
                    Back-End
                  </h1>
                  <p className="text-2xl">Developer</p>
                </div>
                <div className="flex flex-row">
                  <img className="m-2" src={nodejs} width={50} />
                  <img className="m-2" src={nextjs} width={50} />
                  <img className="m-2" src={mongodb} width={50} />
                  <img className="m-2" src={postgresql} width={50} />
                  <img className="m-2" src={supabase} width={50} />
                </div>
              </div>
            </div>

            <div className="card w-96 bg-base-100 dark:bg-gray-800 shadow-xl mb-10">
              <div className="card-body items-center text-center">
                <div className="flex justify-center space-x-2 pb-2">
                  <h1 className="card-title text-2xl font-extrabold dark:text-gray-200">
                    Other
                  </h1>
                  {/* <p className="text-xl">Designer</p> */}
                </div>
                <div className="flex flex-row">
                  <img className="m-2" src={git} width={50} />
                  <img className="m-2" src={python} width={50} />
                  <img className="m-2" src={cpp} width={50} />
                  <img className="m-2" src={csharp} width={50} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 | My portfolio */}
        <div className="">
          <div className="flex justify-center py-10 pt-10 space-x-2">
            <h1 className="text-4xl">My</h1>
            <h1 className="text-4xl font-extrabold dark:text-gray-200">
              Portfolio
            </h1>
          </div>
          <div className="flex space-x-8 justify-center max-lg:flex-col max-lg:items-center max-lg:space-x-0">
            {/* Get That Job */}
            {/* <div className="card w-100 bg-base-100 shadow-xl bg-[url('Ellipse-1.png')] bg-no-repeat bg-[left_1rem_top_1rem]"> */}
            <div className="card w-100 bg-base-100 dark:bg-gray-800 shadow-xl">
              <div className="flex flex-row items-center space-x-4 mt-6 ml-10">
                <img src={gtjlogo} />
                <img src={react} width={30} />
                <img src={nodejs} width={30} />
                <img src={tailwindcss} width={30} />
                <img src={supabase} width={30} />
              </div>
              <figure className="m-6 hover:ring-4 hover:ring-blue-500 shadow-lg rounded-xl">
                {/* rotate-[-3deg] */}
                <a href="https://clone-get-that-job-2-j3-k-frontend.vercel.app">
                  <img src={gtjpage} width={350} alt="Get That Job" />
                </a>
              </figure>
            </div>

            {/* Travel Company */}
            {/* <div className="card w-100 bg-base-100 dark:bg-gray-800 shadow-xl bg-[url('Ellipse-2.png')] bg-no-repeat bg-[left_1rem_top_1rem]"> */}
            <div className="card w-100 bg-base-100 dark:bg-gray-800 shadow-xl max-lg:my-6">
              <div className="flex flex-row items-center space-x-4 mt-6 ml-6">
                <img className="flex dark:hidden ml-4" src={tripp} />
                <img className="hidden dark:flex" src={trippw} />
                <img src={html5} width={30} />
                <img src={css3} width={30} />
              </div>
              <figure className="m-6 hover:ring-4 hover:ring-blue-500 shadow-lg rounded-xl">
                <a href="https://github.com/JumbKWC/CSS-miniproject">
                  <img src={travelpage} alt="travel company" width={350} />
                </a>
              </figure>
            </div>

            {/* Tic Tac Toe */}
            <div className="card w-100 bg-base-100 dark:bg-gray-800 shadow-xl">
              <div className="flex flex-row items-center space-x-4 mt-6 ml-6">
                <h1 className="text-4xl font-sans font">Tic Tac Toe</h1>
                <img src={html5} width={30} />
                <img src={css3} width={30} />
                <img src={js} width={30} />
              </div>
              <figure className="m-6 hover:ring-4 hover:ring-blue-500 shadow-lg rounded-xl">
                <a href="https://tictactoe-kwc.netlify.app">
                  <img src={tictactoe} alt="TicTacToe" width={350} />
                </a>
              </figure>
            </div>
          </div>
        </div>

        {/* Contact Me */}
        <footer className="footer footer-center w-100 p-20" id="contact">
          <div className="flex justify-center space-x-1">
            <h1 className="text-4xl">Contact</h1>
            <h1 className="text-4xl font-extrabold dark:text-gray-200">Me</h1>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/JumbKWC/"
              className="dark:hover:bg-gray-200 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-200 rounded-xl p-0.5"
            >
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="40"
                height="40"
                className="fill-current"
              >
                <g>
                  <path
                    d="M218.7,445.5c-6.6,0.7-12.2,1.4-17.8,2c-29.1,2.9-54.5-5-73.7-27.7c-6-7.1-9.4-16.3-14.5-24.2c-7.9-12.4-16-24.7-24.7-36.6c-3-4.1-8.2-6.5-12.2-10c-1.3-1.1-1.7-3.2-2.6-4.9c1.8-0.7,3.5-1.9,5.3-2.1c23-2.1,39.2,8.5,50.5,27.6c14.1,23.8,34.5,36.8,62.2,36.8c8,0,16-2.7,23.9-4.5c1.5-0.4,3.3-2.7,3.5-4.4c1.4-10.4,2.7-20.8,7.5-30.3c1.8-3.5,3.9-6.8,6-10.4c-8.1-1.6-15.9-2.8-23.6-4.7c-35.5-9-64.8-26.8-81.8-60.6c-6.6-13.2-10.3-27.4-10.8-42.2c-0.8-22.8-0.5-45.7,4.1-68.2c3.3-15.8,9.3-30.5,21.3-41.9c2.6-2.5,3.1-4.7,1.7-8.5c-6.7-18.7-7.4-37.7-1.7-56.8c1.2-4.1,2.3-8.2,3.5-12.5c27.4,5.2,43.7,23.7,59,44.2c15.8-11.7,34.5-12.7,52.7-13.9c21.6-1.4,43.3-1.1,64.8,2.4c11.2,1.8,18.1,4.1,29,10.6c9.4-9.7,18.2-19.5,27.9-28.4c7.7-7.1,17.3-11.6,27.7-14c2.9-0.7,4.4-0.4,5.6,2.8c8.1,22.1,9.3,44.1,0.4,66.2c-1.2,3-1.1,5.1,1.4,7.5c14.4,13.7,21,31.4,23.2,50.5c2,17.7,3.1,35.5,3.1,53.3c0,25.3-7.5,48.5-23.4,68.4c-11.2,14.1-25.7,24.2-42.1,31.8c-15.9,7.3-32.5,11.5-49.7,13.7c-0.4,0.1-0.8,0.4-1.5,0.7c11.8,16.9,13.7,35.9,13.5,55.6c-0.3,28.7-0.2,57.3,0,86c0,4.5-1.3,5.6-5.7,5.6c-35.5-0.2-71-0.2-106.5,0c-4.4,0-5.8-1.4-5.8-5.7c0.2-15.5,0.1-31,0.1-46.5C218.7,449.9,218.7,447.9,218.7,445.5z"
                    fill="currentColor" // Change fill color if needed
                  />
                </g>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/kritwatchara-wangkhumphai-b2a57b288/"
              className="text-gray-800 hover:text-white hover:bg-blue-600 dark:text-gray-400 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 5 1036 990"
              >
                <path
                  d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"
                  fill="currentColor" // Set fill color if needed
                />
              </svg>
            </a>
            <a
              href="mailto: kritwatchara.wang@gmail.com"
              className="dark:hover:bg-gray-200 hover:text-yellow-600/75 p-0.5 rounded-lg"
            >
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                className="fill-current"
              >
                <path
                  d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"
                  fill="currentColor" // Change fill color if needed
                />
              </svg>
            </a>

            <a
              href="tel: 0859043532"
              className="text-gray-800 dark:text-gray-400 dark:hover:bg-gray-200 hover:text-green-500 rounded-xl "
            >
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="px"
                y="0px"
                viewBox="-20 -20 165 165"
                style={{ enableBackground: "new 0 0 122.88 122.27" }}
                xmlSpace="preserve"
                width="40"
                height="40"
              >
                <g>
                  <path
                    d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z"
                    fill="currentColor" // Change the fill color here
                  />
                </g>
              </svg>
            </a>
          </div>
        </footer>

        {/* Footer */}
        <footer className="footer p-10 dark:bg-neutral dark:text-neutral-content text-gray-600 bg-white">
          <aside>
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>
              By Kritwatchara
              <br />
              kritwatchara.wang@gmail.com
              <br />
              085-9043532
            </p>
          </aside>
          <nav>
            <header className="footer-title">Social</header>
            <div className="grid grid-flow-col gap-4">
              <a className="hover:bg-gray-200 hover:text-blue-500 p-0.5 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a className="hover:bg-gray-200 hover:text-red-500 p-0.5 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a className="hover:text-gray-200 hover:bg-blue-700 p-0.5 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </>
  );
}

export default App;
