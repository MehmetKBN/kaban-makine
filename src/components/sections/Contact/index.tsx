import React from 'react';
import { CONTACT_INFO , COMPANY_INFO } from '@/constants';

export const Contact = () => {

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">İletişim</h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            <p><strong>Adres:</strong> {COMPANY_INFO.location}</p>
            <p><strong>Telefon:</strong> {CONTACT_INFO.phone}</p>
            <p><strong>E-posta:</strong> {CONTACT_INFO.email}</p>
          </div>

        </div>
      </div>
    </section>
  );
}; 