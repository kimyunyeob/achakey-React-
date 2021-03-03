import React, {useState } from "react";
import AppLayout from "../components/AppLayout";
import Header_achakey from "../include/common/header_achakey";
import Tab01 from "../components/Main/Tab01";
import Tab02 from "../components/Main/Tab02";
import Tab03 from "../components/Main/Tab03";
import Tab04 from "../components/Main/Tab04";
import Tab05 from "../components/Main/Tab05";
import Tab06 from "../components/Main/Tab06";
import Tab07 from "../components/Main/Tab07";
import {StyledLink } from "../include/common/style";


const Main = (props) => {
    const [language,setLanguage] = useState(props.language);
    const [catagory,setCatagory] = useState(props.catagory);
    const [apiUrl] = useState(props.apiUrl);

    const toggle = e => {
        setLanguage(e);
        props.toggle(e);
    }
    const changeCatagory = (e,catagory) => {
        // e.preventDefault();
        setCatagory(catagory);
        props.changeCatagory(catagory);
    }
    if(language==='ko'){
        return (
            <>
            <Header_achakey language={language} toggle={e => toggle(e)}/>
            <AppLayout page="main achakey">
              <div id="fullpage" className="time-none">
                    <div id="section1" className="section home">
                        <div className="slide-text">
                            <div className="title-box">
                                <h2>BEST<br/> DIGITAL<br/> CAR KEY</h2>
                                <h3>대한민국 No.1 디지털 자동차 키 </h3>
                                <p className="text">도어 열림/잠금 및 트렁크 열림 등 기본 <br className="for-mobile"/> 기
                                능 부터 스마트폰으로<br className="for-pc"/> 가족과<br className="for-mobile"/> 친구에게 차 공유까지 한번에 !</p>
                                <button className="more-btn" type="button"><span>MORE ACHAKEY</span></button>
                            </div>
                        </div>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide slide01">
                                    <div id="object" className="object01"></div>
                                </div>
                                <div className="swiper-slide slide02">
                                    <div id="object02" className="object01"></div>
                                </div>
                                <div className="swiper-slide slide03">
                                    <div id="object03" className="object01"></div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                    <div id="section2" className="section life">
                        <div className="section-wrap">
                            <div className="title-box right">
                                <h2>
                                    <strong>차키</strong><br/>
                                    아직도 들고<br/>다니세요?
                                </h2>
                                <h3>키 없는 카 라이프가 시작됩니다.</h3>
                                <p className="text">휴대폰에 설치된 아차키 앱이 내차와 가까워지면<br className="for-mobile"/> 알아서 차문을 열어주기<br className="for-pc"/> 때문에 주차장에서<br className="for-mobile"/> 차키를 찾거나 주머니에서 키를<br className="for-mobile"/> 꺼낼 필요가 없습니다.</p>
                            </div>
                        </div>
                    </div>
                    <div id="section3" className="section share">
                        <div className="section-wrap">
                            <div className="title-box left">
                                <h2>차가 필요<br className="for-pc"/>하면<br className="for-mobile"/> <strong>아차키</strong>로<br/>
                                    나눠 타요!</h2>
                                <h3>가족과 친구에게 차를 공유할 수 있습니다.</h3>
                                <p className="text">비대면, 비접촉, 비접점 사용 환경으로 언제 어디서나<br className="for-mobile"/> 원하는 데로 안전하게 차를 공유할 수 있고, <br/>
                                내차가 모두의 차가 되는 놀라운 환경을<br className="for-mobile"/> 시작할 수 있습니다.</p>
                            </div>
                        </div>
                    </div>
                    <div id="section4" className="section use">
                        <div className="slide-text">
                            <div className="title-box right">
                                <h2>
                                    <strong>간편한 <span>준비</span></strong>쉬운 사용
                                </h2>
                                <h3>구글플레이, 애플앱스토어 아차키 앱만<br className="for-mobile"/> 다운로드 받으면 끝!</h3>
                                <p className="text">앱 마켓에서 아차키를 검색하면<br className="for-mobile"/> 앱을 다운로드 받을 수 있습니다. <br/>
                                아차키 스마트박스 패키지에 포함되어 있는<br className="for-mobile"/> QR코드를 인식하면 차량이 등록됩니다.</p>
                                <div className="download-app">
                                    <ul>
                                        <li className="google">
                                            <strong>구글 플레이</strong>
                                            <button type="buton" id="google-down" className="btn small normal">설치하기</button>
                                        </li>
                                        <li className="apple">
                                            <strong>애플 앱스토어</strong>
                                            <button type="buton" id="apple-down" className="btn small normal">설치하기</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="object04" className="object01">
                        </div>
                    </div>
                    <div id="section5" className="section buy">
                        <div className="section-wrap">
                            <div className="title-box left">
                                <h2>
                                    <strong>아차키</strong><br/>
                                    언제 어디서나<br/>
                                    만날 수 있어요!
                                </h2>
                                <h3>우수한 상품성을 인정받아<br className="for-pc"/> 전국망을 갖춘<br className="for-mobile"/> 유통채널에서 판매되고 있습니다</h3>
                            </div>
                            <div className="store-wrap">
                                <ul>
                                    <li>
                                        <h4>기아 오토큐 전용 상품 선정 판매</h4>
                                        <p>앱키로 패키징 되어 판매되고 있으며 오토큐<br className="for-mobile"/> 서비스 센터에서 주문할 수 있어요.</p>
                                        <div className="thumb-wrap">
                                            <div className="thumb"><img src="../@resource/images/common/img_store_01.png" alt=""/></div>
                                            <div className="thumb"><img src="../@resource/images/common/img_store_02.png" alt=""/></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h4>GS25 자동차 주문 상품 입점 판매</h4>
                                        <p>GS25에 방문하여 직원에게 문의하면<br className="for-mobile"/> POS에서 아차키를 주문할 수 있어요</p>
                                        <div className="thumb-wrap">
                                            <div className="thumb"><img src="../@resource/images/common/img_store_03.png" alt=""/></div>
                                            <div className="thumb"><img src="../@resource/images/common/img_store_04.png" alt=""/></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
        
                    <div id="section7" className="section last">
                        <div className="section-wrap">
                            <div className="info-cont">
                                <h3>차키 없는<br/>
                                스마트 카 라이프를<br/>
                                아차키로 시작하세요.</h3>
                                <ul className="explain">
                                    <li>
                                        <StyledLink className="footer-a" data-current="main" data-href="customer" to="/customer">
                                            <span className="title">자주묻는질문</span>
                                        </StyledLink>
                                        <p className="text">아차키에 대해 궁금한 점이 있다면 여기서 확인하세요.</p>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://smartstore.naver.com/achakey?gclid=Cj0KCQjw8rT8BRCbARIsALWiOvThvlFMWJJ5xGMEBp6FoIuhuIvlKdCUxwqiqZatf_Ex1lnVK1xmtQkaAuIDEALw_wcB">
                                            <span className="title">구매하기</span>
                                        </a>
                                        <p className="text">아차키 구매를 원하시나요?</p>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="http://211.253.27.6:8033/">
                                        <span className="title">회사소개</span>
                                        </a>
                                        <p className="text">모빌리티 전문가들이 모여 아차키를 개발했습니다.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer">
                            <h2>주식회사 튠잇</h2>
                            <div className="company-info">
                                <dl className="president">
                                    <dt>대표이사</dt>
                                    <dd>송영욱</dd>
                                </dl>
                                <dl className="registration-number">
                                    <dt>사업자등록번호</dt>
                                    <dd>603-88-01354</dd>
                                </dl>
                                <dl className="commerce-number">
                                    <dt>통신판매업신고번호</dt>
                                    <dd>제2019-성남분당A-0480</dd>
                                </dl>
                                <dl className="address">
                                    <dt>주소</dt>
                                    <dd>경기도 성남시 분당구 느티로 51번길 4-11 (정자동)</dd>
                                </dl>
                            </div>
                            <div className="contact-info">
                                <dl className="tel">
                                    <dt>대표전화</dt>
                                    <dd><a href="tel:18118136">1811 - 8136</a></dd>
                                </dl>
                                <dl className="email">
                                    <dt>문의메일</dt>
                                    <dd><a href="mailto:info@tuneit.io">info@tuneit.io</a></dd>
                                </dl>
                                <span className="copyright">Copyright (C) tuneit corp. All Rights Reserved.</span>
                            </div>
                            <div className="aside-wrap">
                                <div className="rules">
                                        <StyledLink href="rules" onClick={e => changeCatagory(e,423)} catagory={catagory} data-current="main" data-href="rules" to='/rules' className="href-rules">
                                            서비스이용약관
                                        </StyledLink>
                                        <StyledLink href="rules" onClick={e => changeCatagory(e,424)} catagory={catagory} data-current="main" data-href="rules" to='/rules' className="href-rules">
                                            위치기반서비스이용약관
                                        </StyledLink>
                                        <StyledLink href="rules" onClick={e => changeCatagory(e,425)} catagory={catagory} data-current="main" data-href="rules" to='/rules' className="href-rules">
                                            개인정보처리방침
                                        </StyledLink>
                                    
                                        <a target="_blank" rel="noopener noreferrer" href="http://211.253.27.6:8033/">회사소개</a>
                                </div>
                                <p className="notice">운영시간은 평일 오전 9시 ~ 오후 6시<br/>
                                방문설치는 예약 후 진행 가능합니다.</p>
                                <div className="sns-area">
                                    <a href="#!" onClick={e => e.preventDefault()} className="youtube" title="유튜브"></a>
                                    <a href="#!" onClick={e => e.preventDefault()} className="blog" title="블로그"></a>
                                    <a href="#!" onClick={e => e.preventDefault()} className="facebook" title="페이스북"></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </AppLayout>
            <div id="top">
                            <button type="button" className="btn-top" >
                                <span className="blind">상단으로 가기</span>
                            </button>
                        </div>
              <div id="popSearch" className="layer-popup pop-search">
            <div className="layer-wrap">
                <div className="popup-wrap">
                    <button type="button" className="pop-close">닫기</button>
                    <div className="popup-header">
                        <h1>아차키 설치 가능 차량 조회</h1>
                        <p className="text">기본적으로 차량 내에서 소지한 차키(스마트키)로 차문을 열고 닫을 수 있다면 아차키를 사용할 수 있습니다.</p>
                    </div>
                    <div className="popup-content">
                        <div className="form-wrap">
                            
                         
                                <div className="select-wrap">
                                    <span className="label">분류</span>
                            
                                    <div className="select for-pc">
                                        <div className="select-inner">
                                            <a href="#!" onClick={e => e.preventDefault()}>선택하세요</a>
                                            <ul id="pc-country">
                                                <li data-value="sort1">국산차</li>
                                                <li data-value="sort2">수입차</li>
                                            </ul>
                                        </div>
                                    </div>
                            
                                    <div className="select for-mobile">
                                        <select id="mobile-country">
                                            <option value="0">선택하세요</option>
                                            <option value="1">국산차</option>
                                            <option value="2">수입차</option>
                                        </select>
                                    </div>
                       
                                </div>
                        
                                <div className="select-wrap">
                                    <span className="label">제조사</span>
                             
                                    <div className="select for-pc">
                                        <div className="select-inner">
                                            <a href="#!" onClick={e => e.preventDefault()}>선택하세요</a>
                                            <ul id="pc-company">
                                                {/* <li data-value="company1">현대자동차</li>
                                                <li data-value="company2">기아자동차</li> */}
                                            </ul>
                                        </div>
                                    </div>
                              
                                    <div className="select for-mobile">
                                        <select id="mobile-company">
                                            {/* <option value="">선택하세요</option>
                                            <option value="">현대자동차</option>
                                            <option value="">기아자동차</option> */}
                                        </select>
                                    </div>
                            
                                </div>
                             
                                <div className="select-wrap">
                                    <span className="label">차명</span>
                         
                                    <div className="select for-pc">
                                        <div className="select-inner">
                                            <a href="#!" onClick={e => e.preventDefault()}>선택하세요</a>
                                            <ul id="pc-carName">
                                                {/* <li data-value="">싼타페 TM (2018 - 2020)</li>
                                                <li data-value="">셀토스</li>
                                                <li data-value="">K7</li>
                                                <li data-value="">스포티지</li>
                                                <li data-value="">니로</li>
                                                <li data-value="car6">카니발</li>
                                                <li data-value="car7">모하비</li>
                                                <li data-value="car8">K5</li>
                                                <li data-value="car9">레이</li>
                                                <li data-value="car10">쏘렌토</li> */}
                                            </ul>
                                        </div>
                                    </div>
                
                                    <div className="select for-mobile">
                                        <select id="mobile-carName">
                                            {/* <option value="">선택하세요</option>
                                            <option value="">싼타페 TM (2018 - 2020)</option>
                                            <option value="">셀토스</option>
                                            <option value="">K7</option>
                                            <option value="">스포티지</option>
                                            <option value="">니로</option>
                                            <option value="">카니발</option>
                                            <option value="">모하비</option>
                                            <option value="">K5</option>
                                            <option value="">레이</option>
                                            <option value="">쏘렌토</option> */}
                                        </select>
                                    </div>
                                
                                </div>
                      
                                <div className="btn-area">
                                    <button id="final-search" type="button" className="btn large normal">조회</button>
                                </div>
        
                                <div className="text-box install-y result-none">
                                    <h3>조회하신 차량은 <br className="for-mobile"/> 아차키 설치가 <strong>가능</strong>합니다!</h3>
                                    <p>제품 설치와 관련하여 추가로 궁금하신 내용이<br className="for-mobile"/> 있다면 <a href="/customer">자주 묻는 질문</a>을 확인해주세요.</p>
                                </div>
          
                                <div className="text-box install-n result-none">
                                    <h3>조회하신 차량은 <br className="for-mobile"/> 아차키 설치가 <strong>불가능</strong>합니다!</h3>
                                    <p>해당 차량에 제품 설치와 관련하여 궁금하신 내용이<br className="for-mobile"/> 있다면 <strong>고객센터(1811 - 8136)</strong>로 연락해주세요.</p>
                                </div>
            
                           
                        </div>
                        <p className="text">각각의 분류를 선택하고<br className="for-mobile"/> <strong>조회하기</strong>를 클릭하면 가능여부를<br className="for-mobile"/> 확인할 수 있습니다.</p>
                    </div>
                </div>
                <div className="bg"></div>
            </div>
        </div>
              <div id="popMenual" className="layer-popup pop-menual">
                  <div className="layer-wrap">
                      <div className="popup-wrap">
                          <button type="button" className="pop-close">닫기</button>
                          <div className="popup-header">
                              <h1>아차키 앱 사용안내</h1>
                              <p className="text">아차키 앱의 사용법이 궁금하세요? 기능 별로 사용방법을 확인할 수 있습니다.</p>
                          </div>
                          <div className="popup-content">
                              <div className="menual-wrap">
                                  <div className="direction">
                                      <button type="button" className="btn-prev">이전</button>
                                      <button type="button" className="btn-next ">다음</button>
                                  </div>
                                  <div id="ui-tabs" className="tab-wrap">
                                
                                      <ul className="tabs medium type01 for-pc">
                                            <li><a data-index="0" className="active" href="#!" onClick={e => e.preventDefault()}>회원가입</a></li>
                                            <li><a data-index="1" href="#!" onClick={e => e.preventDefault()}>로그인</a></li>
                                            <li><a data-index="2" href="#!" onClick={e => e.preventDefault()}>내차추가</a></li>
                                            <li><a data-index="3" href="#!" onClick={e => e.preventDefault()}>내차공유</a></li>
                                            <li><a data-index="4" href="#!" onClick={e => e.preventDefault()}>오토도어락</a></li>
                                            <li><a data-index="5" href="#!" onClick={e => e.preventDefault()}>수동제어</a></li>
                                            <li><a data-index="6" href="#!" onClick={e => e.preventDefault()}>발렛키</a></li>
                                      </ul>
                                  
                                      <div className="select-wrap for-mobile">
                                          <select id="select-main-mb">
                                                <option value="0">회원가입</option>
                                                <option value="1">로그인</option>
                                                <option value="2">내차추가</option>
                                                <option value="3">내차공유</option>
                                                <option value="4">오토도어락</option>
                                                <option value="5">수동제어</option>
                                                <option value="6">발렛키</option>
                                          </select>
                                      </div>
        
                                      <div className="tab-content main-tab active tab01" id="useTab01">
                                          <div className="text-wrap">
                                              <Tab07 apiUrl={apiUrl} language={language}/>
                                          </div>
                                      </div>
                              
                                      <div className="tab-content main-tab tab01" id="useTab02">
                                          <div className="text-wrap">
                                              {/* 로그인
                                              아차키는 회원 기반의 앱 서비스로 회원가입 후 차량을 등록해야 관련 기능을 사용할 수 있습니다. <br/><br/> */}
                                              <Tab01 apiUrl={apiUrl} language={language}/>
                                          </div>
                                      </div>
                                    
                                      <div className="tab-content main-tab tab02" id="useTab03">
                                          <div className="text-wrap">
                                              {/* 내차추가
                                              아차키는 회원 기반의 앱 서비스로 회원가입 후 차량을 등록해야 관련 기능을 사용할 수 있습니다. <br/><br/> */}
                                              <Tab02 apiUrl={apiUrl} language={language}/>
                                          </div>
                                      </div>
                                
                                      <div className="tab-content main-tab tab03" id="useTab04">
                                          <div className="text-wrap">
                                              {/* 내차공유
                                              아차키는 회원 기반의 앱 서비스로 회원가입 후 차량을 등록해야 관련 기능을 사용할 수 있습니다. <br/><br/> */}
        
                                              <Tab03 apiUrl={apiUrl} language={language}/>
                                          </div>
                                      </div>
                                  
                                      <div className="tab-content main-tab tab04" id="useTab05">
                                          <div className="text-wrap">
                                              {/* 오토도어락
                                              아차키는 회원 기반의 앱 서비스로 회원가입 후 차량을 등록해야 관련 기능을 사용할 수 있습니다. <br/><br/> */}
        
                                              <Tab04 apiUrl={apiUrl} language={language}/>
                                          </div>
                                      </div>
                                  
                                      <div className="tab-content main-tab tab05" id="useTab06">
                                          <div className="text-wrap">
                                              {/* 수동제어
                                              아차키는 회원 기반의 앱 서비스로 회원가입 후 차량을 등록해야 관련 기능을 사용할 수 있습니다. <br/><br/> */}
        
                                              <Tab05 apiUrl={apiUrl} language={language}/>
                                          </div>
                                      </div>
                                  
                                      <div className="tab-content main-tab tab06" id="useTab07">
                                          <div className="text-wrap">
                                              {/* 발렛키
                                              아차키는 회원 기반의 앱 서비스로 회원가입 후 차량을 등록해야 관련 기능을 사용할 수 있습니다. <br/><br/> */}
        
                                              <Tab06 apiUrl={apiUrl} language={language}/>
                                          </div>
                                      </div>
                                
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="bg"></div>
                  </div>
              </div>
            </>
          );
    }else{
        return (
            <>
            <Header_achakey language={language} toggle={e => toggle(e)}/>
            <AppLayout page="main achakey">
              <div id="fullpage" className="time-none">
                    <div id="section1" className="section home">
                        <div className="slide-text">
                            <div className="title-box">
                                <h2>BEST<br/> DIGITAL<br/> CAR KEY</h2>
                                <h3>Achakey - No.1 Digital Car Key </h3>
                                <p className="text">From basic functions such as door Locking/Unlocking and trunk unlocking<br/>to car sharing to family and friends on your smartphone.</p>
                                <button className="more-btn" type="button"><span>MORE ACHAKEY</span></button>
                            </div>
                        </div>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide slide01">
                                    <div id="object" className="object01"></div>
                                </div>
                                <div className="swiper-slide slide02">
                                    <div id="object02" className="object01"></div>
                                </div>
                                <div className="swiper-slide slide03">
                                    <div id="object03" className="object01"></div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                    <div id="section2" className="section life">
                        <div className="section-wrap">
                            <div className="title-box right">
                                <h2>
                                    <strong>Car Keys,</strong><br/>
                                    do you still<br className="for-pc"/>carry it around?
                                </h2>
                                <h3>a keyless car life starts.</h3>
                                <p className="text">When the smartphone running the Achaki app gets closer to my car, <br className="for-pc"/>it opens the car door on its own.</p>
                            </div>
                        </div>
                    </div>
                    <div id="section3" className="section share">
                        <div className="section-wrap">
                            <div className="title-box left">
                                <h2>If you need a car, <br className="for-pc"/>share it with <br className="for-pc"/><strong>Achakey</strong></h2>
                                <h3>You can share your car with your family <br className="for-pc"/>and friends using Achakey.</h3>
                                <p className="text">Non-face-to-face, non-contact environments allow you to securely share your car anytime, anywhere. <br className="for-pc"/>
                                You can start an amazing environment where my car becomes everyone's car.</p>
                            </div>
                        </div>
                    </div>
                    <div id="section4" className="section use">
                        <div className="slide-text">
                            <div className="title-box right">
                                <h2>
                                    <strong>Easy <span>to prepare,</span></strong>easy to use
                                </h2>
                                <h3>Google Play, Apple App Store, <br className="for-pc"/>just download the Achakey app and you're ready.</h3>
                                <p className="text">You can download apps by searching for Achakey in the App Store.<br className="for-pc"/>
                                If the app recognizes the QR card included in the Achakey package, the vehicle will be registered.</p>
                                <div className="download-app">
                                    <ul>
                                        <li className="google">
                                            <strong>Google Play</strong>
                                            <button type="buton" id="google-down" className="btn small normal">download</button>
                                        </li>
                                        <li className="apple">
                                            <strong>Apple App Store</strong>
                                            <button type="buton" id="apple-down" className="btn small normal">download</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="object04" className="object01">
                        </div>
                    </div>
                    <div id="section5" className="section buy">
                        <div className="section-wrap">
                            <div className="title-box left">
                                <h2>
                                    You can meet
                                    <strong> Achakey </strong><br className="for-pc"/>
                                    anytime, anywhere!
                                </h2>
                                <h3>Achakey is recognized for its excellent function <br className="for-pc"/>and is sold on a nationwide distribution channel.</h3>
                            </div>
                            <div className="store-wrap">
                                <ul>
                                    <li>
                                        <h4>Kia AutoQ Brand Product Selection</h4>
                                        <p>It's packaged and sold in 'The Driving APP KEY', <br/>and you can order it at the KIA AutoQ service center.</p>
                                        <div className="thumb-wrap">
                                            <div className="thumb"><img src="../@resource/images/common/img_store_01.png" alt=""/></div>
                                            <div className="thumb"><img src="../@resource/images/common/img_store_02.png" alt=""/></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h4>GS25 Car Ordering Goods</h4>
                                        <p>If you visit G25 and contact your staff, <br/>you can order Achakey from the store.</p>
                                        <div className="thumb-wrap">
                                            <div className="thumb"><img src="../@resource/images/common/img_store_03.png" alt=""/></div>
                                            <div className="thumb"><img src="../@resource/images/common/img_store_04.png" alt=""/></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
        
                    <div id="section7" className="section last">
                        <div className="section-wrap">
                            <div className="info-cont">
                                <h3>Start Keyless Smart Car Life<br/> with Achakey.</h3>
                                <ul className="explain">
                                    <li>
                                        <StyledLink className="footer-a" data-current="main" data-href="customer" to="/customer">
                                            <span className="title">FAQ</span>
                                        </StyledLink>
                                        <p className="text">If you have any questions about Achakey, check here</p>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://smartstore.naver.com/achakey?gclid=Cj0KCQjw8rT8BRCbARIsALWiOvThvlFMWJJ5xGMEBp6FoIuhuIvlKdCUxwqiqZatf_Ex1lnVK1xmtQkaAuIDEALw_wcB">
                                            <span className="title">Buying</span>
                                        </a>
                                        <p className="text">Do you want to buy Achakey?</p>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="http://211.253.27.6:8033/">
                                        <span className="title">Company introduction</span>
                                        </a>
                                        <p className="text">Mobility experts have developed Achakey.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer">
                            <h2>Tuneit Corporation</h2>
                            <div className="company-info">
                                <dl className="president">
                                    <dt>CEO</dt>
                                    <dd>Harry Song</dd>
                                </dl>
                                <dl className="registration-number">
                                    <dt>Business license number</dt>
                                    <dd>603-88-01354</dd>
                                </dl>
                                {/* <dl className="commerce-number">
                                    <dt>통신판매업신고번호</dt>
                                    <dd>제2019-성남분당A-0480</dd>
                                </dl> */}
                                <dl className="address">
                                    <dt>Address</dt>
                                    <dd>4-11 Neuti-ro 51beon-gil, Bundang-gu, Seongnam-si,<br/> Gyeonggi-do, Republic of Korea</dd>
                                </dl>
                            </div>
                            <div className="contact-info">
                                <dl className="tel">
                                    <dt>Tel.</dt>
                                    <dd><a href="tel:18118136">1811 - 8136</a></dd>
                                </dl>
                                <dl className="email">
                                    <dt>e-mail</dt>
                                    <dd><a href="mailto:info@tuneit.io">info@tuneit.io</a></dd>
                                </dl>
                                <span className="copyright">Copyright (C) tuneit corp. All Rights Reserved.</span>
                            </div>
                            <div className="aside-wrap">
                                <div className="rules">
                                        <StyledLink href="rules" onClick={e => changeCatagory(e,423)} catagory={catagory} data-current="main" data-href="rules" to='/rules' className="href-rules">
                                            Terms of Service
                                        </StyledLink>
                                        <StyledLink href="rules" onClick={e => changeCatagory(e,424)} catagory={catagory} data-current="main" data-href="rules" to='/rules' className="href-rules">
                                            Terms and Conditions of Location-Based Services
                                        </StyledLink>
                                        <StyledLink href="rules" onClick={e => changeCatagory(e,425)} catagory={catagory} data-current="main" data-href="rules" to='/rules' className="href-rules">
                                            Privacy Policy
                                        </StyledLink>
                                    
                                        <a target="_blank" rel="noopener noreferrer" href="http://211.253.27.6:8033/">Company</a>
                                </div>
                                <p className="notice">The hours of operation are from 9 a.m. to 5 p.m.<br/>
                                If you make a reservation, you can visit and install it.</p>
                                <div className="sns-area">
                                    <a href="#!" onClick={e => e.preventDefault()} className="youtube" title="유튜브"></a>
                                    <a href="#!" onClick={e => e.preventDefault()} className="blog" title="블로그"></a>
                                    <a href="#!" onClick={e => e.preventDefault()} className="facebook" title="페이스북"></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </AppLayout>
            <div id="top">
                            <button type="button" className="btn-top" >
                                <span className="blind">상단으로 가기</span>
                            </button>
                        </div>
              <div id="popSearch" className="layer-popup pop-search">
            <div className="layer-wrap">
                <div className="popup-wrap">
                    <button type="button" className="pop-close">닫기</button>
                    <div className="popup-header">
                        <h1>Check Achakey Applicable Cars</h1>
                        <p className="text">기본적으로 차량 내에서 소지한 차키(스마트키)로 차문을 열고 닫을 수 있다면 아차키를 사용할 수 있습니다.</p>
                    </div>
                    <div className="popup-content">
                        <div className="form-wrap">
                            
                         
                                <div className="select-wrap">
                                    <span className="label">분류</span>
                            
                                    <div className="select for-pc">
                                        <div className="select-inner">
                                            <a href="#!" onClick={e => e.preventDefault()}>선택하세요</a>
                                            <ul id="pc-country">
                                                <li data-value="sort1">국산차</li>
                                                <li data-value="sort2">수입차</li>
                                            </ul>
                                        </div>
                                    </div>
                            
                                    <div className="select for-mobile">
                                        <select id="mobile-country">
                                            <option value="0">선택하세요</option>
                                            <option value="1">국산차</option>
                                            <option value="2">수입차</option>
                                        </select>
                                    </div>
                       
                                </div>
                        
                                <div className="select-wrap">
                                    <span className="label">제조사</span>
                             
                                    <div className="select for-pc">
                                        <div className="select-inner">
                                            <a href="#!" onClick={e => e.preventDefault()}>선택하세요</a>
                                            <ul id="pc-company">
                                                {/* <li data-value="company1">현대자동차</li>
                                                <li data-value="company2">기아자동차</li> */}
                                            </ul>
                                        </div>
                                    </div>
                              
                                    <div className="select for-mobile">
                                        <select id="mobile-company">
                                            {/* <option value="">선택하세요</option>
                                            <option value="">현대자동차</option>
                                            <option value="">기아자동차</option> */}
                                        </select>
                                    </div>
                            
                                </div>
                             
                                <div className="select-wrap">
                                    <span className="label">차명</span>
                         
                                    <div className="select for-pc">
                                        <div className="select-inner">
                                            <a href="#!" onClick={e => e.preventDefault()}>선택하세요</a>
                                            <ul id="pc-carName">
                                                {/* <li data-value="">싼타페 TM (2018 - 2020)</li>
                                                <li data-value="">셀토스</li>
                                                <li data-value="">K7</li>
                                                <li data-value="">스포티지</li>
                                                <li data-value="">니로</li>
                                                <li data-value="car6">카니발</li>
                                                <li data-value="car7">모하비</li>
                                                <li data-value="car8">K5</li>
                                                <li data-value="car9">레이</li>
                                                <li data-value="car10">쏘렌토</li> */}
                                            </ul>
                                        </div>
                                    </div>
                
                                    <div className="select for-mobile">
                                        <select id="mobile-carName">
                                            {/* <option value="">선택하세요</option>
                                            <option value="">싼타페 TM (2018 - 2020)</option>
                                            <option value="">셀토스</option>
                                            <option value="">K7</option>
                                            <option value="">스포티지</option>
                                            <option value="">니로</option>
                                            <option value="">카니발</option>
                                            <option value="">모하비</option>
                                            <option value="">K5</option>
                                            <option value="">레이</option>
                                            <option value="">쏘렌토</option> */}
                                        </select>
                                    </div>
                                
                                </div>
                      
                                <div className="btn-area">
                                    <button id="final-search" type="button" className="btn large normal">Search</button>
                                </div>
        
                                <div className="text-box install-y result-none">
                                    <h3>조회하신 차량은 <br className="for-mobile"/> 아차키 설치가 <strong>가능</strong>합니다!</h3>
                                    <p>제품 설치와 관련하여 추가로 궁금하신 내용이<br className="for-mobile"/> 있다면 <a href="/customer">자주 묻는 질문</a>을 확인해주세요.</p>
                                </div>
          
                                <div className="text-box install-n result-none">
                                    <h3>조회하신 차량은 <br className="for-mobile"/> 아차키 설치가 <strong>불가능</strong>합니다!</h3>
                                    <p>해당 차량에 제품 설치와 관련하여 궁금하신 내용이<br className="for-mobile"/> 있다면 <strong>고객센터(1811 - 8136)</strong>로 연락해주세요.</p>
                                </div>
            
                           
                        </div>
                        <p className="text">각각의 분류를 선택하고<br className="for-mobile"/> <strong>조회하기</strong>를 클릭하면 가능여부를<br className="for-mobile"/> 확인할 수 있습니다.</p>
                    </div>
                </div>
                <div className="bg"></div>
            </div>
        </div>
              <div id="popMenual" className="layer-popup pop-menual">
                  <div className="layer-wrap">
                      <div className="popup-wrap">
                          <button type="button" className="pop-close">닫기</button>
                          <div className="popup-header">
                              <h1>Achakey User Guide</h1>
                              <p className="text">To explore the Achakey User Guide, click topic at the below table.</p>
                          </div>
                          <div className="popup-content">
                              <div className="menual-wrap">
                                  <div className="direction">
                                      <button type="button" className="btn-prev">Previous</button>
                                      <button type="button" className="btn-next ">Next</button>
                                  </div>
                                  <div id="ui-tabs" className="tab-wrap">
                                
                                      <ul className="tabs medium type01 for-pc">
                                            <li><a data-index="0" className="active" href="#!" onClick={e => e.preventDefault()}>Sign Up</a></li>
                                            <li><a data-index="1" href="#!" onClick={e => e.preventDefault()}>login</a></li>
                                            <li><a data-index="2" href="#!" onClick={e => e.preventDefault()}>Add my car</a></li>
                                            <li><a data-index="3" href="#!" onClick={e => e.preventDefault()}>My car sharing</a></li>
                                            <li><a data-index="4" href="#!" onClick={e => e.preventDefault()}>Auto Door Lock</a></li>
                                            <li><a data-index="5" href="#!" onClick={e => e.preventDefault()}>Manual control</a></li>
                                            <li><a data-index="6" href="#!" onClick={e => e.preventDefault()}>Valet-key</a></li>
                                      </ul>
                                  
                                      <div className="select-wrap for-mobile">
                                          <select id="select-main-mb">
                                                <option value="0">Sign Up</option>
                                                <option value="1">login</option>
                                                <option value="2">Add my car</option>
                                                <option value="3">My car sharing</option>
                                                <option value="4">Auto Door Lock</option>
                                                <option value="5">Manual control</option>
                                                <option value="6">Valet-key</option>
                                          </select>
                                      </div>
        
                                      <div className="tab-content main-tab active tab01" id="useTab01">
                                          <div className="text-wrap">
                                              <Tab07 apiUrl={apiUrl} language={language}/>
                                          </div>
                                      </div>
                              
                                      <div className="tab-content main-tab tab01" id="useTab02">
                                          <div className="text-wrap">
                                              {/* 로그인
                                              아차키는 회원 기반의 앱 서비스로 회원가입 후 차량을 등록해야 관련 기능을 사용할 수 있습니다. <br/><br/> */}
                                              <Tab01 apiUrl={apiUrl} language={language}/>
                                          </div>
                                      </div>
                                    
                                      <div className="tab-content main-tab tab02" id="useTab03">
                                          <div className="text-wrap">
                                              {/* 내차추가
                                              아차키는 회원 기반의 앱 서비스로 회원가입 후 차량을 등록해야 관련 기능을 사용할 수 있습니다. <br/><br/> */}
                                              <Tab02 apiUrl={apiUrl} language={language}/>
                                          </div>
                                      </div>
                                
                                      <div className="tab-content main-tab tab03" id="useTab04">
                                          <div className="text-wrap">
                                              {/* 내차공유
                                              아차키는 회원 기반의 앱 서비스로 회원가입 후 차량을 등록해야 관련 기능을 사용할 수 있습니다. <br/><br/> */}
        
                                              <Tab03 apiUrl={apiUrl} language={language}/>
                                          </div>
                                      </div>
                                  
                                      <div className="tab-content main-tab tab04" id="useTab05">
                                          <div className="text-wrap">
                                              {/* 오토도어락
                                              아차키는 회원 기반의 앱 서비스로 회원가입 후 차량을 등록해야 관련 기능을 사용할 수 있습니다. <br/><br/> */}
        
                                              <Tab04 apiUrl={apiUrl} language={language}/>
                                          </div>
                                      </div>
                                  
                                      <div className="tab-content main-tab tab05" id="useTab06">
                                          <div className="text-wrap">
                                              {/* 수동제어
                                              아차키는 회원 기반의 앱 서비스로 회원가입 후 차량을 등록해야 관련 기능을 사용할 수 있습니다. <br/><br/> */}
        
                                              <Tab05 apiUrl={apiUrl} language={language}/>
                                          </div>
                                      </div>
                                  
                                      <div className="tab-content main-tab tab06" id="useTab07">
                                          <div className="text-wrap">
                                              {/* 발렛키
                                              아차키는 회원 기반의 앱 서비스로 회원가입 후 차량을 등록해야 관련 기능을 사용할 수 있습니다. <br/><br/> */}
        
                                              <Tab06 apiUrl={apiUrl} language={language}/>
                                          </div>
                                      </div>
                                
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="bg"></div>
                  </div>
              </div>
            </>
          );
    }
    
};

export default Main;
