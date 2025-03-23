import React from "react";
import { My_Resume_Link, Profile_Img } from "../constants";

function SetingsPage() {
  const handleResumeDownload = () => {
    const resumeUrl = My_Resume_Link;
    const newTab = window.open(resumeUrl, "_blank");
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Manash_Baruah_Resume.pdf";
      newTab.document.body.appendChild(link);
      link.click();
      newTab.document.body.removeChild(link);
    }, 1000);
  };

  return (
    <div className="flex justify-center min-h-screen w-screen bg-gray-200 p-4 font-serif text-justify leading-relaxed sm:mt-0 sm:mb-0 md:mb-0 md:mt-0 mt-[350px] mb-[50px]">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4">
                Account Settings
            </h2>
            <p className="text-purple-600 cursor-pointer hover:text-purple-800" onClick={() => (window.location.href = "/")}>
                Home
            </p>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <img
            src={Profile_Img}
            alt="Profile"
            className="w-16 h-16 border-2 border-purple-600 rounded-full object-cover cursor-pointer"
          />

          <div>
            <h3 className="text-lg font-bold">
              Manash Baruah
            </h3>
            <p className="text-gray-500 text-sm">
              undrilingquarter@gmail.Com
            </p>
          </div>
        </div>
        <p className="mt-4 text-gray-600 text-sm">
          A skilled react developer with a passion for
          building seamless and high-performance web
          applications. Proficient in JavaScript, React.js,
          and Tailwind CSS, I specialize in crafting
          visually appealing and responsive user interfaces.
          With expertise in Firebase and Google
          Authentication, I create secure and efficient
          authentication systems. I utilize Redux for state
          management and leverage Bootstrap , Shadcn UI,
          Framer-motion for modern and scalable designs.
          Additionally, my knowledge of Python and Flask
          allows me to develop best solutions. Experienced
          in version control, I focus on writing clean,
          maintainable code for efficient collaboration and
          deployment.
          <br />
          Always exploring new technologies and crafting
          high-performance web applications. Let's connect
          to discuss potential collaborations or share
          insights on the evolving landscape of technology.
          🚀
        </p>

        <button
          onClick={handleResumeDownload}
          className="cursor-pointer px-4 w-full mt-5 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
          My Resume
        </button>

        <div className="mt-6 border-t border-gray-300"></div>
      </div>
    </div>
  );
}

export default SetingsPage;
