import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/global.scss';
import './header.scss';

import {
  DefaultMobileNavIcon,
  OpenMobileNavIcon,
  MobileLogo,
  badgingLogo,
  badgingLogoMobile,
  GetStartedArrrow,
} from '../../assets/images';
import { useMediaQuery } from 'react-responsive';
import ActiveNav from '../ActiveNav/ActiveNav';
import { Home } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [navbarOpen, setNavbarOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 650 });
  const { pathname } = useLocation();

  return (
    <header>
      <nav className="container">
        <Link to="/" className="active">
          <img
            src={isMobile ? badgingLogoMobile : badgingLogo}
            className="logo"
            alt="all-in-chaoss-logo"
            // width={250}
            // srcSet={`${MobileLogo} 1200w`}
          />
        </Link>
        <ul className="web">
          <Link to="/" className="nav-link nav-web">
            {pathname === '/' ? <ActiveNav pathname={`Home`} /> : 'Home'}
          </Link>
          <Link to="/about" className="nav-link nav-web">
            {pathname === '/about' ? (
              <ActiveNav pathname={`AboutDEIBadging`} />
            ) : (
              'AboutDEIBadging'
            )}
          </Link>
          <Link to="/projects" className="nav-link nav-web">
            {pathname === '/projects' ? (
              <ActiveNav pathname={`Projects`} />
            ) : (
              'Projects'
            )}
          </Link>
        </ul>
        <Link className="get-started" to="/badge">
          {/* {' '} */}
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            style={{ marginLeft: '20px' }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.182 5.30313L14.485 3.60608L12.788 5.30311L12.7879 5.30302L14.4849 3.606L12.7878 1.90895L12.7876 1.90917L11.0906 0.212195L9.39359 1.90924L11.0906 3.60629L11.0909 3.60608L12.7878 5.30302L11.0911 6.99977L9.39427 5.30299L7.69722 7.00004L9.39427 8.69709L11.0911 7.00031L12.7878 8.69709L14.4846 7.00031L14.4847 7.00045L12.7879 8.69725L14.485 10.3943L16.182 8.69725L16.1816 8.69684L17.8784 7.00004L16.1818 5.30339L16.182 5.30313ZM5.99958 5.30302L7.69663 7.00007L5.99958 8.69712L4.30287 7.00041L2.60616 8.69712L0.909108 7.00007L2.60616 5.30302L4.30287 6.99973L5.99958 5.30302ZM12.7878 8.6974L14.4849 10.3945L12.7878 12.0915L12.7876 12.0912L11.0906 13.7882L9.39359 12.0911L11.0906 10.3941L11.0909 10.3943L12.7878 8.6974Z"
              fill="#06F395"
            />
          </svg>
          {/* <img src={GetStartedArrrow} width={200} height={200} alt='2jekl' /> */}
        </Link>

        <img
          onClick={() => setNavbarOpen((prev) => !prev)}
          src={navbarOpen ? OpenMobileNavIcon : DefaultMobileNavIcon}
          alt="open"
          className="mobileNav"
          // className={`mobileNav ${navbarOpen ? 'toggleDesctiptionButton' : ''}`}
        />
      </nav>
      {navbarOpen ? (
        <div className="mobileNavLinks">
          <ul className="mobile">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About DEI Badging
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </ul>
          <Link className="get-started-mobile" to="/badge">
            {' '}
            Get Started
          </Link>
        </div>
      ) : (
        ''
      )}
    </header>
  );
};

export default Header;
