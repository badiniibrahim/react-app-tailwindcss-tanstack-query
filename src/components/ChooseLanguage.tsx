import { FC } from 'react';

import { useTranslation } from 'react-i18next';

type Props = {
  code: string;
  label: string;
  img: string;
};

const ChooseLanguage: FC<Props> = ({ label, code, img }) => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div
      className="w-[25px] h-[25px] cursor-pointer"
      onClick={() => {
        handleChangeLanguage(code);
      }}
    >
      <img src={img} alt={label} className="underline" />
    </div>
  );
};

export default ChooseLanguage;
