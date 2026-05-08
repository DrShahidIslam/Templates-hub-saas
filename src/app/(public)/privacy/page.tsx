

export const metadata = {
  title: "Privacy Policy — Template Registry",
  description: "Learn how Template Registry collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <h1 className="font-serif text-5xl text-[#111827] mb-12">Privacy Policy</h1>
      
      <div className="prose prose-gray max-w-none space-y-12">
        <section>
          <p className="text-xl text-gray-500 leading-relaxed italic">
            Effective Date: May 7, 2026
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            At Template Registry, your privacy is a core principle of our operations. We are committed to transparency about the data we collect, why we collect it, and how we protect your information as you utilize our library of professional business frameworks.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#111827] mb-6">1. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed">
            We collect information primarily to provide and improve our services. This includes:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-4 mt-4">
            <li><strong>Account Information:</strong> If you create an account, we collect your email address and name.</li>
            <li><strong>Usage Data:</strong> We may collect information on how you interact with our templates, search queries, and navigation patterns.</li>
            <li><strong>Communication:</strong> When you contact us at support@templateregistry.com, we retain the content of those communications to assist you.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#111827] mb-6">2. How We Use Your Data</h2>
          <p className="text-gray-600 leading-relaxed">
            Your data allows us to personalize your experience, process transactions through our partners (like Polar), and communicate important updates regarding the Registry. We never sell your personal data to third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#111827] mb-6">3. Third-Party Services</h2>
          <p className="text-gray-600 leading-relaxed">
            We utilize secure third-party providers for critical functions:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-4 mt-4">
            <li><strong>Polar:</strong> For handling payments and access grants. Their privacy policy applies to payment data.</li>
            <li><strong>Vercel:</strong> For hosting and analytics to monitor site performance.</li>
          </ul>
        </section>

        <section className="pt-12 border-t border-gray-100">
          <h2 className="text-2xl font-semibold text-[#111827] mb-6">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions regarding this Privacy Policy or our data practices, please reach out to our team at:
          </p>
          <a 
            href="mailto:support@templateregistry.com" 
            className="inline-block mt-4 text-indigo-600 font-bold hover:underline"
          >
            support@templateregistry.com
          </a>
        </section>
      </div>
    </div>
  );
}
