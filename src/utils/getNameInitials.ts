export function getNameInitials(name: string): string {
    const parts = name.trim().split(/\s+/);

    if (parts.length === 0) return '';

    const firstInitial = parts[0][0];

    if (parts.length >= 3) {
      const thirdInitial = parts[2][0];
      return (firstInitial + thirdInitial).toUpperCase();
    }
    return firstInitial.toUpperCase();
  }