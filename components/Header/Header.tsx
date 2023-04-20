import styles from "./Header.module.css";
import Cloud from "@../../public/cloud.svg";
import Image from "next/image";
import CloseIcon from "@rsuite/icons/Close";
import SearchIcon from "@rsuite/icons/Search";
import React, { ReactElement, SetStateAction } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Dropdown, IconButton, Input, InputGroup } from "rsuite";
import { Righteous } from "next/font/google";

const style = {
  height: "2.25rem",
  maxWidth: "20rem",
};

interface HeaderProps {
  toggletheme: (value: boolean) => void;
  searchInput?: ReactElement;
  dropdonw: string[];
  call: (inputValue: string) => void;
  handleDeleteCity: (city: string) => void;
}
export default function Card({
  toggletheme,
  dropdonw,
  call,
  handleDeleteCity,
}: HeaderProps) {
  const [isDarkMode, setDarkMode] = React.useState(false);
  const [inputCityName, setInputCityName] = React.useState("");

  const toggleDarkMode = (checked: boolean) => {
    toggletheme(checked);
    setDarkMode(checked);
  };

  const handleInputChange = (cityName: string) => {
    setInputCityName(cityName);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h5>Weather App </h5>
        <Image src={Cloud} alt="Imagem" />
      </div>
      <InputGroup inside style={style}>
        <Input
          placeholder="Search a city..."
          value={inputCityName}
          onChange={(e) => handleInputChange(e)}
        />
        <InputGroup.Button onClick={() => call(inputCityName)}>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
      <div className={styles.box}>
        <Dropdown title="Favorites" activeKey="e-2">
          {dropdonw.map((item) => {
            return (
              <Dropdown.Item
                key={item}
                eventKey="b"
                icon={
                  <IconButton
                    icon={<CloseIcon />}
                    placement="right"
                    onClick={() => handleDeleteCity(item)}
                  />
                }
                onClick={() => call(item)}
              >
                {item}
              </Dropdown.Item>
            );
          })}
        </Dropdown>
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={20}
          color="#fff"
        />
      </div>
    </header>
  );
}
