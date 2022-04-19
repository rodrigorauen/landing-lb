import styled from "styled-components";

export const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100vw;
    height: 180px;
    position: fixed;
    padding: 5px;
    border-bottom 2px solid ${props => props.color}
`;
export const Nav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const Icon = styled.button`
    width: 80px;
    height: 80px;
    border: none;
    border-radius: 50px;
    background-color: ${props => props.bgcolor};
    :hover{
        transition: 0.8s;
        background-color: lightblue;
    }
`;
export const Logo = styled.img`
    width: 150px;
    height: 150px;
`;
export const TitleNav = styled.h2`
    color: blue;
    text-align: center;
`;