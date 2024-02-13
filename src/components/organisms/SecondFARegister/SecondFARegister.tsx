import type { FC } from 'react';
import React from 'react';

import { Mfa } from '@/components/organisms/Mfa';

import { userEmail } from '../../../utils/constant';
import { getLocalStorage } from '../../../utils/local-storage';

export const SecondFARegister: FC = () => {
  const localEmail = getLocalStorage(userEmail);
  const emailParts = localEmail.split('@');
  const hiddenEmail = `${emailParts[0]?.replace(
    emailParts[0]?.slice(0, Math.max(0, emailParts[0].length - 4)),
    '*******'
  )}@${emailParts[1]}`;
  const title = 'Setup 2FA!';
  const buttonText = 'Setup 2FA';
  const subtitle = 'An email with a 6 digit code has been sent to your email';
  // const servicePath = 'verify-code';

  return (
    <div className="container-flex flex-column items-center gap-3 h-100 w-100">
      <Mfa
        title={title}
        subTitle={subtitle}
        buttonText={buttonText}
        // receptorCode={localEmail}
        labelData={hiddenEmail}
        emailAllow={false}
        navigateTo={'/successProcess'}
        backRoute={'/login'}
        servicePath={'/registerCode'}
      />
    </div>
  );
};
