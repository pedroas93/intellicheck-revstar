/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type FC, type ReactNode } from 'react';
// import "@/assets/images/png/LogoGold_2x.png";
// import Logo from '@';
// import Profile from '/src/assets/Images/png/Profile.png';
// import { Link, useNavigate } from '@tanstack/router';
// import React from 'react';
// import { AdminRoutes } from '../../../features/admin/routes/AdminRouter';
// import { Button } from '../../ui/Button/Button';

type Props = {
  children?: ReactNode;
};

export const DashboardLayout: FC<Props> = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient relative containerDashboard">
      {/* <div className="flex items-center justify-between px-12 py-4 wrapper-top-bar"> */}
      <div>{/* <img src={Logo} alt="Logo" /> */}</div>
      {/* <div>
          <ul className="flex flex-direction flex-col space-x-2 ul-dashboard">
            {AdminRoutes.map(
              (route: { path: string; page: FC; layout: FC<Props>; name: string }) =>
                route.name && (
                  <Link
                    key={route.path}
                    to={route.path}
                    // className="link-text font-inter font-semibold px-4 py-2 "
                    activeProps={{
                      style: {
                        backgroundColor: 'white',
                        marginRight: '12px',
                        borderRadius: '4px'
                      }
                    }}
                    inactiveProps={{
                      style: { marginRight: '12px' }
                    }}
                    params={{}}
                    search={{}}
                  >
                    <img src={route.image} className="menu-icon" />
                  </Link>
                )
            )}
          </ul>
        </div>
        <div className="rightSidebar">
          <Button className="scanButton">Scan</Button> */}
      {/* <div className="centeredContent">
            <img className="iconProfile" src={'/src/assets/Images/png/Profile.png'} alt="Logo" />
          </div> */}
      {/* </div>
      </div>
      <div className="flex m-2 h-screen overflow-y-auto">{children}</div> */}
    </div>
  );
};
