import * as React from 'react';

function Logo(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 81 22"
      {...props}
    >
      <path
        d="M19.45 10.95C19.45 4.8 15.04.75 8.41.75H.4V21h8.01c6.48 0 11.04-3.9 11.04-10.05zm-5.7 0c0 3.06-2.1 5.1-5.34 5.1H5.95V5.85h2.46c3.24 0 5.34 2.07 5.34 5.1zM39.077 21v-4.95h-9.78v-2.7h8.94V8.4h-8.94V5.7h9.63V.75h-10.38c-3.42 0-4.8 1.8-4.8 4.65v10.95c0 2.85 1.38 4.65 4.8 4.65h10.53zm18.845-5.1h-8.46l7.29-7.41c1.08-1.08 1.59-2.4 1.59-3.6 0-2.19-1.65-4.14-4.71-4.14h-10.35v5.1h8.22l-7.32 7.41c-.93.93-1.41 2.25-1.41 3.51 0 2.16 1.38 4.23 4.56 4.23h10.59v-5.1zm13.77 5.46c6.33 0 9.24-3.51 9.24-9.51V.75h-5.55V11.7c0 3.12-1.2 4.41-3.69 4.41-2.46 0-3.66-1.29-3.66-4.41V.75h-5.55v11.1c0 6 2.85 9.51 9.21 9.51z"
        fill="currentColor"
      />
    </svg>
  );
}

export { Logo };
