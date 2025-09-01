import React from "react";
import { DiJava } from "react-icons/di";
import {
  SiFigma,
  SiGithub,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = {
  frontend: [
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  ],
  backend: [
    { name: "Node", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Java", icon: <DiJava />, color: "#E11F21" },
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
    { name: "Prisma", icon: <SiPrisma />, color: "#0C344B" },
  ],
  db: [
    { name: "SQL", icon: <SiMysql />, color: "#4479A1" },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "#336791",
    },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  ],
  otras: [
    { name: "GitHub", icon: <SiGithub />, color: "#181717" },
    { name: "Jira", icon: <SiJira />, color: "#0052CC" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  ],
};

function SkillIcon({
  icon,
  name,
  color,
}: {
  icon: React.ReactNode;
  name: string;
  color: string;
}) {
  return (
    <div className="group flex flex-col items-center justify-center w-20 h-20 transition-transform duration-300 hover:scale-110">
      <div
        className="flex items-center justify-center w-16 h-16 text-4xl"
        style={{ color: color }}
      >
        {icon}
      </div>
      <span className="text-sm pt-2 text-slate-800 text-center">{name}</span>
    </div>
  );
}

const Skills = () => (
  <section className="py-12 sm:py-16 px-4 sm:px-6">
    <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
      Habilidades y Conocimientos
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Object.entries(skills).map(([category, list]) => (
        <div
          key={category}
          className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 flex flex-col items-center"
        >
          <h3 className="font-semibold text-lg mb-4 capitalize">{category}</h3>
          <div className="flex flex-wrap gap-5 justify-center">
            {list.map((skill) => (
              <SkillIcon
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
