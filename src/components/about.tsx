import React from "react";

const About: React.FC = () => {
  return (
    <>
      <h2 className="lg:hidden pb-4">About</h2>
      <div className="glass-effect text-black p-6 rounded-lg shadow-lg">
        <p className="text-base mb-4">Hi there! 👋 I am a passionate full-stack developer with a love for building and creating innovative solutions that make a difference.</p>
        <p className="text-base mb-4">While my heart lies in backend development, my journey as a full-stack developer has equipped me with a comprehensive understanding of the entire web development stack.</p>
        <p className="text-base mb-4">I am adept at collaborating with frontend developers to translate design concepts into functional interfaces, ensuring a cohesive and delightful user experience from end to end.</p>
      </div>
    </>
  );
};
export default About;
