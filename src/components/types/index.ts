export interface NavItem {
    label: string;
    href: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    completionDate: string;
}

export interface ContactInfo {
    address: string;
    phone: string;
    email: string;
}

export interface ServiceItem {
    title: string;
    description: string;
    image: string;
}

export interface Projects {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
} 