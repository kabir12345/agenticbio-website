import React from 'react';
import { ArrowUpRight, Linkedin } from 'lucide-react';

export default function Website() {
  const teamMembers = [
    {
      name: 'Jatin Jaiswal',
      role: 'Co-Founder',
      bio: 'Lorem Ipsum',
      image: 'https://media.licdn.com/dms/image/v2/C4D03AQGVOMOSwXpXmA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1641942275501?e=1736985600&v=beta&t=3gtQnCLJYo0msRzzskJ8syAqbooiIymT_TZl_Fd6ITU',
      linkedin: 'https://www.linkedin.com/in/jatinjaiswal/',
    },
    {
      name: 'Kabir Jaiswal',
      role: 'Co-Founder',
      bio: 'Lorem Ipsum',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQFhgtUA9Vt6mw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712081730560?e=1736985600&v=beta&t=cGxvVi25IygT7NMELvrUvgst8TmRTxF3KiXp09jQHDQ',
      linkedin: 'https://www.linkedin.com/in/kabir-j/',
    },
  ];

  return (
    <div className="min-h-screen" 
         style={{ 
           fontFamily: "'Public Sans', sans-serif",
           backgroundImage: 'url(https://img.freepik.com/free-photo/blurry-peach-circle-background-gradient-vintage-style_53876-104475.jpg)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           minHeight: '100vh'
         }}>
      {/* Header */}
      <header className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Agentic Bio</div>
        <a href="mailto:kabirjaiswal30@gmail.com" className="flex items-center gap-2 hover:text-blue-600">
          <span>Contact Us</span>
          <ArrowUpRight size={20} />
        </a>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="py-24 text-center">
          <h1 className="text-5xl font-bold mb-8" 
              style={{ 
                fontFamily: "'Space Grotesk', sans-serif",
                color: '#000000'
              }}>
            Making Intelligence
            <br />
            Accessible & Secure
          </h1>
          <div className="text-2xl mt-8 max-w-3xl mx-auto italic text-black">
            We create AI systems that empower organizations to solve complex problems while maintaining complete control and transparency.
          </div>
        </div>

        {/* Team Section */}
        <div className="py-24">
          <h2 className="text-3xl font-bold mb-4 text-center text-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Our Team
          </h2>
          <p className="text-center italic text-black mb-16">Building the future of AI systems.</p>
          
          {/* Team Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex gap-6">
                <div className="w-1/3">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
                <div className="w-2/3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{member.name}</h3>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-gray-600"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                  <p className="text-black mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{member.role}</p>
                  <p className="text-black">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#EE9A78' }} className="mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center">
            <a href="mailto:kabirjaiswal30@gmail.com" className="text-white hover:text-gray-100">
              kabirjaiswal30@gmail.com
            </a>
            <p className="text-white">© 2024 Agentic Bio Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}