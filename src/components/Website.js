import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Website() {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Founder / CEO',
      bio: 'With over 15 years of experience in AI and machine learning, Sarah has led innovative projects at major tech companies and holds multiple patents in ML systems.',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Marcus brings deep expertise in scalable AI systems, having previously architected solutions for enterprise companies and contributed to open-source ML frameworks.',
    },
    {
      name: 'Dr. Maya Patel',
      role: 'Head of Research',
      bio: 'Maya completed her PhD in Computer Science at MIT, focusing on reinforcement learning. She previously led research teams at leading AI labs.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-helvetica">
      {/* Header */}
      <header className="p-6 flex justify-between items-center font-sans">
        <div className="text-2xl font-bold">YourCompany</div>
        <a href="mailto:contact@example.com" className="flex items-center gap-2 hover:text-blue-400">
          <span>Contact Us</span>
          <ArrowUpRight size={20} />
        </a>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 font-sans tracking-tight">
          <span className="block">Making</span>
          <span className="block text-blue-400">Intelligence</span>
          <span className="block text-yellow-400">Accessible & Secure</span>
        </h1>
      </section>

      {/* Mission Statement */}
      <section className="px-6 py-16 bg-black/30">
        <div className="max-w-3xl mx-auto text-2xl text-center">
          We create AI systems that empower organizations to solve complex problems while maintaining complete control and transparency.
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 font-sans">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
              <div className="w-full h-48 mb-4 bg-gray-700 rounded-lg"></div>
              <h3 className="text-xl font-bold mb-1 font-sans">{member.name}</h3>
              <p className="text-blue-400 mb-3">{member.role}</p>
              <p className="text-gray-300 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}