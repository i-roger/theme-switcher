import React, { useContext } from "react";
import Switch from 'react-switch';

import { Container } from './styles'
import { ThemeContext } from "styled-components";

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { title } = useContext(ThemeContext)

    return(
        <Container>
            Theme Switcher
            <Switch //Botão para trocar TEMA
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor="#929292"
            onColor="#30db5b"
            />
        </Container>
    )
}

export default Header;