import { experiences } from "../constants";
import Company from "./Company";



const Experience = () => {
  return (
    <section className="flex  flex-col min-h-screen h-screen justify-center items-center   overflow-x-hidden">
      <h1 className="text-2xl text-blue-600 mt-[1em] uppercase  ">Previous Employers</h1>
      <div className="flex flex-row overflow-x-auto">
      {experiences.map((experience, idx) => (
        <Company 
        key={idx}
        experience={experience}
        />
      ))}
      </div>
    </section>
  );
};

export default Experience;
