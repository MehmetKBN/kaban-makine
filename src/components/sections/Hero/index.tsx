import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="hero-pattern section-padding overflow-hidden">
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <h1 className="heading-1">
              Profesyonel İş Makinesi
              <span className="block text-primary mt-2">Tamir ve Bakım Hizmetleri</span>
            </h1>
            <p className="text-xl text-foreground/80">
              Uzman ekibimiz ve modern ekipmanlarımızla iş makinelerinizin bakım ve onarımını 
              en kaliteli şekilde gerçekleştiriyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Hemen Teklif Alın
              </Link>
              <Link href="/projects" className="btn btn-outline btn-lg">
                Projelerimiz
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-foreground/60">Yıllık Deneyim</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-foreground/60">Tamamlanan Proje</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-foreground/60">Müşteri Memnuniyeti</div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] flex items-center justify-center z-0">
            <Image
              src="/images/machine.png"
              alt="İş Makinesi Servisi"
              width={1236}
              height={680}
              className="object-contain hover:scale-105 transition-transform duration-700 drop-shadow-xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 