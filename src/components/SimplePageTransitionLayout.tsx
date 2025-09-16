'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function SimplePageTransitionLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main
      className="w-full min-h-screen"
      style={{ 
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
    >
      {children}
    </main>
  );
}
