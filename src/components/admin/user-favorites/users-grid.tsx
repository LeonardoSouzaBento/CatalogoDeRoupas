'use client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  CardHeader,
  CardTitle,
  Icon,
  Input,
  MuiIcon,
} from '@/components/ui';
import { Search } from 'lucide-react';
import { useState } from 'react';

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const css = {
  container: `flex flex-col relative`,
  wrapper: `max-h-40 flex flex-wrap gap-4 overflow-y-scroll p-0.5 pb-4 rounded-lg relative`,
  avatar: `size-14 shrink-0 relative bg-primary-50 rounded-full flex-center`,
  img: `object-cover size-full`,
};

const UsersGrid = () => {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const selectedClasses = (item: number) =>
    selectedUser === item
      ? `outline-solid outline-2 outline-selected-300 bg-selected-300/20 text-selected-800`
      : '';

  return (
    <div className={`${css.container}`}>
      <CardHeader>
        <CardTitle className="text-theme-700">
          <MuiIcon icon="group" fill size="h5" />
          <h5>Usuários da loja</h5>
        </CardTitle>
      </CardHeader>
      <Button
        asChild
        variant={'ghost'}
        className={`mb-4 rounded-full justify-start pr-0 font-semibold text-selected-950`}>
        <div>
          <Input className="absolute inset-0 z-2 border-none rounded-full" />
          Fulano de tal
          <Button
            variant={'secondary'}
            size={'icon'}
            className="rounded-full absolute bottom-0.75 right-0.75">
            <Icon LucideIcon={Search} size="lg" />
          </Button>
        </div>
      </Button>
      <div className={css.wrapper}>
        {array.map((item) => (
          <Avatar
            key={item}
            className={`${css.avatar} ${selectedClasses(item)}`}
            onClick={() => setSelectedUser(item)}>
            <AvatarImage src="/shop/" className={`${css.img}`} />
            <AvatarFallback className="flex-center">
              <p
                className={`relative z-2 
                ${selectedUser === item ? 'text-selected-800' : 'text-muted-foreground'}`}>
                MS
              </p>
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
      <div
        className={`h-4 w-full absolute bottom-0 left-0
        bg-linear-to-t from-primary-700/2 to-transparent`}
      />
    </div>
  );
};

export { UsersGrid };
