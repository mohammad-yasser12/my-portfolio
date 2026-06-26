export default function AboutPage() {
  return (
    <section className="p-10 max-w-3xl mx-auto">
      
      <h1 className="text-3xl font-bold">About Me</h1>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        I am <strong>Mohammad Yasser</strong>, a web developer passionate about
        building modern web applications using Next.js and React.
      </p>

      {/* BASIC INFO */}
      <div className="mt-6 space-y-2">
        <p><strong>Name:</strong> Mohammad Yasser</p>
        <p><strong>Email:</strong> mohammadyasser.dev@gmail.com</p>
        <p><strong>Role:</strong> Frontend / Full Stack Developer</p>
      </div>

      {/* SKILLS */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-600 dark:text-gray-300">
          <li>React.js</li>
  <li>Next.js</li>
  <li>TypeScript</li>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>Tailwind CSS</li>
  <li>Bootstrap</li>
  <li>CSS3</li>
  <li>MongoDB</li>
  <li>SQL</li>
  <li>PostgreSQL</li>
        </ul>
      </div>

      {/* GOAL */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Goal</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          I aim to become a professional full-stack developer and build scalable,
          real-world applications that solve problems.
        </p>
      </div>

      {/* CONTACT */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Feel free to reach me at:{" "}
          <span className="font-medium">
            mohammadyasser.dev@gmail.com
          </span>
        </p>
      </div>

    </section>
  );
}