import type { StateSetter } from '@/types/types';

export function setReducedHeight(
  ref: React.RefObject<HTMLDivElement | null>,
  setter: StateSetter<string | null>,
  paddingBottom: number = 10,
) {
  if (ref.current) {
    const height = ref.current.offsetHeight;
    setter(paddingBottom + height + 'px');
  }
}
