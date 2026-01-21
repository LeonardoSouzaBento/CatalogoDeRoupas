import { Button } from '@/components/ui/button';
import { ColorDisplayProps } from './types';

export function ColorDisplay({ color, onCapture }: ColorDisplayProps) {
  return (
    <div className="mt-4 flex items-center gap-4">
      <Button onClick={onCapture ? onCapture : () => {}}>Capturar cor</Button>
      <div className="flex items-center gap-2">
        <div
          className="w-12 h-12 rounded border-2 border-gray-300"
          style={{ backgroundColor: color }}
        />
        <span className="font-mono text-sm font-semibold">{color}</span>
      </div>
    </div>
  );
}
