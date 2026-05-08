import { Mail, MessageCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contact Us — Template Registry",
  description: "Get in touch with the Template Registry support team for inquiries, feedback, or custom requests.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      <div className="text-center mb-20">
        <h1 className="font-serif text-5xl md:text-6xl text-[#111827] mb-6">Get in Touch</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Have a question about our templates or need assistance with your registry access? 
          Our team is here to provide operational support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ── EMAIL CARD ── */}
        <a 
          href="mailto:support@templateregistry.com"
          className="group block p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-indigo-500/20 transition-all duration-500"
        >
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <Mail className="w-7 h-7 text-indigo-600" />
          </div>
          <h2 className="font-serif text-3xl text-[#111827] mb-4">Email Support</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            The fastest way to reach us for template inquiries, licensing, or technical assistance.
          </p>
          <div className="flex items-center gap-2 text-indigo-600 font-bold group-hover:translate-x-2 transition-transform">
            support@templateregistry.com <ArrowRight className="w-4 h-4" />
          </div>
        </a>

        {/* ── FEEDBACK CARD ── */}
        <div className="p-10 bg-[#FAFAFA] border border-gray-100 rounded-[2.5rem]">
          <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8">
            <MessageCircle className="w-7 h-7 text-gray-400" />
          </div>
          <h2 className="font-serif text-3xl text-[#111827] mb-4">Suggestions</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Don&apos;t see a specific template you need? Let us know. We prioritize our research based on user demand.
          </p>
          <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            Always Listening
          </div>
        </div>
      </div>

      {/* ── SECONDARY INFO ── */}
      <div className="mt-20 pt-12 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-sm italic">
          Typical response time: 24-48 hours. Thank you for standardizing with us.
        </p>
      </div>
    </div>
  );
}
