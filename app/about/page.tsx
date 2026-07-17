"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const skills = {
  frontend: ["HTML 5", "CSS", "TypeScript", "JavaScript", "Tailwind CSS", "ReactJS", "NextJS"],
  backend: ["Python", "NodeJS", "FastAPI", "Flask", "PostgreSQL", "MongoDB", "Supabase", "Firebase"],
  others: ["Arduino C++", "C++", "C#", "Java", "JavaFX", "Visual Basic", "Flutter", "Unity", "Streamlit", "Jupyter Notebook", "MQTT", "Google Cloud", "Figma", "Adobe Creative Suite", "Blender", "Project Management"],
};

const education = [
  {
    school: "West Visayas State University",
    location: "La Paz, Iloilo City",
    degree: "Bachelor of Science in Computer Science Major in Artificial Intelligence",
    honors: "Magna Cum Laude",
    date: "June 4, 2026",
  },
  {
    school: "Capiz National High School",
    location: "Roxas City, Capiz",
    degree: "STEM Track",
    honors: "With High Honors",
    date: "June 30, 2022",
  },
];

const organizations = [
  {
    role: "President",
    org: "Mechatronics and Robotics Society of the Philippines - Western Visayas Junior Chapter",
    date: "Nov 2025 - Current",
  },
  {
    role: "Assistant Treasurer",
    org: "University Senior Curriculum Council",
    date: "Nov 2025 - Current",
  },
  {
    role: "Student Ambassador",
    org: "Samsung Galaxy Campus",
    date: "2023 - 2025",
  },
  {
    role: "Secretary",
    org: "Capiz Division Federation of Supreme Student Governments",
    date: "2021 - 2022",
  },
  {
    role: "President",
    org: "Capiz NHS Supreme Student Government",
    date: "2021 - 2022",
  },
  {
    role: "Editor-in-Chief",
    org: "Capiz NHS The Script Publication",
    date: "2021 - 2022",
  },
];

const awards = [
  { title: "Top 10 Finalist", event: "Tech For All’s Tech Awards", year: "2025" },
  { title: "Ambassador for Emerging Leadership & Youth Empowerment", event: "Pathways Education Consultancy", year: "2022" },
  { title: "IWAG Awardee", event: "Philippine Information Agency Region IV", year: "2022" },
  { title: "Top 10 & Best Elevator Pitch (Region VI), Champion (Capiz)", event: "goIT TCS Digital Innovation Program", year: "2021-2022" },
  { title: "Best Presenter & 2nd Place (Robotics & Intelligent Machines)", event: "Division SciLympics", year: "2019" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF8] pb-24 pt-20">
      <div className="mx-auto max-w-[1000px] px-6">
        
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-[1.75rem] font-bold text-zinc-900 whitespace-nowrap">About Me</h2>
            <div className="flex-1 h-px bg-zinc-200" />
          </div>
          <p className="text-[15px] text-zinc-600 leading-relaxed max-w-3xl">
            Computer Science major specializing in Artificial Intelligence with hands-on experience in Embedded Systems and Mobile Application Development. Proven track record in delivering complex projects, from AR-integrated thesis work to university-wide attendance systems. Dedicated to solving real-world problems through intelligent automation, responsive design, and hardware-software integration.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-[1.75rem] font-bold text-zinc-900 whitespace-nowrap">Education</h2>
            <div className="flex-1 h-px bg-zinc-200" />
          </div>
          <div className="flex flex-col gap-6">
            {education.map((edu, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 p-5 rounded-2xl border border-zinc-200 bg-white">
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">{edu.school}</h3>
                  <p className="text-[14px] text-zinc-600 mt-1">{edu.degree}</p>
                  <span className="inline-block mt-2 text-[12px] font-medium px-2.5 py-0.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
                    {edu.honors}
                  </span>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-[13px] font-medium text-zinc-500">{edu.date}</p>
                  <p className="text-[13px] text-zinc-400">{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-[1.75rem] font-bold text-zinc-900 whitespace-nowrap">Technical Arsenal</h2>
            <div className="flex-1 h-px bg-zinc-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Front End", items: skills.frontend },
              { title: "Back End", items: skills.backend },
              { title: "Others", items: skills.others },
            ].map((category) => (
              <div key={category.title} className="p-5 rounded-2xl border border-zinc-200 bg-white">
                <h3 className="text-[15px] font-semibold text-zinc-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span key={skill} className="text-[12px] px-2.5 py-1 rounded-md bg-zinc-50 text-zinc-600 border border-zinc-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-[1.75rem] font-bold text-zinc-900 whitespace-nowrap">Organizations & Leadership</h2>
            <div className="flex-1 h-px bg-zinc-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {organizations.map((org, i) => (
              <div key={i} className="p-5 rounded-2xl border border-zinc-200 bg-white flex flex-col justify-between">
                <div>
                  <h3 className="text-[14px] font-bold text-zinc-900">{org.role}</h3>
                  <p className="text-[13px] text-zinc-600 mt-1 leading-snug">{org.org}</p>
                </div>
                <p className="text-[12px] font-medium text-zinc-400 mt-4">{org.date}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-[1.75rem] font-bold text-zinc-900 whitespace-nowrap">Awards & Citations</h2>
            <div className="flex-1 h-px bg-zinc-200" />
          </div>
          <div className="flex flex-col gap-3">
            {awards.map((award, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl border border-zinc-100 bg-white hover:border-emerald-200 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🏆</span>
                  <div>
                    <h3 className="text-[14px] font-semibold text-zinc-900">{award.title}</h3>
                    <p className="text-[13px] text-zinc-500">{award.event}</p>
                  </div>
                </div>
                <span className="text-[12px] font-medium text-zinc-400 sm:text-right">{award.year}</span>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}