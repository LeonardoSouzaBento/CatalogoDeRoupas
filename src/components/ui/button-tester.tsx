import * as React from 'react';
import { Button } from './button';
import { ButtonVariants } from './button';

const buttons: ButtonVariants['variant'][] = [
  'default',
  'outline',
  'ghost',
  'secondary',
  'destructive',
];

const disabledButtons: ButtonVariants['variant'][] = ['default', 'outline', 'ghost', 'secondary'];

export const ButtonTester = () => {
  return (
    <div
      className={`flex flex-col gap-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-2
      [&>div>div]:h-auto [&>div>div]:flex [&>div>div]:flex-wrap [&>div>div]:items-center [&>div>div]:gap-3`}>
      <div>
        <p>Padrão</p>
        <div>
          {buttons.map((button) => (
            <Button key={button} variant={button as ButtonVariants['variant']}>
              {button}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <p>Active</p>
        <div>
          {buttons.map((button) => (
            <Button key={button} variant={button as ButtonVariants['variant']} data-active>
              {button}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <p>Hover</p>
        <div>
          {buttons.map((button) => (
            <Button key={button} variant={button as ButtonVariants['variant']} data-hover>
              {button}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <p>Desabiitado</p>
        <div>
          {disabledButtons.map((button) => (
            <Button key={button} variant={button as ButtonVariants['variant']} disabled={true}>
              {button}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <p>Focus</p>
        <div>
          {buttons.map((button) => (
            <Button key={button} variant={button as ButtonVariants['variant']} data-focus>
              {button}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
