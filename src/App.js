import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Devlopment from "./componet1/Devloment/Devloment";
import Aiservices from "./componet1/Aiservices/Aiservices";
import Design from "./componet1/Design/Design";
import Sales from "./componet1/Salse/Salse";
import Admin from "./componet1/Admin/Admin";
import Signup from "./componet1/Header/signup";
import Lheader from "./componet1/login-after/Lheader";
import Login1 from "./componet1/login/Login1";
import Forgot from "./componet1/login/forgot-password/Forgot";
import Provider from "./componet1/Router-outlet/Provider";
import Home1 from "./componet1/Home/Mhome/Home1";
import Ai_Specialists from "./componet1/componants/Ai_Specialists";
import Footer from "./componet1/Footer/footer";
import About from "./componet1/About/About";
import Javadev from "./componet1/Devloment/box-pages/java-devloper/Javadev";
import Phpdev from "./componet1/Devloment/box-pages/php-devloper/Phpdev";
import { Javascript } from "@mui/icons-material";
import Iosdevloper from "./componet1/Devloment/box-pages/ios-devloper/Ios";
import Qadev from "./componet1/Devloment/box-pages/Qa-devloper/Qa_dev";

function App() {
    return (
        <>
            {/* <Header/> */}
            {/* <Navigation /> */}  
            <div>
                <Router>
                    <Routes>
                        <Route path="/Signup" element={<Signup />}></Route>
                        <Route path="/Login1" element={<Login1/>}></Route>
                        <Route path="/Lheader" element={<Lheader/>}></Route>
                        <Route path="/Forgot" element={<Forgot/>}></Route>
                        <Route path="/footer" element={<Footer/>}></Route>

                        <Route element={<Provider/>}>
                            <Route index element={<Home1/>}></Route>
                            <Route path="/" element={<Home1/>}></Route>
                            <Route path="/Devlopment" element={<Devlopment />}></Route>
                            <Route path="/Aiservices" element={<Aiservices />}></Route>
                            <Route path="/Design&Creative" element={<Design />}></Route>
                            <Route path="/Sales&Marketing" element={<Sales />}></Route>
                            <Route path="/Admin&CustomerSupport" element={<Admin />}></Route>

                            <Route path="/about" element={<About/>}></Route>

                            <Route path="/java-devloper" element={<Javadev/>}></Route>
                            <Route path="/php-devloper" element={<Phpdev/>}></Route>
                            <Route path="/javascript-devloper" element={<Javascript/>}></Route>
                            <Route path="/ios-devloper" element={<Iosdevloper/>}></Route>
                            <Route path="/qa-engineers" element={<Qadev/>}></Route>
                            {/* <Route path="/data-scientist" element={<}></Route> */}
                            {/* <Route path="/ai-specialists" element={<Ai_Specialists />}></Route> */}
                        </Route>

                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;

// import React from "react";
// // import Footer from "./componet1/Footer/footer";
// // import Login from "./componet/Login1-validation/Login";
// // import Choose from "./componet/freelanzer/choose";
// // import Careers from "./componet/aboutus/careers";
// // import Howork from "./componet/aboutus/how-f-w";
// // import Ouimpact from "./componet/aboutus/our-impact"
// // import Project from "./componet/aboutus/Project"
// // import Free from "./componet/freelanzer/free10-6"
// // import Process from "./componet/freelanzer/sign_process"
// // import Sign from "./componet/freelanzer/sign-up"
// // import YourComponent from "./componet1/Home/ex-validation"
// // import Cap from "./componet1/Home/ex-validation";

// function App() {
//     return (
//         <div>
//             {/* ********************** component -> aboutus folder ******************************** */}

//             {/* <Careers /> */}
//             {/* <Howork /> */}
//             {/* <Ouimpact/> */}
//             {/* <Project/> */}

//             {/* ************************ component -> Freelancer folder ********************************* */}

//             {/* <Free/> */}
//             {/* <Choose/> */}
//             {/* <Process/> */}
//             {/* <Sign/> */}
//             {/* <Login/> */}
//             {/* <YourComponent/> */}
//             {/* <Cap/> */}
//             {/* <Footer/> */}
//         </div>
//     );
// }

// export default App;
