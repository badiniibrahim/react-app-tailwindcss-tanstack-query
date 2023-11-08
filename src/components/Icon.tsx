import { FC } from 'react';

import { icons } from 'lucide-react';

type IconName = keyof typeof icons;

type Props = {
  name: IconName;
  color: string;
  size?: number;
  onClick: () => void;
};
const Icon: FC<Props> = ({ name, color, size = 30, onClick }) => {
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      data-testid="icon"
      color={color}
      size={size}
      onClick={onClick}
      className="cursor-pointer"
    />
  );
};

export default Icon;
