import React from 'react';
import Image from 'next/image';

export const About = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container-custom">
        <h2 className="heading-2 text-foreground mb-12">Hakkımızda</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/images/1.png"
              alt="Kaban Makine Atölyesi"
              fill
              className="object-contain drop-shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg text-foreground/80">
              Kaban Makine olarak, yılların deneyimi ve uzman ustalıkla 
              iş makinelerinizin bakım ve onarım işlemlerini profesyonel 
              bir şekilde gerçekleştiriyoruz.
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Deneyimli Usta</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Kaliteli Hizmet</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Hızlı Çözüm</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Uygun Fiyat</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}; 