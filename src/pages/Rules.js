import React, {useState} from "react";
import AppLayout from "../components/AppLayout";
import RulesList from "../components/Customer/RulesList";
import Header_achakey from "../include/common/header_achakey";

const Rules = (props) => {
    const [language,setLanguage] = useState(props.language);
    const [apiUrl] = useState(props.apiUrl);

    const toggle = e => {
        setLanguage(e);
        props.toggle(e);
    }
    const [catagory,setCatagory] = useState(props.catagory);
    const changeCatagory = (catagory) => {
        setCatagory(catagory);
        props.changeCatagory(catagory);
    }
    if(language==='ko'){
        return (
            <>
                <Header_achakey language={language} toggle={e => toggle(e)}/>
                <AppLayout page="sub-rules">
                <div className="content-header">
                    <div className="title-wrap">
                        <h2>이용약관</h2>
                        <p className="text">아차키앱 회원에게 적용되는 약관과 정책을 확인할 수 있습니다.</p>
                    </div>
                </div>
                <RulesList apiUrl={apiUrl} changeCatagory={(e) => changeCatagory(e)} toggle={e => toggle(e)} language={language} catagory={catagory}/>
                </AppLayout>
        
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
                                                    <a href="#" className="email-select-pc">문의할 내용의 분류를 선택하세요.</a>
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
                <AppLayout page="sub-rules">
                <div className="content-header">
                    <div className="title-wrap">
                        <h2>Terms</h2>
                        <p className="text">You can check Terms and Conditions and Policies that are applicable for the Services.</p>
                    </div>
                </div>
                <RulesList apiUrl={apiUrl} changeCatagory={e => changeCatagory(e)} toggle={e => toggle(e)} language={language} catagory={catagory}/>
                </AppLayout>
        
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
                                                    <a href="#" className="email-select-pc">Select the classifications you want to inquire about.</a>
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
                                                        <li data-value="434">service inspection</li>
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
                                                    <option data-text="서비스점검" value="434">service inspection</option>
                                                    <option data-text="이용약관" value="435">terms and conditions</option>
                                                    <option data-text="업데이트" value="436">app update</option>
                                                </select>
                                            </div>
        
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="">Contents <span className="essential">(necessary)</span></label>
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

export default Rules;