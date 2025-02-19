export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  date?: string;
  category?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Yatay Sondaj Motor ve Hidrolik Revizyonu',
    description: 'Komple motor revizyonu ve hidrolik sistem yenileme işlemi yapıldı.',
    image: '/images/showcase/sondaj1.jpg',
    date: '2022-11',
    category: 'Motor ve Hidrolik Revizyon'
  },
  {
    id: 2,
    title: 'Beko Loder Şanzıman Tamiri',
    description: 'Şanzıman komple sökülerek arızalı parçalar değiştirildi.',
    image: '/images/about.jpg',
    date: '2024-01',
    category: 'Şanzıman'
  },
  {
    id: 3,
    title: 'Dozer Palet Tamiri',
    description: 'Aşınan palet sistemi sökülerek yeni parçalar ile değiştirildi.',
    image: '/images/about.jpg',
    date: '2023-12',
    category: 'Palet Sistemi'
  },
]; 