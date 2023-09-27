import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { useTranslation } from "react-i18next";

export default function ChangeLang() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //   изменение языка
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  //
  return (
    <div>
      <Button
        style={{ color: "white" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}>
        {t("text")}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <MenuItem
          onClick={(() => changeLanguage("kg"), handleClose)}
          className="lang-kg">
          Кыргыз тил
        </MenuItem>
        <MenuItem
          className="lang-ru"
          onClick={(() => changeLanguage("ru"), handleClose)}>
          Русский язык
        </MenuItem>
        <MenuItem
          className="lang-en"
          onClick={(() => changeLanguage("en"), handleClose)}>
          English
        </MenuItem>
      </Menu>
    </div>
  );
}
