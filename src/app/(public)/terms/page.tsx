import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Template Registry",
  description: "Read the terms and conditions for using the Template Registry platform and content.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <h1 className="font-serif text-5xl text-[#111827] mb-12">Terms of Service</h1>
      
      <div className="prose prose-gray max-w-none space-y-12">
        <section>
          <p className="text-xl text-gray-500 leading-relaxed italic">
            Last Updated: May 7, 2026
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            By accessing or using Template Registry, you agree to comply with and be bound by the following terms and conditions. These terms govern your use of our website, templates, and any associated services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#111827] mb-6">1. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            All templates, designs, and content provided on this site are the intellectual property of Template Registry. While we grant you a license to use these materials for your personal or professional operations, you may not resell, redistribute, or claim them as your own creation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#111827] mb-6">2. Usage License</h2>
          <p className="text-gray-600 leading-relaxed">
            Subject to these terms, we grant you a non-exclusive, non-transferable license to download and modify our templates for internal business use. "Internal business use" means you can use them to run your company, but you cannot create a competing template marketplace using our assets.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#111827] mb-6">3. No Warranty</h2>
          <p className="text-gray-600 leading-relaxed">
            Our templates are provided "as is" for educational and organizational purposes. While curated with academic precision, we do not guarantee specific business outcomes or legal compliance for your specific jurisdiction. Always consult with a qualified professional before implementing critical policies.
          </p>
        </section>

        <section className="pt-12 border-t border-gray-100">
          <h2 className="text-2xl font-semibold text-[#111827] mb-6">Inquiries</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions about these terms or require a custom licensing agreement, please contact us at:
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
