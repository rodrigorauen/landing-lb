import React from "react";
import { Nav, DivHeader, Icon, Logo, TitleNav } from "./header-style";
import { FiMenu } from "react-icons/fi";

export default function Header(props){
    let iconBgColor = 'white';
 
    let srcImg =  'https://cdn.logo.com/hotlink-ok/logo-social.png';

    return(
        <DivHeader color={props.color}>
            <Nav>
                <Icon bgcolor={iconBgColor}>
                    <FiMenu color={props.color} size={40}/>
                </Icon>
                <TitleNav>{props.nome}</TitleNav>
                <Logo src={props.srcImg}/>
            </Nav>
        </DivHeader>
    );
};