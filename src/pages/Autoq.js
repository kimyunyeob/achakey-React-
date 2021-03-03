import React, {useState} from "react";
import AppLayout from "../components/AppLayout";
import Header_achakey from "../include/common/header_achakey";
import {StyledLink } from "../include/common/style";

const Autoq = (props) => {
    var popup_active = window.location.search;
    const [language,setLanguage] = useState(props.language);
    const [catagory,setCatagory] = useState(props.catagory);
    const [apiUrl] = useState(props.apiUrl);
    
    const toggle = e => {
        setLanguage(e);
        props.toggle(e);
    }
    const changeCatagory = (catagory) => {
        // e.preventDefault();
        setCatagory(catagory);
        props.changeCatagory(catagory);
    }
    if(language==='ko'){
        return (
            <>
                <Header_achakey language={language} toggle={e => toggle(e)}/>
                <AppLayout page="sub-autoq">
                <div id="fullpage" className="time-none">
                        <div id="section1" className="section home">
                            <div className="section-wrap">
                                <div className="title-box">
                                    <h2>THE<br/> DRIVING<br/> APP KEY</h2>
                                    <h3>기아자동차 오토큐 런칭</h3>
                                    <p className="text">기아자동차 오토큐 브랜드 상품 런칭 <br className="for-mobile"/> 아차키를 오토큐 서비스 센터에서 앱키로 만나요!</p>
                                    <button className="more-btn" type="button"><span>MORE AUTO Q</span></button>
                                </div>
                            </div>
                        </div>
                        <div id="section2" className="section autoq">
                            <div className="section-wrap">
                                <div className="title-box left">
                                    <h2>
                                        <strong>기아차</strong><br/>
                                        타시나요!?
                                    </h2>
                                    <h3>아차키가 기아자동차 오토큐 서비스<br className="for-mobile"/> 센터에서 판매를 시작합니다.</h3>
                                    <p className="text">가까운 오토큐 서비스 센터에 전화로 앱키를 문의하시고<br className="for-mobile"/> 예약 주문을 하시면 쉽게 설치가 가능합니다. <br className="for-pc"/>
                                    2020년<br className="for-mobile"/> 7월 기준 수도권과 광역시까지 판매를 하고 있으며,<br className="for-mobile"/> 취급점을 전국으로 확대할 예정입니다.</p>
                                </div>
                            </div>
                        </div>
                        <div id="section3" className="section order">
                            <div className="section-wrap">
                                <div className="title-box">
                                    <h2><strong>오토큐</strong> 앱키<br className="for-mobile"/> 구매 절차</h2>
                                    <h3>가까운 취급 센터에 전화로 문의하세요!</h3>
                                    <p className="text">오토큐 앱키는 예약주문으로 운영이 되고 있습니다. <br/>
                                    예약없이 취급 서비스 센터에 방문 할경우 재고부족<br className="for-mobile"/> 또는 설치불가 차량 등의 이유로 설치가 어려우니<br className="for-mobile"/> 반드시 주문 후 방문하세요.</p>
                                    <div className="process-wrap">
                                        <ul className="process">
                                            <li>
                                                <div className="circle">
                                                    <span className="num">1</span>
                                                    <strong>취급 센터 확인</strong>
                                                    <p>앱키를 취급하는<br/>
                                                    가까운 오토큐 서비스<br/>
                                                    센터를 확인하세요.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="circle">
                                                    <span className="num">2</span>
                                                    <strong>예약 주문 요청</strong>
                                                    <p>오토큐 서비스 센터에<br/>
                                                    취급 여부를 확인하고<br/>
                                                    주문 하세요.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="circle">
                                                    <span className="num">3</span>
                                                    <strong>센터 방문 및 설치</strong>
                                                    <p>오토큐 서비스 센터에<br/>
                                                    방문하여 앱키를 설치하고<br/>
                                                    사용법을 안내 받으세요.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="circle">
                                                    <span className="num">4</span>
                                                    <strong>결제 및 출고</strong>
                                                    <p>오토큐 서비스 센터에서 <br/>
                                                    결제 후 차량 출고!</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div id="section4" className="section last">
                            <div className="section-wrap">
                                <div className="info-cont">
                                    <h3>다른 브랜드의<br/>
                                    차량을 보유하셨다면<br/>
                                    아차키로 주문하세요!</h3>
                                    <ul className="explain">
                                        <li>
                                            <StyledLink className="footer-a" data-current="autoq" data-href="main" to="/">
                                                <span className="title">아차키 소개</span>
                                            </StyledLink>
                                            <p className="text">아차키를 만나면 스마트한 카 라이프가 시작됩니다.</p>
                                        </li>
                                        <li>
                                            <StyledLink className="footer-a" data-current="autoq" data-href="customer" to="/customer">
                                                <span className="title">자주묻는질문</span>
                                            </StyledLink>
                                            <p className="text">아차키에 대해 궁금한 점이 있다면 여기서 확인하세요.</p>
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
                                        <StyledLink href="rules" onClick={() => changeCatagory(423)} data-current="autoq" data-href="rules" to='/rules' className="href-rules">
                                            서비스이용약관
                                        </StyledLink>
                                        <StyledLink href="rules" onClick={() => changeCatagory(424)} data-current="autoq" data-href="rules" to='/rules' className="href-rules">
                                            위치기반서비스이용약관
                                        </StyledLink>
                                        <StyledLink href="rules" onClick={() => changeCatagory(425)} data-current="autoq" data-href="rules" to='/rules' className="href-rules">
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
                    <div id="top">
                        <button type="button" className="btn-top">
                            <span className="blind">상단으로 가기</span>
                        </button>
                    </div>
                </AppLayout>
        
                <div id="popMenual01" className="layer-popup pop-setup" >
            <div className="layer-wrap">
                <div className="popup-wrap">
                    <button type="button" className="pop-close">닫기</button>
                    <div className="popup-header">
                        <h1>오토큐 앱키 설치 가능 차량</h1>
                        <p className="text">현재 기아자동차에서 생산되는 9종의 차량에 설치가 가능합니다.</p>
                    </div>
                    <div className="popup-content">
                        <div className="sort-wrap">
                            <div className="table-list">
                                {/* 타이틀 */}
                                <div className="title for-pc">
                                    <div>차종명</div>
                                    <div>차량코드</div>
                                    <div>연식</div>
                                    <div>키부품번호</div>
                                </div>
                                {/*  타이틀 */}
                                <ul>
                                    <li>
                                        <div className="model">
                                            <strong>레이</strong>
                                        </div>
                                        <div className="code">
                                            <span>차량코드</span>
                                            <strong>TAM</strong>
                                        </div>
                                        <div className="year">
                                            <span>연식</span>
                                            <strong>2018 -</strong>
                                        </div>
                                        <div className="number">
                                            <span>키부품번호</span>
                                            <strong>95440A3100</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="model">
                                            <strong>K5</strong>
                                        </div>
                                        <div className="code">
                                            <span>차량코드</span>
                                            <strong>JF</strong>
                                        </div>
                                        <div className="year">
                                            <span>연식</span>
                                            <strong>2016 - 2019</strong>
                                        </div>
                                        <div className="number">
                                            <span>키부품번호</span>
                                            <strong>95440D4000</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="model">
                                            <strong>K7</strong>
                                        </div>
                                        <div className="code">
                                            <span>차량코드</span>
                                            <strong>YG</strong>
                                        </div>
                                        <div className="year">
                                            <span>연식</span>
                                            <strong>2016 - 2019</strong>
                                        </div>
                                        <div className="number">
                                            <span>키부품번호</span>
                                            <strong>95440F6000</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="model">
                                            <strong>K7</strong>
                                        </div>
                                        <div className="code">
                                            <span>차량코드</span>
                                            <strong>YG</strong>
                                        </div>
                                        <div className="year">
                                            <span>연식</span>
                                            <strong>2020 -</strong>
                                        </div>
                                        <div className="number">
                                            <span>키부품번호</span>
                                            <strong>95440F6510</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="model">
                                            <strong>니로</strong>
                                        </div>
                                        <div className="code">
                                            <span>차량코드</span>
                                            <strong>DE</strong>
                                        </div>
                                        <div className="year">
                                            <span>연식</span>
                                            <strong>2016 - 2018</strong>
                                        </div>
                                        <div className="number">
                                            <span>키부품번호</span>
                                            <strong>95440G5000</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="model">
                                            <strong>니로</strong>
                                        </div>
                                        <div className="code">
                                            <span>차량코드</span>
                                            <strong>DE</strong>
                                        </div>
                                        <div className="year">
                                            <span>연식</span>
                                            <strong>2019 -</strong>
                                        </div>
                                        <div className="number">
                                            <span>키부품번호</span>
                                            <strong>95440G5010</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="model">
                                            <strong>셀토스</strong>
                                        </div>
                                        <div className="code">
                                            <span>차량코드</span>
                                            <strong>SP2</strong>
                                        </div>
                                        <div className="year">
                                            <span>연식</span>
                                            <strong>2019 -</strong>
                                        </div>
                                        <div className="number">
                                            <span>키부품번호</span>
                                            <strong>95440Q5000</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="model">
                                            <strong>스포티지</strong>
                                        </div>
                                        <div className="code">
                                            <span>차량코드</span>
                                            <strong>QL</strong>
                                        </div>
                                        <div className="year">
                                            <span>연식</span>
                                            <strong>2019 -</strong>
                                        </div>
                                        <div className="number">
                                            <span>키부품번호</span>
                                            <strong>95440D9600</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="model">
                                            <strong>쏘렌토</strong>
                                        </div>
                                        <div className="code">
                                            <span>차량코드</span>
                                            <strong>UM</strong>
                                        </div>
                                        <div className="year">
                                            <span>연식</span>
                                            <strong>2018 - 2020.03</strong>
                                        </div>
                                        <div className="number">
                                            <span>키부품번호</span>
                                            <strong>95440C5500</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="model">
                                            <strong>카니발</strong>
                                        </div>
                                        <div className="code">
                                            <span>차량코드</span>
                                            <strong>YP</strong>
                                        </div>
                                        <div className="year">
                                            <span>연식</span>
                                            <strong>2014 - 2020.07</strong>
                                        </div>
                                        <div className="number">
                                            <span>키부품번호</span>
                                            <strong>95440A9300</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="model">
                                            <strong>모히비</strong>
                                        </div>
                                        <div className="code">
                                            <span>차량코드</span>
                                            <strong>HM</strong>
                                        </div>
                                        <div className="year">
                                            <span>연식</span>
                                            <strong>2020 -</strong>
                                        </div>
                                        <div className="number">
                                            <span>키부품번호</span>
                                            <strong>954402J500</strong>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <p className="text">해당 차종 외 기아자동차 차량에 설치를 원하시는 경우 오토큐 서비스 센터에 문의하여 장착가능 여부를 문의 후 안내를 받으세요.</p>
                        </div>
                    </div>
                </div>
                <div className="bg"></div>
            </div>
        </div>
        
                <div id="popMenual02" className={`${popup_active === '?popup' ? "layer-popup pop-center active" : "layer-popup pop-center"}`}>
            <div className="layer-wrap">
                <div className="popup-wrap">
                    <button type="button" className="pop-close">닫기</button>
                    <div className="popup-header">
                        <h1>오토큐 앱키 설치 가능 서비스 센터</h1>
                        <p className="text">현재 수도권 38개 기아자동차 오토큐 서비스<br className="for-mobile"/> 센터에서 앱키 설치가 가능합니다.</p>
                    </div>
                    <div className="popup-content">
                        <div className="sort-wrap">
                            <div className="search-area">
                                <input id="serach-input" type="search" placeholder="지역 또는 지점명을 입력하세요."/>
                                <button id="search-area" type="button" className="btn large normal">검색</button>
                            </div>
                            <div className="table-list search-list">
                                {/* 타이틀 */}
                                <div className="title for-pc">
                                    <div>지역명</div>
                                    <div>지점명</div>
                                    <div>주소</div>
                                    <div>전화번호</div>
                                </div>
                                {/*  타이틀 */}
                                {/* [D] 검색결과 있을 경우 */}
                                <ul><li><div className="place">서울 강남</div><div className="center">청담점</div><div className="address">서울특별시 강남구 삼성로148길 10 (청담동)</div><div className="tel">02-6241-8585</div></li><li><div className="place">서울 강남</div><div className="center">삼성점</div><div className="address">서울특별시 강남구 봉은사로 441 (삼성동)</div><div className="tel">02-515-8840</div></li><li><div className="place">서울 강동</div><div className="center">길동점</div><div className="address">서울특별시 강동구 양재대로 1523 (천호동)</div><div className="tel">02-474-8585</div></li><li><div className="place">서울 강북</div><div className="center">수유북부점</div><div className="address">서울특별시 강북구 인수봉로 296 (수유동)</div><div className="tel">02-992-1210</div></li><li><div className="place">서울 강서</div><div className="center">마곡종합서비스</div><div className="address">서울특별시 강서구 남부순환로 223-29, 31</div><div className="tel">02-3662-1371</div></li><li><div className="place">서울 강서</div><div className="center">가양점</div><div className="address">서울특별시 강서구 허준로 78 (가양동)</div><div className="tel">02-3661-8408</div></li><li><div className="place">서울 강서</div><div className="center">등촌점</div><div className="address">서울특별시 강서구 양천로 616 (등촌동)</div><div className="tel">02-3662-1374</div></li><li><div className="place">서울 관악</div><div className="center">봉천점</div><div className="address">서울특별시 관악구 봉천로 342 (봉천동)</div><div className="tel">02-889-8282</div></li><li><div className="place">서울 광진</div><div className="center">구의점</div><div className="address">서울특별시 광진구 광나루로 512 (구의동)</div><div className="tel">02-453-9998</div></li><li><div className="place">서울 광진</div><div className="center">자양점</div><div className="address">서울특별시 광진구 자양로46 (자양동)</div><div className="tel">02-3436-8585</div></li><li><div className="place">서울 구로</div><div className="center">오류점</div><div className="address">서울특별시 구로구 경린로 20 (오류동)</div><div className="tel">02-2683-1626</div></li><li><div className="place">서울 구로</div><div className="center">개봉점</div><div className="address">서울특별시 구로구 개봉로 11 (개봉동)</div><div className="tel">02-3666-3636</div></li><li><div className="place">서울 구로</div><div className="center">구로점</div><div className="address">서울특별시 구로구 구로중앙로40길 32(신도림동)</div><div className="tel">02-453-9998</div></li><li><div className="place">서울 금천</div><div className="center">㈜대성자동차정비</div><div className="address">서울특별시 금천구 벚꽃로150 (독산동)</div><div className="tel">02-853-0300</div></li><li><div className="place">서울 노원</div><div className="center">상계점</div><div className="address">서울특별시 노원구 노원로 472</div><div className="tel">02-937-8585</div></li><li><div className="place">서울 노원</div><div className="center">중계점</div><div className="address">서울특별시 노원구 덕릉로77길 6 (중계동)</div><div className="tel">02-933-0004</div></li><li><div className="place">서울 노원</div><div className="center">공릉점</div><div className="address">서울특별시 노원구 동일로 173가길 112 (공릉동)</div><div className="tel">02-978-2523</div></li><li><div className="place">서울 노원</div><div className="center">하계점</div><div className="address">서울특별시 노원구 공릉로62길 25 (하계동)</div><div className="tel">02-979-8581</div></li><li><div className="place">서울 도봉</div><div className="center">방학점㈜</div><div className="address">서울특별시 도봉구 방학로 35 (방학동)</div><div className="tel">02-955-3733</div></li><li><div className="place">서울 동대문</div><div className="center">청량리점</div><div className="address">서울특별시 동대문구 제기로 147(청량리동)</div><div className="tel">02-2213-1421</div></li><li><div className="place">서울 동작</div><div className="center">대방점</div><div className="address">서울특별시 동작구 상도로 19 (대방동)</div><div className="tel">02-824-8122</div></li><li><div className="place">서울 서초</div><div className="center">반포점</div><div className="address">서울특별시 서초구 사평대로 72 (반포동)</div><div className="tel">02-593-8204</div></li><li><div className="place">서울 서초</div><div className="center">현대강남자동차써비스㈜</div><div className="address">서울특별시 서초구 마방로 26 (양재동)</div><div className="tel">02-575-1900</div></li><li><div className="place">서울 성동</div><div className="center">성수남부점</div><div className="address">서울특별시 성동구 성수일로 57 (성수동1가)</div><div className="tel">02-462-3375</div></li><li><div className="place">서울 성북</div><div className="center">정릉점</div><div className="address">서울특별시 성북구 솔샘로 41 (정릉동)</div><div className="tel">02-918-2200</div></li><li><div className="place">서울 성북</div><div className="center">월곡점</div><div className="address">서울특별시 성북구 화랑로 180 (상월곡동)</div><div className="tel">02-969-8572</div></li><li><div className="place">서울 양천</div><div className="center">신월점</div><div className="address">서울특별시 양천구 남부순환로 420 (신월동)</div><div className="tel">02-2608-8588</div></li><li><div className="place">서울 양천</div><div className="center">신월남부점</div><div className="address">서울특별시 양천구 신월로 216 (신월동)</div><div className="tel">02-2694-1232</div></li><li><div className="place">서울 양천</div><div className="center">신정남부점</div><div className="address">서울특별시 양천구 신목로 41 (신정동)</div><div className="tel">02-2649-7778</div></li><li><div className="place">서울 영등포</div><div className="center">영등포점</div><div className="address">서울특별시 영등포구 국회대로 636 (영등포동7가 62-8)</div><div className="tel">02-2676-8581</div></li><li><div className="place">서울 영등포</div><div className="center">대림점</div><div className="address">서울특별시 영등포구 대림로 229 (대림동)</div><div className="tel">02-847-5008</div></li><li><div className="place">서울 용산</div><div className="center">서빙고점</div><div className="address">서울특별시 용산구 서빙고로 305(동빙고동)</div><div className="tel">02-749-8887</div></li><li><div className="place">서울 은평</div><div className="center">갈현점</div><div className="address">서울특별시 은평구 서오릉로 221</div><div className="tel">02-356-0652</div></li><li><div className="place">서울 종로</div><div className="center">독립문점</div><div className="address">서울특별시 종로구 통일로 272 (무악동)</div><div className="tel">02-722-4849</div></li><li><div className="place">서울 중랑</div><div className="center">면목남부점</div><div className="address">서울특별시 중랑구 동일로 604 (면목점)</div><div className="tel">02-496-2580</div></li></ul>
                                {/* <div className="btn-area"><button type="button" className="btn large weight">더보기</button></div> */}
                                {/*  [D] 검색결과 있을 경우 */}
                                {/* [D] 검색결과 없을 경우 */}
                                {/* <div className="no-result">
                                    <div className="text-wrap">
                                        <h3>검색 결과가 없습니다.</h3>
                                        <p>원하시는 지역 또는 지점이 검색되지 않으면<br> 가까운 다른 지점을 확인해보세요.</p>
                                    </div>
                                </div> */}
                                {/*  [D] 검색결과 없을 경우 */}
                                <p className="text">해당 차종 외 기아자동차 차량에 설치를 원하시는 경우<br className="for-mobile"/> 오토큐 서비스 센터에 문의하여 장착가능 여부를<br className="for-mobile"/> 문의 후 안내를 받으세요.</p>
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
                <AppLayout page="sub-autoq">
                <div id="fullpage" className="time-none">
                        <div id="section1" className="section home">
                            <div className="section-wrap">
                                <div className="title-box">
                                    <h2>THE<br/> DRIVING<br/> APP KEY</h2>
                                    <h3>Launch Kia Motors AutoQ brand products</h3>
                                    <p className="text">install APP KEY at AutoQ Service Center!</p>
                                    <button className="more-btn" type="button"><span>MORE AUTO Q</span></button>
                                </div>
                            </div>
                        </div>
                        <div id="section2" className="section autoq">
                            <div className="section-wrap">
                                <div className="title-box left">
                                    <h2>
                                        Do you drive <br/><strong>Kia Motors</strong>?
                                    </h2>
                                    <h3>Achakey has been approved for quality and stability, <br className="for-pc"/>and Kia Motors AutoQ Service Center will start selling it as 'APP KEY'.</h3>
                                    <p className="text">You can easily install it by calling the nearest AutoQ service center and making a reservation. <br className="for-pc"/>
                                    It is being sold and installed in more than 100 AutoQ centers across the nationalwide.</p>
                                </div>
                            </div>
                        </div>
                        <div id="section3" className="section order">
                            <div className="section-wrap">
                                <div className="title-box">
                                    <h2><strong>AutoQ</strong> APP KEY <br className="for-pc"/>purchase procedure.</h2>
                                    <h3>Please call your nearest AutoQ Center!</h3>
                                    <p className="text">AutoQ APP KEY is being operated as a pre-order.<br/>
                                    If you visit the service center without a reservation, <br className="for-pc"/>it is difficult to install it due to insufficient stock or non-installable vehicles, <br className="for-pc"/>so please make sure to order before visiting.</p>
                                    <div className="process-wrap">
                                        <ul className="process">
                                            <li>
                                                <div className="circle">
                                                    <span className="num">1</span>
                                                    <strong>Check the installation center.</strong>
                                                    <p>Please check the nearest <br/>AutoQ service center <br/>to sell and install APP KEY.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="circle">
                                                    <span className="num">2</span>
                                                    <strong>Pre-order request.</strong>
                                                    <p>Please check AutoQ Service Center <br className="for-mobile"/>for availability of sales and installation.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="circle">
                                                    <span className="num">3</span>
                                                    <strong>Visit and <br/>install the center.</strong>
                                                    <p>Please visit the AutoQ Service Center <br/>to install the app key and get <br/>instructions on how to use it.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="circle">
                                                    <span className="num">4</span>
                                                    <strong>Payment and <br/>Installation.</strong>
                                                    <p>Payment and vehicle installation <br/>at AutoQ Service Center!</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div id="section4" className="section last">
                            <div className="section-wrap">
                                <div className="info-cont">
                                    <h3>If you have a vehicle other than Kia Motors' brand, <br className="for-pc"/>you can install it in Achakey.</h3>
                                    <ul className="explain">
                                        <li>
                                            <StyledLink className="footer-a" data-current="autoq" data-href="main" to="/">
                                                <span className="title">Achakey Introduction</span>
                                            </StyledLink>
                                            <p className="text">Achakey starts a smart car life.</p>
                                        </li>
                                        <li>
                                            <StyledLink className="footer-a" data-current="autoq" data-href="customer" to="/customer">
                                                <span className="title">FAQ</span>
                                            </StyledLink>
                                            <p className="text">If you have any questions about Achakey, check here</p>
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
                                        <StyledLink href="rules" onClick={() => changeCatagory(423)} data-current="autoq" data-href="rules" to='/rules' className="href-rules">
                                            Terms of Service
                                        </StyledLink>
                                        <StyledLink href="rules" onClick={() => changeCatagory(424)} data-current="autoq" data-href="rules" to='/rules' className="href-rules">
                                            Terms and Conditions of Location-Based Services
                                        </StyledLink>
                                        <StyledLink href="rules" onClick={() => changeCatagory(425)} data-current="autoq" data-href="rules" to='/rules' className="href-rules">
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
                    <div id="top">
                        <button type="button" className="btn-top">
                            <span className="blind">상단으로 가기</span>
                        </button>
                    </div>
                </AppLayout>
        
               
            </>
        );
    }
    
};

export default Autoq;