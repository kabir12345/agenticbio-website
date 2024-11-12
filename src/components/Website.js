import React from 'react';
import { ArrowUpRight, Linkedin } from 'lucide-react';

export default function Website() {
  const teamMembers = [
    {
      name: 'Jatin Jaiswal',
      role: 'Co-Founder',
      bio: 'Lorem Ipsum',
      image: 'https://media.licdn.com/dms/image/v2/C4D03AQGVOMOSwXpXmA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1641942275501?e=1736985600&v=beta&t=3gtQnCLJYo0msRzzskJ8syAqbooiIymT_TZl_Fd6ITU', // Add your image URL here
      linkedin: 'https://www.linkedin.com/in/jatinjaiswal/', // Add LinkedIn profile URL
    },
    {
      name: 'Kabir Jaiswal',
      role: 'Co-Founder',
      bio: 'Lorem Ipsum',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQFhgtUA9Vt6mw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712081730560?e=1736985600&v=beta&t=cGxvVi25IygT7NMELvrUvgst8TmRTxF3KiXp09jQHDQ', // Add your image URL here
      linkedin: 'https://www.linkedin.com/in/kabir-j/', // Add LinkedIn profile URL
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-helvetica">
      {/* Header */}
      <header className="p-6 flex justify-between items-center font-sans max-w-7xl mx-auto">
        <div className="text-2xl font-bold">Agentic Bio</div>
        <a href="mailto:kabirjaiswal30@gmail.com" className="flex items-center gap-2 hover:text-blue-600">
          <span>Contact Us</span>
          <ArrowUpRight size={20} />
        </a>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 font-sans tracking-tight">
          <span className="block">Making</span>
          <span className="block text-blue-600">Intelligence</span>
          <span className="block text-yellow-600">Accessible & Secure</span>
        </h1>
      </section>

      {/* Mission Statement */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-2xl text-center">
          We create AI systems that empower organizations to solve complex problems while maintaining complete control and transparency.
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-4 font-sans sticky top-6">Our Team</h2>
            <p className="text-gray-600">Building the future of AI systems.</p>
          </div>
          <div className="md:w-2/3 space-y-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-full aspect-square bg-gray-100 rounded-lg"></div>
                  )}
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold font-sans">{member.name}</h3>
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                  </div>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center">
            <a href="mailto:kabirjaiswal30@gmail.com" className="text-white hover:text-gray-300">
              kabirjaiswal30@gmail.com
            </a>
            <p className="text-gray-400">© 2024 Agentic Bio Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}