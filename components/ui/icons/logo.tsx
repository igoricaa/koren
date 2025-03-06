import { cn } from '@/lib/utils';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  markAccent?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, markAccent, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='185'
    height='40'
    fill='none'
    viewBox='0 0 185 40'
    className={className}
    {...props}
  >
    <path
      className={cn(`fill-foreground ${markAccent ? 'dark:fill-accent' : ''}`)}
      d='M27.366 16.08h-6.499V40h6.5z'
    ></path>
    <path
      className={cn(`fill-foreground ${markAccent ? 'dark:fill-accent' : ''}`)}
      d='m38.87 35.276 4.595-4.557L26.41 13.804l-4.596 4.558z'
    ></path>
    <path
      className={cn(`fill-foreground ${markAccent ? 'dark:fill-accent' : ''}`)}
      d='M48.227 19.303v-6.446H24.109v6.446z'
    ></path>
    <path
      className={cn(`fill-foreground ${markAccent ? 'dark:fill-accent' : ''}`)}
      d='M27.366 0h-6.499v23.92h6.5z'
    ></path>
    <path
      className={cn(`fill-foreground ${markAccent ? 'dark:fill-accent' : ''}`)}
      d='M0 12.857v6.446h24.118v-6.446z'
    ></path>
    <path
      className='fill-foreground'
      d='m4.766 30.713 4.595 4.558 17.054-16.914-4.595-4.558zM61.2 37.566v-24.71h5.38v9.54h3.948l7.303-9.54h6.167l-8.63 11.498 9.373 13.212h-6.412L70.93 27.143H66.59v10.423h-5.390000000000001M98.272 38.155c-2.499 0-4.761-.563-6.788-1.681a12.36 12.36 0 0 1-4.76-4.652c-1.153-1.976-1.73-4.168-1.73-6.585q0-3.625 1.73-6.601a12.3 12.3 0 0 1 4.76-4.679q3.026-1.69 6.788-1.69c2.507 0 4.813.564 6.83 1.69a12.36 12.36 0 0 1 4.761 4.679c1.153 1.983 1.73 4.193 1.73 6.601s-.577 4.61-1.73 6.585a12.36 12.36 0 0 1-4.761 4.652c-2.026 1.126-4.297 1.68-6.83 1.68m0-4.748c1.476 0 2.812-.347 4-1.031a7.3 7.3 0 0 0 2.787-2.885c.672-1.239 1.013-2.66 1.013-4.254s-.341-3.058-1.013-4.306a7.3 7.3 0 0 0-2.787-2.885c-1.188-.684-2.515-1.03-4-1.03s-2.76.346-3.949 1.03c-1.188.685-2.114 1.646-2.786 2.885-.673 1.24-1.014 2.677-1.014 4.306s.332 3.015 1.014 4.254a7.3 7.3 0 0 0 2.786 2.885c1.188.693 2.499 1.031 3.949 1.031M115.471 37.566v-24.71h5.381v3.813H121c.559-1.178 1.441-2.166 2.638-2.955 1.197-.796 2.656-1.195 4.368-1.195h3.389v5.233h-3.73c-1.345 0-2.533.277-3.555.832a6.1 6.1 0 0 0-2.394 2.321q-.864 1.498-.864 3.448v13.212zM160.754 37.566v-24.71h5.381v3.57h.148c.725-1.178 1.782-2.166 3.18-2.963q2.094-1.195 4.961-1.195c3.058 0 5.469.927 7.224 2.763 1.765 1.846 2.638 4.428 2.638 7.754v14.78h-5.424v-14.19c0-2.123-.524-3.709-1.581-4.774q-1.574-1.586-4.342-1.586c-1.284 0-2.437.304-3.45.901q-1.533.91-2.437 2.6c-.611 1.126-.917 2.408-.917 3.838v13.212zM151.118 30.4c-.541.763-1.275 1.422-2.201 1.967-1.188.702-2.638 1.057-4.35 1.057a7.06 7.06 0 0 1-3.503-.91 7.8 7.8 0 0 1-2.69-2.469 7.94 7.94 0 0 1-1.31-3.482h20.492v-1.464c0-2.348-.559-4.514-1.677-6.49a12.16 12.16 0 0 0-4.638-4.652c-1.974-1.126-4.202-1.69-6.665-1.69s-4.639.564-6.613 1.69q-2.96 1.69-4.69 4.679-1.73 2.986-1.73 6.61c0 2.417.576 4.618 1.73 6.584a12.54 12.54 0 0 0 4.69 4.653q2.96 1.689 6.613 1.689 4.992 0 8.176-2.443 2.883-2.223 4.167-5.328h-5.801M138.592 19.91c.655-.884 1.511-1.585 2.542-2.105 1.04-.52 2.184-.789 3.433-.789s2.446.26 3.485.789q1.56.78 2.516 2.105a6.46 6.46 0 0 1 1.206 2.894h-14.571a8.1 8.1 0 0 1 1.381-2.894z'
    ></path>

    <path
      className={cn(`fill-foreground ${markAccent ? 'dark:fill-accent' : ''}`)}
      d='M27.3661 16.0797H20.8672V40H27.3661V16.0797Z'
    />
    <path
      className={cn(`fill-foreground ${markAccent ? 'dark:fill-accent' : ''}`)}
      d='M38.8694 35.2764L43.4648 30.7186L26.411 13.8044L21.8155 18.3622L38.8694 35.2764Z'
    />
    <path
      className={cn(`fill-foreground ${markAccent ? 'dark:fill-accent' : ''}`)}
      d='M48.2266 19.3026V12.8568L24.1088 12.8568V19.3026H48.2266Z'
    />
    <path
      className={cn(`fill-foreground ${markAccent ? 'dark:fill-accent' : ''}`)}
      d='M27.3661 0H20.8672V23.9203H27.3661V0Z'
    />
    <path
      className={cn(`fill-foreground ${markAccent ? 'dark:fill-accent' : ''}`)}
      d='M0 12.8568L0 19.3026H24.1178V12.8568L0 12.8568Z'
    />
    <path
      className={cn(`fill-foreground ${markAccent ? 'dark:fill-accent' : ''}`)}
      d='M4.76587 30.713L9.36133 35.2709L26.4152 18.3567L21.8197 13.7988L4.76587 30.713Z'
    />
    <path
      className='fill-foreground'
      d='M61.1992 37.5655V12.8568H66.5801V22.3955H70.5284L77.831 12.8568H83.998L75.3677 24.3535L84.7405 37.5655H78.3289L70.9302 27.1432H66.5888V37.5655H61.208H61.1992Z'
    />
    <path
      className='fill-foreground'
      d='M98.2716 38.1546C95.7733 38.1546 93.5109 37.5915 91.4844 36.4739C89.4578 35.3476 87.8767 33.7968 86.7237 31.8215C85.5707 29.8462 84.9941 27.6543 84.9941 25.2372C84.9941 22.82 85.5707 20.6195 86.7237 18.6355C87.8767 16.6428 89.4578 15.0834 91.4844 13.9571C93.5022 12.8308 95.7646 12.2677 98.2716 12.2677C100.779 12.2677 103.085 12.8308 105.102 13.9571C107.12 15.0834 108.71 16.6428 109.863 18.6355C111.016 20.6195 111.593 22.8287 111.593 25.2372C111.593 27.6457 111.016 29.8462 109.863 31.8215C108.71 33.7968 107.129 35.3476 105.102 36.4739C103.076 37.6002 100.805 38.1546 98.2716 38.1546ZM98.2716 33.407C99.7478 33.407 101.084 33.0604 102.272 32.376C103.452 31.6916 104.386 30.7299 105.059 29.491C105.731 28.2521 106.072 26.8313 106.072 25.2372C106.072 23.6431 105.731 22.1789 105.059 20.9313C104.386 19.6924 103.452 18.7308 102.272 18.0464C101.084 17.3619 99.7566 17.0154 98.2716 17.0154C96.7866 17.0154 95.5113 17.3619 94.3233 18.0464C93.1353 18.7308 92.2094 19.6924 91.5368 20.9313C90.8642 22.1702 90.5235 23.6084 90.5235 25.2372C90.5235 26.8659 90.8554 28.2521 91.5368 29.491C92.2094 30.7299 93.144 31.6916 94.3233 32.376C95.5113 33.0691 96.8215 33.407 98.2716 33.407Z'
    />
    <path
      className='fill-foreground'
      d='M115.471 37.5655V12.8568H120.852V16.6688H121C121.559 15.4906 122.441 14.5029 123.638 13.7145C124.835 12.9175 126.294 12.519 128.006 12.519H131.395V17.7518H127.665C126.32 17.7518 125.132 18.029 124.11 18.5835C123.088 19.138 122.293 19.9177 121.716 20.9053C121.14 21.9017 120.852 23.0539 120.852 24.3535V37.5655H115.471Z'
    />
    <path
      className='fill-foreground'
      d='M160.754 37.5655V12.8568H166.135V16.4263H166.283C167.008 15.248 168.065 14.2603 169.463 13.4633C170.86 12.6662 172.511 12.2677 174.424 12.2677C177.482 12.2677 179.893 13.1947 181.648 15.0314C183.413 16.8768 184.286 19.4585 184.286 22.7854V37.5655H178.862V23.3745C178.862 21.2519 178.338 19.6665 177.281 18.6008C176.233 17.5439 174.783 17.0154 172.939 17.0154C171.655 17.0154 170.502 17.3186 169.489 17.9164C168.467 18.5229 167.655 19.3892 167.052 20.5155C166.441 21.6418 166.135 22.924 166.135 24.3535V37.5655H160.754Z'
    />
    <path
      className='fill-foreground'
      d='M151.118 30.4007C150.577 31.1631 149.843 31.8215 148.917 32.3673C147.729 33.0691 146.279 33.4243 144.567 33.4243C143.318 33.4243 142.147 33.1211 141.064 32.5146C139.981 31.9168 139.081 31.0851 138.374 30.0455C137.666 28.9972 137.23 27.8449 137.064 26.5627H157.556V25.0985C157.556 22.7507 156.997 20.5848 155.879 18.6095C154.761 16.6342 153.215 15.0834 151.241 13.9571C149.267 12.8308 147.039 12.2677 144.576 12.2677C142.113 12.2677 139.937 12.8308 137.963 13.9571C135.989 15.0834 134.426 16.6428 133.273 18.6355C132.119 20.6281 131.543 22.8287 131.543 25.2458C131.543 27.663 132.119 29.8636 133.273 31.8302C134.426 33.8055 135.989 35.3563 137.963 36.4826C139.937 37.6088 142.139 38.172 144.576 38.172C147.904 38.172 150.629 37.3576 152.752 35.7288C154.674 34.2473 156.063 32.4713 156.919 30.4007H151.127H151.118ZM138.592 19.909C139.247 19.0253 140.103 18.3236 141.134 17.8038C142.174 17.284 143.318 17.0154 144.567 17.0154C145.816 17.0154 147.013 17.2753 148.052 17.8038C149.092 18.3236 149.93 19.0253 150.568 19.909C151.215 20.7927 151.616 21.7544 151.774 22.8027H137.203C137.465 21.7544 137.928 20.7927 138.584 19.909H138.592Z'
    />
  </svg>
);

export default Logo;
