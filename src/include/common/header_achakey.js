/* eslint-disable no-script-url */
import React, { useState } from "react";
import {StyledLink } from "./style";
  
const Header_achakey = (props) => {
    
    const [language,setLanguage] = useState(props.language);
    const setLanguages = (e,language) => {
        props.toggle(language);
        setLanguage(language);
        e.preventDefault();
    }
   
    var currenPage =  window.location.pathname;
    if(currenPage === '/'){
        currenPage='main';
    }else{
        currenPage = currenPage;
    }
    if(language==='ko'){
        return (
            <header id="header" data-language={language}>
                <div className="inner">
                    <h1>
                        <StyledLink data-current={currenPage} to="/" data-href="main" id="main-link" className="current-page">
                                <span className="blind">ACHAKEY</span>
                        </StyledLink>
                    </h1>
    
                    <button type="button" className="menu-open for-mobile">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40">
    
                        <g id="Menu" transform="translate(-305 -94)">
                            <path id="White" className="svg-menu" d="M315,122v-2h20v2H315z M315,115v-2h20v2H315z M315,108v-2h20v2H315z"/>
                        </g>
                        </svg>
                    </button>
                    <div id="topMenu">
                        <div className="gnb-wrap">
                            <ul className="gnb">
                                <li>
                                    <StyledLink data-current={currenPage} className="current-page" data-href="main" to="/">
                                        <span>아차키</span>
                                    </StyledLink>
                                </li>
                                <li>
                                    <StyledLink data-current={currenPage} className="current-page" to="/autoq" data-href="autoq">
                                        <span>오토큐앱키</span>
                                    </StyledLink>
                                </li>
                                <li>
                                    <StyledLink data-current={currenPage} className="current-page" to="/customer" data-href="customer">
                                        <span>고객센터</span>
                                    </StyledLink>
                                </li>
                            </ul>
                        </div>
                        <div className="language-area">
                            <a href="#" onClick={e => e.preventDefault()}></a>
                            <ul>
                                <li><a href="#" className="language-btn active" data-language="ko" data-href={currenPage} onClick={(e)=>setLanguages(e,'ko')}><span>KR</span></a></li>
                                <li><a href="#" className="language-btn" data-language="en" data-href={currenPage} onClick={(e)=>setLanguages(e,'en')}><span>EN</span></a></li>
                            </ul>
                            
                        </div>
                    </div>
    
                    <div id="mobileMenu">
                        <div className="menu-list">
                            <button type="button" className="menu-close">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40">
                                <path className="svg-close01" d="M0,0h40v40H0V0z"/>
                                <path className="svg-close02" d="M20,21.4l-6.4,6.4l-1.4-1.4l6.4-6.4l-6.4-6.4l1.4-1.4l6.4,6.4l6.4-6.4l1.4,1.4L21.4,20l6.4,6.4l-1.4,1.4 L20,21.4z"/>
                                </svg>
                            </button>
                            <ul className="gnb">
                                <li>
                                    <StyledLink data-href="main" to="/">
                                        <span>아차키</span>
                                    </StyledLink>
                                </li>
                                <li>
                                    <StyledLink to="/autoq" data-href="autoq">
                                        <span>오토큐앱키</span>
                                    </StyledLink>
                                </li>
                                <li>
                                    <StyledLink to="/customer" data-href="customer">
                                        <span>고객센터</span>
                                    </StyledLink>
                                </li>
                            </ul>
                            <ul className="m-util">
                                <li className="active"><a href="#" className="language-btn active" data-language="ko" data-href={currenPage} onClick={(e)=>setLanguages(e,'ko')}><span>KR</span></a></li>
                                <li><a href="#" className="language-btn" data-language="en" data-href={currenPage} onClick={(e)=>setLanguages(e,'en')}><span>EN</span></a></li>
                            </ul>
                        </div>
                    </div>
    
    
                    <button type="button" className="btn-nav"><span className="blind">네비게이션 버튼</span></button>
                    <div className="nav-wrap">
                        <span className="bg-nav"></span>
                        <ul className="nav">
                            {/* <li><a href="#" onClick={e => e.preventDefault()}><span>아차키 설치<strong>가능 조회</strong></span></a></li>
                            <li><a href="#" onClick={e => e.preventDefault()}><span>아차키 앱<strong>사용안내</strong></span></a></li>
                            <li><a href="#" onClick={e => e.preventDefault()}><span>아차키<strong>구매하기</strong></span></a></li> */}
                        </ul>
                    </div>
                </div>
            </header>
        );
    }else {
        return (
            <header id="header" data-language={language}>
                <div className="inner">
                    <h1>
                        <StyledLink data-current={currenPage} to="/" data-href="main" id="main-link" className="current-page">
                                <span className="blind">ACHAKEY</span>
                        </StyledLink>
                    </h1>
    
                    <button type="button" className="menu-open for-mobile">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40">
    
                        <g id="Menu" transform="translate(-305 -94)">
                            <path id="White" className="svg-menu" d="M315,122v-2h20v2H315z M315,115v-2h20v2H315z M315,108v-2h20v2H315z"/>
                        </g>
                        </svg>
                    </button>
                    <div id="topMenu">
                        <div className="gnb-wrap">
                            <ul className="gnb">
                                <li>
                                    <StyledLink data-current={currenPage} className="current-page" data-href="main" to="/">
                                        <span>Achakey</span>
                                    </StyledLink>
                                </li>
                                <li>
                                    <StyledLink data-current={currenPage} className="current-page" to="/autoq" data-href="autoq">
                                        <span>Appkey</span>
                                    </StyledLink>
                                </li>
                                <li>
                                    <StyledLink data-current={currenPage} className="current-page" to="/customer" data-href="customer">
                                        <span>Supports</span>
                                    </StyledLink>
                                </li>
                            </ul>
                        </div>
                        <div className="language-area">
                            <a href="#" onClick={e => e.preventDefault()}></a>
                            <ul>
                                <li><a href="#" className="language-btn" data-language="en" data-href={currenPage} onClick={(e)=>setLanguages(e,'en')}><span>EN</span></a></li>
                                <li><a href="#" className="language-btn active" data-language="ko" data-href={currenPage} onClick={(e)=>setLanguages(e,'ko')}><span>KR</span></a></li>
                            </ul>
                        </div>
                    </div>
    
                    <div id="mobileMenu">
                        <div className="menu-list">
                            <button type="button" className="menu-close">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40">
                                <path className="svg-close01" d="M0,0h40v40H0V0z"/>
                                <path className="svg-close02" d="M20,21.4l-6.4,6.4l-1.4-1.4l6.4-6.4l-6.4-6.4l1.4-1.4l6.4,6.4l6.4-6.4l1.4,1.4L21.4,20l6.4,6.4l-1.4,1.4 L20,21.4z"/>
                                </svg>
                            </button>
                            <ul className="gnb">
                                <li>
                                    <StyledLink data-href="main" to="/">
                                        <span>Achakey</span>
                                    </StyledLink>
                                </li>
                                <li>
                                    <StyledLink to="/autoq" data-href="autoq">
                                        <span>Appkey</span>
                                    </StyledLink>
                                </li>
                                <li>
                                    <StyledLink to="/customer" data-href="customer">
                                        <span>Supports</span>
                                    </StyledLink>
                                </li>
                            </ul>
                            <ul className="m-util">
                                <li className="active"><a href="#" className="language-btn" data-language="en" data-href={currenPage} onClick={(e)=>setLanguages(e,'en')}><span>EN</span></a></li>
                                <li><a href="#" className="language-btn active" data-language="ko" data-href={currenPage} onClick={(e)=>setLanguages(e,'ko')}><span>KR</span></a></li>                                
                            </ul>
                        </div>
                    </div>
    
    
                    <button type="button" className="btn-nav"><span className="blind">네비게이션 버튼</span></button>
                    <div className="nav-wrap">
                        <span className="bg-nav"></span>
                        <ul className="nav">
                            {/* <li><a href="#" onClick={e => e.preventDefault()}><span>아차키 설치<strong>가능 조회</strong></span></a></li>
                            <li><a href="#" onClick={e => e.preventDefault()}><span>아차키 앱<strong>사용안내</strong></span></a></li>
                            <li><a href="#" onClick={e => e.preventDefault()}><span>아차키<strong>구매하기</strong></span></a></li> */}
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
    
};

export default Header_achakey;
