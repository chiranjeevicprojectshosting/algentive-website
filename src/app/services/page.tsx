import React from "react";
import Link from "next/link";

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0080ff] to-[#6366f1] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">Our Services</h1>
          <Link href="/" className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold shadow-lg hover:scale-105 hover:from-cyan-300 hover:to-purple-400 transition-all duration-200">Back to Home</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in delay-100">
          {/* AUTOMATE */}
          <section className="glass p-6 rounded-2xl shadow-xl border-t-4 border-cyan-400">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-3xl">🔄</span> AUTOMATE</h2>
            <ul className="text-white/90 text-sm list-disc pl-5 space-y-2">
              <li><b>Business Process Automation:</b> Workflow Optimization, Document Processing, Customer Service Automation, Email & Communication Automation, Task Management Automation</li>
              <li><b>Data & Analytics Automation:</b> Automated Reporting, Data Pipeline Automation, Predictive Analytics, Quality Assurance Automation, Compliance Monitoring</li>
              <li><b>Marketing & Sales Automation:</b> Lead Generation & Scoring, Social Media Automation, Email Marketing Automation, Sales Pipeline Automation, Customer Journey Automation</li>
            </ul>
          </section>
          {/* CREATE */}
          <section className="glass p-6 rounded-2xl shadow-xl border-t-4 border-purple-400">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-3xl">🎨</span> CREATE</h2>
            <ul className="text-white/90 text-sm list-disc pl-5 space-y-2">
              <li><b>Content Creation Services:</b> Copywriting & Marketing Content, Visual Content Generation, Video Content Automation, Social Media Content, Website Content Generation</li>
              <li><b>Creative Design Solutions:</b> Brand Identity Creation, UI/UX Design Automation, Presentation Design, Infographic Generation, Creative Campaign Development</li>
              <li><b>Innovation & Ideation:</b> Product Development Support, Business Strategy Generation, Creative Problem Solving, Innovation Workshops, Competitive Analysis</li>
            </ul>
          </section>
          {/* SOLVE */}
          <section className="glass p-6 rounded-2xl shadow-xl border-t-4 border-blue-400">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-3xl">🧠</span> SOLVE</h2>
            <ul className="text-white/90 text-sm list-disc pl-5 space-y-2">
              <li><b>Data Analysis & Insights:</b> Advanced Analytics, Machine Learning Models, Predictive Modeling, Risk Assessment, Performance Optimization</li>
              <li><b>Decision Support Systems:</b> Strategic Planning Tools, Resource Optimization, Supply Chain Solutions, Financial Analysis, Market Intelligence</li>
              <li><b>Custom AI Solutions:</b> Natural Language Processing, Computer Vision, Recommendation Systems, Fraud Detection, Intelligent Search</li>
            </ul>
          </section>
        </div>
        <div className="h-8" />
        {/* Specialized Packages, Consulting, Emerging Tech, Delivery Models, Getting Started */}
        <section className="glass p-6 rounded-2xl shadow-xl mb-8 animate-fade-in delay-200 border-l-4 border-cyan-400">
          <h2 className="text-2xl font-bold mb-4">Specialized Service Packages</h2>
          <ul className="text-white/90 text-sm list-disc pl-5 space-y-2">
            <li><b>Startup Acceleration Package:</b> AI Strategy Consultation, MVP Development, Market Validation, Growth Automation, Investor Pitch Support</li>
            <li><b>Enterprise Transformation Package:</b> Digital Transformation Strategy, Legacy System Integration, Change Management Support, ROI Optimization, Scalability Planning</li>
            <li><b>Industry-Specific Solutions:</b> E-commerce AI, Healthcare AI, Financial Services, Manufacturing, Education</li>
          </ul>
        </section>
        <section className="glass p-6 rounded-2xl shadow-xl mb-8 animate-fade-in delay-300 border-l-4 border-purple-400">
          <h2 className="text-2xl font-bold mb-4">Consulting & Support Services</h2>
          <ul className="text-white/90 text-sm list-disc pl-5 space-y-2">
            <li><b>AI Strategy & Consulting:</b> AI Readiness Assessment, Technology Stack Planning, Implementation Roadmap, ROI Calculation, Risk Assessment</li>
            <li><b>Training & Education:</b> AI Literacy Programs, Technical Training, Best Practices Workshops, Ongoing Support, Certification Programs</li>
            <li><b>Maintenance & Optimization:</b> System Monitoring, Model Optimization, Security Updates, Performance Tuning, Technical Support</li>
          </ul>
        </section>
        <section className="glass p-6 rounded-2xl shadow-xl mb-8 animate-fade-in delay-400 border-l-4 border-blue-400">
          <h2 className="text-2xl font-bold mb-4">Emerging Technology Services</h2>
          <ul className="text-white/90 text-sm list-disc pl-5 space-y-2">
            <li><b>Next-Generation AI:</b> GPT Integration, Multimodal AI, AI Agent Development, Edge AI Solutions, Quantum-Ready AI</li>
            <li><b>Innovative Applications:</b> Augmented Reality AI, IoT Integration, Blockchain AI, Voice Technology, Robotics Integration</li>
          </ul>
        </section>
        <section className="glass p-6 rounded-2xl shadow-xl mb-8 animate-fade-in delay-500 border-l-4 border-cyan-400">
          <h2 className="text-2xl font-bold mb-4">Service Delivery Models</h2>
          <ul className="text-white/90 text-sm list-disc pl-5 space-y-2">
            <li><b>Project-Based Services:</b> Fixed-scope projects, clear timelines, milestone payments, documentation, post-delivery support</li>
            <li><b>Retainer Services:</b> Ongoing AI support, monthly packages, priority access, regular reviews</li>
            <li><b>Partnership Models:</b> Strategic partnerships, revenue-sharing, co-development, joint go-to-market</li>
          </ul>
        </section>
        <section className="glass p-6 rounded-2xl shadow-xl mb-8 text-center animate-fade-in delay-600 border-l-4 border-purple-400">
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <p className="text-white/90 text-base mb-2">Free Consultation: 30-minute discovery call to understand your needs</p>
          <p className="text-white/90 text-base mb-2">Custom Proposal: Tailored service package based on your requirements</p>
          <p className="text-white/90 text-base mb-2">Proof of Concept: Small-scale pilot project to demonstrate value</p>
          <p className="text-white/90 text-base mb-2">Full Implementation: Complete solution deployment and optimization</p>
          <p className="text-cyan-400 font-semibold mt-4">Ready to transform your business with AI? <Link href="/contact" className="underline">Contact us</Link> to discuss which services align with your goals and challenges.</p>
        </section>
      </div>
    </main>
  );
} 