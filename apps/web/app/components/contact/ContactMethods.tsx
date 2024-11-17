// components/ContactMethods.js

import { Mail, Phone, HeadphonesIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

const ContactMethods = () => {
  return (
    <div className="grid gap-8 text-center md:grid-cols-3">
      {/* Email */}
      <div>
        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-white border border-gray-200 rounded-lg">
          <Mail className="h-6 w-6 text-[#1B365D]" />
        </div>
        <h2 className="mb-2 text-xl font-semibold">Email us</h2>
        <p className="mb-4 text-gray-600">Email us for general queries, including marketing and partnership opportunities.</p>
        <a href="mailto:hello@helpcenter.com" className="text-[#1B365D] hover:underline">hello@helpcenter.com</a>
      </div>

      {/* Phone */}
      <div>
        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-white border border-gray-200 rounded-lg">
          <Phone className="h-6 w-6 text-[#1B365D]" />
        </div>
        <h2 className="mb-2 text-xl font-semibold">Call us</h2>
        <p className="mb-4 text-gray-600">Call us to speak to a member of our team. We are always happy to help.</p>
        <a href="tel:+234(646)786-5060" className="text-[#1B365D] hover:underline">+234 (646) 786-5060</a>
      </div>

      {/* Support */}
      <div>
        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-white border border-gray-200 rounded-lg">
          <HeadphonesIcon className="h-6 w-6 text-[#1B365D]" />
        </div>
        <h2 className="mb-2 text-xl font-semibold">Support</h2>
        <p className="mb-4 text-gray-600">Check out helpful resources and FAQs</p>
        <Link href="/support" className="inline-flex items-center text-[#1B365D] hover:underline">
          Support Center <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}
export default ContactMethods;