import React from "react";
import { useI18n } from "../../i18n/I18nContext";
import { openInstagram } from "../../utils";
import InstagramAppIcon from "../InstagramAppIcon/InstagramAppIcon";

/**
 * Botão flutuante do Instagram que fica fixo na tela
 * Aparece em todas as páginas para contato rápido
 */
const InstagramAppFloat: React.FC = () => {
  const { t } = useI18n();

  const handleClick = () => {
    openInstagram();
  };

  return (
    <button
      className="Instagram-float"
      onClick={handleClick}
      type="button"
      title={t.footer.followInstagram}
      aria-label={t.accessibility.openInstagram}
    >
      <InstagramAppIcon size={30} />
    </button>
  );
};

export default InstagramAppFloat;
