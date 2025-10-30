import {getSkills} from "@/app/lib/data-skills";

function CategoryCard ({ title, skills }: {
  title: string;
  skills: string[];
}) {
  return (
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl flex flex-col h-full">
        <h3 className="text-2xl font-bold text-white mb-5 text-center">
          {title}
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
              <span
                  key={skill}
                  className="bg-white/15 backdrop-blur-sm text-gray-100 text-sm font-medium px-3 py-1.5 rounded-full border border-white/20"
              >
            {skill}
          </span>
          ))}
        </div>
      </div>
  );
}

export default function Skills (){
  const skills = getSkills()
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12 text-shadow-medium">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
              <CategoryCard
                  key={category.title}
                  title={category.title}
                  skills={category.skills}
              />
          ))}
        </div>
      </div>
  );
};
