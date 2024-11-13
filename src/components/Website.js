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
    <div className="min-h-screen text-gray-900" 
         style={{ 
           fontFamily: "'Public Sans', sans-serif",
           backgroundImage: 'url(https://img.freepik.com/free-photo/blurry-peach-circle-background-gradient-vintage-style_53876-104475.jpg)',
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           minHeight: '100vh'
         }}>
      {/* Content Container */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="p-6 flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Agentic Bio</div>
          <a href="mailto:kabirjaiswal30@gmail.com" className="flex items-center gap-2 hover:text-blue-600">
            <span>Contact Us</span>
            <ArrowUpRight size={20} />
          </a>
        </header>

        {/* Hero Section */}
        <div className="px-6 py-24">
          <h1 className="text-5xl font-bold mb-8 tracking-tight" 
              style={{ 
                fontFamily: "'Space Grotesk', sans-serif",
                color: '#EE9A78'
              }}>
            <span className="block">Making</span>
            <span className="block">Intelligence</span>
            <span className="block">Accessible & Secure</span>
          </h1>
          <div className="text-2xl mt-8 max-w-3xl italic" style={{ color: '#000000' }}>
            We create AI systems that empower organizations to solve complex problems while maintaining complete control and transparency.
          </div>
        </div>

        {/* Team Section */}
        <section className="px-6 py-24">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Team</h2>
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
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{member.name}</h3>
                        <p className="text-blue-600 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{member.role}</p>
                        <p className="text-gray-600">{member.bio}</p>
                      </div>
                      {member.linkedin && (
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 mt-1"
                        >
                          <Linkedin size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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