import styled from 'styled-components';
import logo from '../../assets/logogreen.svg';
import { useState } from 'react';

// Фиксированная шапка с логотипом и навигацией
const HeaderContainer = styled.header`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 3px solid #3cb371;
`;

// Контейнер для контента шапки
const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  position: relative;
  @media (max-width: 768px) {
    height: 56px;
    padding: 0 8px;
  }
`;

// Центрированный логотип
const CenterLogo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
`;

// Картинка логотипа
const LogoImage = styled.img`
  height: 44px;
  width: auto;
  @media (max-width: 768px) {
    height: 32px;
  }
`;

// const Logo = styled.div`
//     font-size: 1.5rem;
//     font-weight: bold;
//     color: #333;
// `;

// Навигация (меню)
const Nav = styled.nav<{ open?: boolean }>`
  display: flex;
  gap: 2rem;
  @media (max-width: 900px) {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    position: fixed;
    top: 56px;
    right: 0;
    background: #fff;
    flex-direction: column;
    width: 180px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    padding: 1rem 0;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.2s;
    z-index: 2000;
  }
`;

// Ссылка в меню
const NavLink = styled.a`
  color: #222;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  &:hover {
    color: #3cb371;
    background: #f2fdf6;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.7rem 1.5rem;
    margin: 0.2rem 0;
  }
`;

// Кнопка бургер-меню для мобильных
const Burger = styled.button`
  display: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2100;
    padding: 8px;
  }
  span {
    display: block;
    width: 28px;
    height: 4px;
    margin: 5px 0;
    background: #3cb371;
    border-radius: 2px;
    transition: 0.3s;
  }
`;

/**
 * Компонент Header
 * Фиксированная шапка с логотипом по центру и навигацией
 * На мобильных — бургер-меню
 */
export const Header = () => {
  // Состояние для открытия/закрытия меню на мобильных
  const [open, setOpen] = useState(false);
  return (
    <HeaderContainer>
      <HeaderContent>
        {/* Логотип по центру */}
        <CenterLogo>
          <LogoImage src={logo} alt="Alephtrade Logo" />
        </CenterLogo>
        {/* Навигация */}
        <Nav open={open}>
          <NavLink href="/">Главная</NavLink>
          {/* <NavLink href="/files">Файлы</NavLink> */}
          {/* <NavLink href="/about">О нас</NavLink> */}
        </Nav>
        {/* Кнопка бургер-меню */}
        <Burger onClick={() => setOpen((o) => !o)} aria-label="Открыть меню">
          <span />
          <span />
          <span />
        </Burger>
      </HeaderContent>
    </HeaderContainer>
  );
};
