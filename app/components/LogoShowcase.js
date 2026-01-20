'use client';

export default function LogoShowcase() {
  const companies = [
    { 
      name: 'Ontario Government', 
      logo: '/images/logos/ontario-gov.png',
      fallback: 'https://www.ontario.ca/themes/custom/ontario_theme/logo.svg'
    },
    { 
      name: 'Northwestern University', 
      logo: '/images/logos/northwestern.png',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Northwestern_University_seal.svg/200px-Northwestern_University_seal.svg.png'
    },
    { 
      name: 'Ivey Business School', 
      logo: '/images/logos/ivey.png',
      fallback: 'https://www.ivey.uwo.ca/media/3475805/ivey-business-school-logo.png'
    },
    { 
      name: 'Manipal University', 
      logo: '/images/logos/manipal.png',
      fallback: 'https://manipal.edu/content/dam/manipal/mu/images/manipal-logo.png'
    },
    { 
      name: 'TheoremOne', 
      logo: '/images/logos/theoremone.png',
      fallback: 'https://www.theoremone.co/hubfs/TheoremOne_May2021/Image/logos/logo-color.svg'
    },
    { 
      name: 'FirstAmerican', 
      logo: '/images/logos/firstamerican.png',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/First_American_logo.svg/320px-First_American_logo.svg.png'
    },
    { 
      name: 'Grainger', 
      logo: '/images/logos/grainger.png',
      fallback: 'https://www.grainger.com/content/dam/grainger-com/logos/grainger-logo.svg'
    },
    { 
      name: 'State Farm', 
      logo: '/images/logos/statefarm.png',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/State_Farm_logo.svg/320px-State_Farm_logo.svg.png'
    },
    { 
      name: 'TELUS', 
      logo: '/images/logos/telus.png',
      fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/TELUS_Communications_logo.svg/320px-TELUS_Communications_logo.svg.png'
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-600 text-sm font-medium mb-8 uppercase tracking-wide">
          Trusted by Leading Organizations
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
            >
              <img 
                src={company.logo}
                alt={company.name}
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  // Fallback to external URL if local logo not found
                  e.target.src = company.fallback;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
