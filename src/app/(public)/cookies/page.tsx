

export const metadata = {
  title: "Cookie Policy — Template Registry",
  description: "Understand how we use cookies to improve your experience on Template Registry.",
};

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <h1 className="font-serif text-5xl text-[#111827] mb-12">Cookie Policy</h1>
      
      <div className="prose prose-gray max-w-none space-y-12">
        <section>
          <p className="text-xl text-gray-500 leading-relaxed italic">
            Effective Date: May 7, 2026
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Template Registry uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our audience is coming from.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#111827] mb-6">1. What are Cookies?</h2>
          <p className="text-gray-600 leading-relaxed">
            Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and provide a more seamless experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#111827] mb-6">2. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-4 mt-4">
            <li><strong>Essential Cookies:</strong> Required for the site to function correctly, such as authentication and security features.</li>
            <li><strong>Performance Cookies:</strong> Used by Vercel Analytics to help us understand how visitors use the site. These are anonymous.</li>
            <li><strong>Functional Cookies:</strong> Remember your search queries and filter preferences.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#111827] mb-6">3. Managing Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            Most web browsers allow you to control cookies through their settings. Please note that disabling essential cookies may impact the functionality of the Registry.
          </p>
        </section>

        <section className="pt-12 border-t border-gray-100">
          <h2 className="text-2xl font-semibold text-[#111827] mb-6">Questions?</h2>
          <p className="text-gray-600 leading-relaxed">
            For more information on our use of cookies, please email our support team:
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
