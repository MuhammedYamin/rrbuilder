'use client';

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-10 mt-20 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        Last updated: 1st January 2025
      </p>

      <p className="mb-4">
        This Privacy Policy governs the collection, use, storage, and disclosure of personal data provided by users on this platform. We comply with the Digital Personal Data Protection Act (DPDP) 2023 and other relevant regulations.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Information entered into forms on our website.</li>
        <li>Data from email interactions.</li>
        <li>Personal information from third-party platforms.</li>
        <li>Details provided through operational channels.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Data</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Enhancing user experience and personalizing interactions.</li>
        <li>Facilitating lead generation and communication.</li>
        <li>Conducting marketing campaigns.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">User Rights</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Access, correction, and deletion of personal data.</li>
        <li>Right to restrict processing or withdraw consent.</li>
        <li>Data portability and ability to opt-out of marketing communications.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
      <p className="mb-4">
        We use cookies to enhance user experience. Users can manage cookie preferences through browser settings.
      </p>


      <h2 className="text-xl font-semibold mt-6 mb-2">Changes to This Policy</h2>
      <p className="mb-4">
        We may update this policy periodically. Users are encouraged to review it for changes.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
