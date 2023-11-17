import "./App.css";

import { useEffect } from "react";

function App() {
  let faceio;

  useEffect(() => {
    faceio = new faceIO("fioa414d");
  }, []);

  const handleRegister = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "example@gmail.com",
        },
      });

      console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);
    } catch (error) {
      console.log(error);
    }
  };

  return (
        <section className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="font-sans font-bold text-xl mb-4">
        Face Authentication by FaceIO
      </h1>
      <div className="flex flex-col justify-center items-center">

        <button
          className="block px-4 py-2 outline-none bg-blue-500 rounded text-white mb-2"
          onClick={handleRegister}
        >
          Register
        </button>

        <button
          className="block px-4 py-2 outline-none bg-blue-500 rounded text-white mb-2"
          onClick={handleLogIn}
        >
          LogIn
        </button>

      </div>
    </section>
  );
}

export default App;