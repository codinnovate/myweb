import { experiences } from "../constants";
import Company from "./Company";



const Experience = () => {
  return (
    <section className="flex  flex-col min-h-screen h-screen justify-center items-center w-full">
      <h1 className="text-2xl text-blue-600 mt-[1em] uppercase  ">Previous Employers</h1>
      <div className="flex gap-5   w-full overflow-hidden ">
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
