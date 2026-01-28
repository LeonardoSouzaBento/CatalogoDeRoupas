'use client';
import { Avatar, AvatarFallback, AvatarImage, Button, Card, Icon } from '@/components/ui';
import type { UserData } from '@/types/types';
import { PenLine } from 'lucide-react';
import { useState } from 'react';
import { InputNameEmail } from './input-name-email';

const css = {
  wrapper: `w-full h-16 min-[430px]:h-auto flex gap-4 relative rounded-lg bg-light-bg`,
  avatar: `size-[3.6em] shrink-0 relative bg-linear-to-br from-primary-50 to-primary-100 rounded-full`,
  img: 'border-none outline-none',
  wrapperInfo: 'max-[430px]:hidden min-h-16 w-full flex flex-col justify-center gap-2',
  name: `block break-words capitalize leading-none text-theme-700`,
  email: 'block leading-none break-all text-muted-foreground large-text font-medium',
};

export const UserCard = ({ userData }: { userData: UserData }) => {
  const [seeEditMode, setSeeEditMode] = useState<boolean>(false);

  return (
    <Card data-no-header>
      {!seeEditMode ? (
        <div className="h-max flex flex-col gap-4">
          <div className={`${css.wrapper} justify-between`}>
            <Avatar className={`${css.avatar}`}>
              <AvatarImage src="/shop/" className={`${css.img}`} />
              <AvatarFallback>
                <p className="font-medium text-muted-foreground large-text">
                  {userData.name?.slice(0, 2).toUpperCase()}
                </p>
              </AvatarFallback>
            </Avatar>
            <div className={`${css.wrapperInfo}`}>
              <h3 className={`${css.name}`}>{userData.name}</h3>
              <p className={`${css.email}`}>Email: {userData.email}</p>
            </div>
            {/* para mobile */}
            <div className={`md-sm:hidden h-16 flex items-center justify-center`}>
              <h3 className={`${css.name}`}>{userData.name}</h3>
            </div>
          </div>
          {/* para mobile */}
          <p className={`${css.email} md-sm:hidden`}>Email: {userData.email}</p>
          <Button
            variant={'ghost'}
            onClick={() => {
              setSeeEditMode(true);
            }}>
            <Icon LucideIcon={PenLine} size="sm" />
            Editar meus dados
          </Button>
        </div>
      ) : (
        <InputNameEmail setSeeEditMode={setSeeEditMode} />
      )}
    </Card>
  );
};
