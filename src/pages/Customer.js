import React, {useState} from "react";
import AppLayout from "../components/AppLayout";
import Header_achakey from "../include/common/header_achakey";
import FaqList from "../components/Customer/FaqList";
import FaqList02 from "../components/Customer/FaqList02";
import {StyledLink } from "../include/common/style";

const Autoq = (props) => {
    const [language,setLanguage] = useState(props.language);
    const [catagory,setCatagory] = useState(props.catagory);
    const [apiUrl] = useState(props.apiUrl);
    const toggle = e => {
        setLanguage(e);
        props.toggle(e);
    }
    const changeCatagory = (catagory) => {
        setCatagory(catagory);
        props.changeCatagory(catagory);
    }
    if(language==='ko'){
        return (
            <>
                <Header_achakey language={language} toggle={e => toggle(e)}/>
                <AppLayout page="sub-customer">
                <div className="content-header">
                    <div className="title-wrap">
                        <h2>고객센터를 통해<br/> 궁금한 내용을 해결하세요</h2>
                        <p className="text">자주 묻는 질문과 공지사항에서 관련 내용을 확인하거나 메일과 알림톡을 이용해 직접 문의를 할 수 있습니다.</p>
                    </div>
                    <div className="aside">
                        <dl>
                            <dt>고객센터</dt>
                            <dd>1811 - 8136</dd>
                        </dl>
                        <p>전화문의는 평일 오전 9시부터 오후 6시까지 가능합니다.</p>
                    </div>
                </div>
                <div className="content-primary">
                    <div className="tab-wrap">
                        <ul className="tabs large type02">
                            <li className="active"><a href="#customerTab01">자주 묻는 질문</a></li>
                            <li><a href="#customerTab02">공지사항</a></li>
                        </ul>
                            <FaqList apiUrl={apiUrl} language={language}/>
                        <div className="tab-content tab02" id="customerTab02">
        
        
                            <FaqList02 apiUrl={apiUrl} language={language}/>
        
                        </div>
                    </div>
                    <div className="contact-us">
                            <p>원하는 내용을 찾지 못했다면, 이메일로 문의해주세요! 내용을 확인하고 답변을 드립니다.</p>
                            <a href="#" onClick={e => e.preventDefault()} className="btn-email">이메일 문의하기</a>
                    </div>
                </div>
                </AppLayout>
        
                <footer className="section">
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
                                <StyledLink href="rules" onClick={()=> {changeCatagory(423)}} data-current="/customer" data-href="rules" to={{
                                    pathname:'/rules',
                                    state: {
                                        data: '423'
                                    }
                                    }} className="href-rules">
                                    서비스이용약관
                                </StyledLink>
                                <StyledLink href="rules" onClick={()=> {changeCatagory(424)}} data-current="/customer" data-href="rules" to={{
                                    pathname:'/rules',
                                    state: {
                                        data: '424'
                                    }
                                    }} className="href-rules">
                                    위치기반서비스이용약관
                                </StyledLink>
                                <StyledLink href="rules" onClick={()=> {changeCatagory(425)}} data-current="/customer" data-href="rules" to={{
                                    pathname:'/rules',
                                    state: {
                                        data: '425'
                                    }
                                    }} className="href-rules">
                                    개인정보처리방침
                                </StyledLink>
                                <a target="_blank" href="http://211.253.27.6:8033/">회사소개</a>
                            </div>
                            <p className="notice">운영시간은 평일 오전 9시 ~ 오후 6시<br/>
                            방문설치는 예약 후 진행 가능합니다.</p>
                            <div className="sns-area">
                                <a href="#" onClick={e => e.preventDefault()} className="youtube" title="유튜브"></a>
                                <a href="#" onClick={e => e.preventDefault()} className="blog" title="블로그"></a>
                                <a href="#" onClick={e => e.preventDefault()} className="facebook" title="페이스북"></a>
                            </div>
                        </div>
                    </div>
                </footer>
        
                <div id="popMenual" className="layer-popup pop-inquire">
                    <div className="layer-wrap">
                        <div className="popup-wrap">
                            <button type="button" className="pop-close">닫기</button>
                            <div className="popup-header">
                                <h1>이메일 문의하기</h1>
                                <p className="text">궁금하신 내용을 이메일로 보내주시면 내용을 확인하여<br className="for-mobile"/> 답변을 드립니다.</p>
                            </div>
                            <div className="popup-content">
                                <div className="form-wrap">
                                    <div className="field">
                                        <label htmlFor="">이메일 <span className="essential">(필수)</span></label>
                                        <div className="input-text"><input className="email-email" type="text" placeholder="답변 받을 이메일 주소를 입력하세요."/></div>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="">휴대폰 <span>(선택)</span></label>
                                        <div className="input-text">
                                            <input className="email-number for-pc" type="number" maxLength="11" placeholder="문의 내용과 관련하여 연락이 가능한 휴대폰번호를 입력하세요."/>
                                            <input className="email-number for-mobile" type="number" maxLength="11" placeholder="연락 가능한 휴대폰번호를 입력하세요."/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="">문&nbsp;&nbsp;&nbsp;&nbsp;의 <span className="essential">(필수)</span></label>
                                        <div className="select-wrap">
                                            <div className="select for-pc">
                                                <div className="select-inner">
                                                    <a href="#" onClick={e => e.preventDefault()} className="email-select-pc">문의할 내용의 분류를 선택하세요.</a>
                                                    <ul>
                                                        <li data-value="413">제품주문</li>
                                                        <li data-value="414">제품설치</li>
                                                        <li data-value="415">앱설치</li>
                                                        <li data-value="416">아차키회원</li>
                                                        <li data-value="417">추가하기</li>
                                                        <li data-value="418">공유하기</li>
                                                        <li data-value="419">차량연결</li>
                                                        <li data-value="420">오토도어락</li>
                                                        <li data-value="421">수동제어</li>
                                                        <li data-value="422">발렛키</li>
                                                        <li data-value="433">아차키제품</li>
                                                        <li data-value="434">서비스점검</li>
                                                        <li data-value="435">이용약관</li>
                                                        <li data-value="436">업데이트</li>
                                                    </ul>
                                                </div>
                                            </div>
        
                                            <div className="select for-mobile">
                                                <select className="email-select-mb">
                                                    <option data-text="제품주문" value="413">제품주문</option>
                                                    <option data-text="제품설치" value="414">제품설치</option>
                                                    <option data-text="앱설치" value="415">앱설치</option>
                                                    <option data-text="아차키회원" value="416">아차키회원</option>
                                                    <option data-text="추가하기" value="417">추가하기</option>
                                                    <option data-text="공유하기" value="418">공유하기</option>
                                                    <option data-text="차량연결" value="419">차량연결</option>
                                                    <option data-text="오토도어락" value="420">오토도어락</option>
                                                    <option data-text="수동제어" value="421">수동제어</option>
                                                    <option data-text="발렛키" value="422">발렛키</option>
                                                    <option data-text="아차키제품" value="433">아차키제품</option>
                                                    <option data-text="서비스점검" value="434">서비스점검</option>
                                                    <option data-text="이용약관" value="435">이용약관</option>
                                                    <option data-text="업데이트" value="436">업데이트</option>
                                                </select>
                                            </div>
        
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="">내&nbsp;&nbsp;&nbsp;&nbsp;용 <span className="essential">(필수)</span></label>
                                        <div className="text-area"><textarea className="email-contents" placeholder="문의할 내용을 입력하세요."></textarea></div>
                                    </div>
                                    <div className="check-area">
                                        <span className="checkbox">
                                            <input type="checkbox" id="termAgree" name="termAgree"/>
                                            <label htmlFor="termAgree">개인정보처리방침에 동의합니다.</label>
                                        </span>
                                    </div>
                                    <div className="btn-area">
                                        <button id="email-submit" type="button" className="btn large weighty">이메일 보내기</button>
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
                <AppLayout page="sub-customer">
                <div className="content-header">
                    <div className="title-wrap">
                        <h2>Please get answers <br/>to your questions through <br/>the Customer Center</h2>
                        <p className="text">You can check frequently asked questions and announcements, <br/>or contact us directly via email and KAKAO Talk messages.</p>
                    </div>
                    <div className="aside">
                        <dl>
                            <dt>Customer Center</dt>
                            <dd>1811 - 8136</dd>
                        </dl>
                        <p>Phone inquiries are available from <br/>9 a.m. to 6 p.m. on weekdays.</p>
                    </div>
                </div>
                <div className="content-primary">
                    <div className="tab-wrap">
                        <ul className="tabs large type02">
                            <li className="active"><a href="#customerTab01">Frequently Asked Questions</a></li>
                            <li><a href="#customerTab02">Notice</a></li>
                        </ul>
                            <FaqList apiUrl={apiUrl} language={language}/>
                        <div className="tab-content tab02" id="customerTab02">
        
        
                            <FaqList02 apiUrl={apiUrl} language={language}/>
        
                        </div>
                    </div>
                    <div className="contact-us">
                            <p>If you haven't found what you want, <br/>please contact us by email! I'll check the contents and give you a reply. Contact Your Email</p>
                            <a href="#" onClick={e => e.preventDefault()} className="btn-email">Contact us by e-mail</a>
                    </div>
                </div>
                </AppLayout>
        
                <footer className="section">
                    <div className="footer">
                        <h2>Tuneit Corporation</h2>
                        <div className="company-info">
                            <dl className="president">
                                <dt>CEO Harry Song</dt>
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
                                <dd>4-11 Neuti-ro 51beon-gil, Bundang-gu, Seongnam-si, <br/>Gyeonggi-do, Republic of Korea</dd>
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
                                <StyledLink href="rules" onClick={()=> {changeCatagory(423)}} data-current="/customer" data-href="rules" to={{
                                    pathname:'/rules',
                                    state: {
                                        data: '423'
                                    }
                                    }} className="href-rules">
                                    Terms of Service
                                </StyledLink>
                                <StyledLink href="rules" onClick={()=> {changeCatagory(424)}} data-current="/customer" data-href="rules" to={{
                                    pathname:'/rules',
                                    state: {
                                        data: '424'
                                    }
                                    }} className="href-rules">
                                    Terms and Conditions of Location-Based Services
                                </StyledLink>
                                <StyledLink href="rules" onClick={()=> {changeCatagory(425)}} data-current="/customer" data-href="rules" to={{
                                    pathname:'/rules',
                                    state: {
                                        data: '425'
                                    }
                                    }} className="href-rules">
                                    Privacy Policy
                                </StyledLink>
                                <a target="_blank" href="http://211.253.27.6:8033/">Company</a>
                            </div>
                            <p className="notice">The hours of operation are from 9 a.m. to 5 p.m.<br/>
                            If you make a reservation, you can visit and install it.</p>
                            <div className="sns-area">
                                <a href="#" onClick={e => e.preventDefault()} className="youtube" title="유튜브"></a>
                                <a href="#" onClick={e => e.preventDefault()} className="blog" title="블로그"></a>
                                <a href="#" onClick={e => e.preventDefault()} className="facebook" title="페이스북"></a>
                            </div>
                        </div>
                    </div>
                </footer>
        
                <div id="popMenual" className="layer-popup pop-inquire">
                    <div className="layer-wrap">
                        <div className="popup-wrap">
                            <button type="button" className="pop-close">닫기</button>
                            <div className="popup-header">
                                <h1>Support</h1>
                                <p className="text">If you send us any questions via email, we will check them and reply to you.</p>
                            </div>
                            <div className="popup-content">
                                <div className="form-wrap">
                                    <div className="field">
                                        <label htmlFor="">e-mail <span className="essential">(necessary)</span></label>
                                        <div className="input-text"><input className="email-email" type="text" placeholder="Please enter the email address to receive"/></div>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="">Tel. <span>(Not necessary)</span></label>
                                        <div className="input-text">
                                            <input className="email-number for-pc" type="number" maxLength="11" placeholder="Please enter a mobile phone number that you can contact regarding the inquiry."/>
                                            <input className="email-number for-mobile" type="number" maxLength="11" placeholder="Please enter a mobile phone number that you can contact regarding the inquiry."/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="">Question <span className="essential">(necessary)</span></label>
                                        <div className="select-wrap">
                                            <div className="select for-pc">
                                                <div className="select-inner">
                                                    <a href="#" onClick={e => e.preventDefault()} className="email-select-pc">Select the classifications you want to inquire about.</a>
                                                    <ul>
                                                        <li data-value="413">order Achakey</li>
                                                        <li data-value="414">install Achakey</li>
                                                        <li data-value="415">install Achakey app</li>
                                                        <li data-value="416">member</li>
                                                        <li data-value="417">add</li>
                                                        <li data-value="418">share</li>
                                                        <li data-value="419">connect vehicle</li>
                                                        <li data-value="420">auto door lock</li>
                                                        <li data-value="421">manual control</li>
                                                        <li data-value="422">Valet-key</li>
                                                        <li data-value="433">Achaki products</li>
                                                        <li data-value="434"> service inspection</li>
                                                        <li data-value="435">terms and conditions</li>
                                                        <li data-value="436">app update</li>
                                                    </ul>
                                                </div>
                                            </div>
        
                                            <div className="select for-mobile">
                                                <select className="email-select-mb">
                                                    <option data-text="제품주문" value="413">order Achakey</option>
                                                    <option data-text="제품설치" value="414">install Achakey</option>
                                                    <option data-text="앱설치" value="415">install Achakey app</option>
                                                    <option data-text="아차키회원" value="416">member</option>
                                                    <option data-text="추가하기" value="417">add</option>
                                                    <option data-text="공유하기" value="418">share</option>
                                                    <option data-text="차량연결" value="419">connect vehicle</option>
                                                    <option data-text="오토도어락" value="420">auto door lock</option>
                                                    <option data-text="수동제어" value="421">manual control</option>
                                                    <option data-text="발렛키" value="422">Valet-key</option>
                                                    <option data-text="아차키제품" value="433">Achaki products</option>
                                                    <option data-text="서비스점검" value="434"> service inspection</option>
                                                    <option data-text="이용약관" value="435">terms and conditions</option>
                                                    <option data-text="업데이트" value="436">app update</option>
                                                </select>
                                            </div>
        
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="">Contents<span className="essential">(necessary)</span></label>
                                        <div className="text-area"><textarea className="email-contents" placeholder="Please enter your inquiry."></textarea></div>
                                    </div>
                                    <div className="check-area">
                                        <span className="checkbox">
                                            <input type="checkbox" id="termAgree" name="termAgree"/>
                                            <label htmlFor="termAgree">I agree with the Privacy Policy.</label>
                                        </span>
                                    </div>
                                    <div className="btn-area">
                                        <button id="email-submit" type="button" className="btn large weighty">Send mail</button>
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

export default Autoq;