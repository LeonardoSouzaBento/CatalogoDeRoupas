'use client';
import { Avatar, AvatarFallback, AvatarImage, MuiIcon } from '@/components/ui';
import { useState } from 'react';

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const css = {
  container: `max-h-40 overflow-y-scroll border rounded-lg p-4`,
  avatar: `size-14 shrink-0 relative bg-linear-to-br from-theme-50 
  to-theme-100/75 rounded-full flex-center`,
  img: `object-cover size-full`,
};

const UsersGrid = () => {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const selectedClasses = (item: number) =>
    selectedUser === item ? 'outline-solid outline-3 outline-selected-300' : '';

  return (
    <div className={`${css.container}`}>
      <div className={`flex flex-wrap gap-4`}>
        {array.map((item) => (
          <Avatar
            key={item}
            className={`${css.avatar} ${selectedClasses(item)}`}
            onClick={() => setSelectedUser(item)}>
            <AvatarImage src="/shop/" className={`${css.img}`} />
            <AvatarFallback className="flex-center">
              <MuiIcon icon="person" fill size="xl" className={`text-primary-400`} />
              <p className="text-muted-foreground text-xs">US</p>
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
    </div>
  );
};

export { UsersGrid };
