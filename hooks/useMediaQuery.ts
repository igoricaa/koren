import { useEffect } from 'react';

import { useState } from 'react';

export default function useMediaQuery(mediaQueryString: string) {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    const listener = () => setMatches(!!mediaQueryList.matches);
    listener();
    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
  }, [mediaQueryString]);

  return matches;
}

// import { useState } from 'react';

// import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

// type UseMediaQueryOptions = {
//   defaultValue?: boolean;
//   initializeWithValue?: boolean;
// };

// const IS_SERVER = typeof window === 'undefined';

// export function useMediaQuery(
//   query: string,
//   {
//     defaultValue = false,
//     initializeWithValue = true,
//   }: UseMediaQueryOptions = {}
// ): boolean {
//   const getMatches = (query: string): boolean => {
//     if (IS_SERVER) {
//       return defaultValue;
//     }
//     return window.matchMedia(query).matches;
//   };

//   const [matches, setMatches] = useState<boolean>(() => {
//     if (initializeWithValue) {
//       return getMatches(query);
//     }
//     return defaultValue;
//   });

//   // Handles the change event of the media query.
//   function handleChange() {
//     setMatches(getMatches(query));
//   }

//   useIsomorphicLayoutEffect(() => {
//     if (IS_SERVER) {
//       return;
//     }

//     const matchMedia = window.matchMedia(query);

//     // Triggered at the first client-side load and if query changes
//     handleChange();

//     // Use deprecated `addListener` and `removeListener` to support Safari < 14 (#135)
//     if (matchMedia.addListener) {
//       matchMedia.addListener(handleChange);
//     } else {
//       matchMedia.addEventListener('change', handleChange);
//     }

//     return () => {
//       if (matchMedia.removeListener) {
//         matchMedia.removeListener(handleChange);
//       } else {
//         matchMedia.removeEventListener('change', handleChange);
//       }
//     };
//   }, [query]);

//   return matches;
// }
