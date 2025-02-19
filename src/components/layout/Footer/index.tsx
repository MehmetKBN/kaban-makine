import React from 'react';
import { COMPANY_INFO, CONTACT_INFO } from '@/constants';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">{COMPANY_INFO.name}</h3>
            <p>{COMPANY_INFO.location}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">İletişim</h3>
            <p>{CONTACT_INFO.address}</p>
            <p>{CONTACT_INFO.phone}</p>
            <p>{CONTACT_INFO.email}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 