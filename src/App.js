import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Apptext from "./components/Apptext";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { createBrowserRouter , RouterProvider } from "react-router-dom";

function App() {
  const [mode, setMode] = useState({
    color: "black",
    backgroundColor: "white",
  });

  //  $$$$$$$$$$$$$$$$$$$$ black
  // const classremove = () => {
  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-warning");
  // };

  const [modeText, setModeText] = useState("Enable Blackmode");
  const toggleMode = () => {
    if (mode.color === "black") {
      setMode({
        color: "white",
        backgroundColor: "black",
      });
      setModeText("Disable Blackmode");
      document.body.style.backgroundColor = "black";
      showAlert("BlackDark mode has been enabled", "success");
    } else {
      setMode({
        color: "black",
        backgroundColor: "white",
      });
      setModeText("Enable Blackmode");
      document.body.style.backgroundColor = "white";
      showAlert("WhiteLight mode has been enabled", "danger");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const bodyModeChange = () => {
  //   if (modeChange.style === "white") {
  //     setBodyMode({
  //       color: "white",
  //       backgroundColor: "black",
  //     })
  //   }
  // };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <> 
      <Navbar mode={mode} modeText={modeText} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Apptext showAlert={showAlert} heading="Add Text" mode={mode} />
      </> 
    },
    {
      path: '/about',
      element: <>
      <Navbar mode={mode} modeText={modeText} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <About />
      </>
    },
  ])

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
