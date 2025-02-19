import { NavItem, ServiceItem, ContactInfo } from '@/components/types';

export const SITE_NAME = 'Kaban Makine';
export const SITE_DESCRIPTION = 'İş Makinesi Tamir ve Bakım Hizmetleri';
export const COMPANY_INFO = {
  name: SITE_NAME,
  founded: 2000,
  location: 'Erzurum, Türkiye',
};

export const NAV_LINKS: NavItem[] = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/projects', label: 'Projelerimiz' },
  { href: '/about', label: 'Hakkımızda' },
  { href: '/contact', label: 'İletişim' },
];

export const CONTACT_INFO: ContactInfo = {
  address: 'Örnek Mahallesi, Sanayi Caddesi No:123, Erzurum',
  phone: '+90 501 319 2155',
  email: 'info@kabanmakine.com',
};  