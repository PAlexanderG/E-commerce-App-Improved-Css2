import React from "react";
import { Link } from "react-router-dom";

const ProjectInfo = () => {
  return (
    <section className="pt-32 pb-12 lg:py-32 min-h-screen flex items-center bg-gray-50">
      <div className="container mx-auto px-4">
        <Link to="/" className="text-red-600 font-semibold underline mb-8 block">
          ← Back to Shop
        </Link>
        
        <div className="bg-white p-8 md:p-12 shadow-xl rounded-2xl max-w-4xl mx-auto border border-gray-100">
          <h1 className="text-4xl font-bold mb-6 text-zinc-900 border-b pb-4">
            Project Documentation: E-Commerce App
          </h1>
          
          <div className="space-y-8 text-gray-700">
            {/* API Info */}
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-red-600">Fake Store API</h2>
              <p className="leading-relaxed">
                This project utilizes the <strong>FakeStoreAPI</strong> for product data. 
                Due to intermittent 403 Forbidden errors from the live API during deployment, 
                this version uses a <strong>local JSON architecture</strong> to ensure 100% 
                uptime and instant loading speeds.
              </p>
            </section>

            {/* MVP Requirements */}
            <section className="bg-zinc-50 p-6 rounded-xl border border-zinc-200">
              <h2 className="text-xl font-bold mb-4 uppercase tracking-wider">MVP Requirements (Tier 1)</h2>
              <ul className="grid md:grid-cols-2 gap-4 text-sm">
                <li className="flex items-start">✅ Deployed via Vercel</li>
                <li className="flex items-start">✅ Product browsing functionality</li>
                <li className="flex items-start">✅ Individual product detail views</li>
                <li className="flex items-start">✅ Category filtering</li>
                <li className="flex items-start">✅ Responsive TailwindCSS UI/UX</li>
                <li className="flex items-start">✅ Persistent shopping cart</li>
              </ul>
            </section>

            {/* Tech Stack */}
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-red-600">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Vite', 'TailwindCSS', 'React Router', 'Context API'].map((tech) => (
                  <span key={tech} className="bg-zinc-900 text-white px-3 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;