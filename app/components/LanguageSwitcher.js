'use client';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { locale, locales } = router;

  const languageNames = {
    en: 'English',
    fr: 'Français',
    es: 'Español'
  };

  const languageFlags = {
    en: '🇬🇧',
    fr: '🇫🇷',
    es: '🇪🇸'
  };

  const changeLanguage = (newLocale) => {
    const path = pathname || router.asPath;
    router.push(path, path, { locale: newLocale });
  };

  return (
    <div className="relative group">
      {/* Current Language Button */}
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Change language"
      >
        <span className="text-xl">{languageFlags[locale]}</span>
        <span className="hidden sm:inline text-sm font-medium text-gray-700">
          {languageNames[locale]}
        </span>
        <svg 
          className="w-4 h-4 text-gray-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => changeLanguage(loc)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors ${
              locale === loc ? 'bg-purple-50 text-purple-700' : 'text-gray-700'
            }`}
          >
            <span className="text-xl">{languageFlags[loc]}</span>
            <span className="text-sm font-medium">{languageNames[loc]}</span>
            {locale === loc && (
              <svg 
                className="w-4 h-4 ml-auto text-purple-600" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
