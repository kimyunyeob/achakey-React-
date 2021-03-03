import React, {useState,useEffect} from 'react';
import axios from 'axios';
import RulesDetail from './RulesDetail';

const RulesList = (props) => {
    const [apiUrl] = useState(props.apiUrl);
    const [language] = useState(props.language);
    const [loading, setLoading] = useState(true);
    const [catagory, setCatagory] = useState(props.catagory);
    const [ruleData, setRuleData] = useState([]);
    const [strDate, setStrDate] = useState([]);
    const [selectDate, setSelectDate] = useState();
    const changeCatagory = (e,catagory) => {
        e.preventDefault();
        setCatagory(catagory);
        props.changeCatagory(catagory);
    }
    useEffect(() => {
      // async를 사용하는 함수 따로 선언
      const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                apiUrl+'/api/v1/achakey/terms/'+catagory+'?lang='+language,
            );
            const response_date = await axios.get(
                apiUrl+'/api/v1/achakey/terms/releaseList/'+catagory+'?lang='+language,
            );
            setSelectDate(response_date.data.data.list[0].releaseDate);
            setStrDate(response_date.data.data.list);
            setRuleData(response.data.data.contents);
          } catch (e) {
            console.log(e);
          }
        setLoading(false);
      };
      fetchPosts();
    }, []);

    
    const catagorys = (e,catagory) => {
        e.preventDefault();
        setCatagory(catagory);
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    apiUrl+'/api/v1/achakey/terms/'+catagory+'?lang='+language,
                );
                const response_date = await axios.get(
                    apiUrl+'/api/v1/achakey/terms/releaseList/'+catagory+'?lang='+language,
                );
                setSelectDate(response_date.data.data.list[0].releaseDate);
                setStrDate(response_date.data.data.list);
                setRuleData(response.data.data.contents);
              } catch (e) {
                console.log(e);
              }
            setLoading(false);
          };
          fetchPosts();
    };

    const changeDate = (catagory,date) => {
        if(window.innerWidth<961){
            date=date.target.value;
        }else{
            date=date;
        }
        setSelectDate(date);
        setCatagory(catagory);
        const fetchPosts = async () => {
            setLoading(true);
            try {
                if(date){
                    date='?releaseDate='+date;
                }else{
                    date='';
                }
                const response = await axios.get(
                    apiUrl+'/api/v1/achakey/terms/'+catagory+date+'&lang='+language,
                );    
                setRuleData(response.data.data.contents);
                setLoading(false);
              } catch (e) {
                console.log(e);
              }
            setLoading(false);
          };
          fetchPosts();
    };

    // 대기 중일 때
    if (loading) {
      return <></>;
    }
    if(language === 'ko'){
        return (
            <>
              <div className="content-primary">
                  <div className="tab-wrap">
      
                      <div className="tab-inner">
                          <ul className="tabs medium type01">
                              <li className={`${catagory === 423 ? "active" : ""}`}><a href="#rulesTab01" className="rule-catagory" onClick={(e)=> {catagorys(e,423)}}>서비스 이용약관</a></li>
                              <li className={`${catagory === 424 ? "active" : ""}`}><a href="#rulesTab02" className="rule-catagory" onClick={(e)=> {catagorys(e,424)}}>위치기반 서비스 이용약관</a></li>
                              <li className={`${catagory === 425 ? "active" : ""}`}><a href="#rulesTab03" className="rule-catagory" onClick={(e)=> {catagorys(e,425)}}>개인정보 처리방침</a></li>
                          </ul>
                      </div>
      
                      <div className={`${catagory === 423 ? "active tab-content tab01" : "tab-content tab01"}`} id="rulesTab01">
                          <div className="aside-select">
                              <span className="label">시행일</span>
                              <div className="select-wrap">
      
                                  <div className="select for-pc">
                                      <div className="select-inner">
                                          <a href="#" onClick={e=> e.preventDefault()} className="selected">{selectDate}</a>
                                          <ul>
                                              {strDate.map((date,i) => (
                                                  <li key={i} onClick={()=>changeDate(423, date.releaseDate)} data-value={date.releaseDate}>{date.releaseDate}</li>
                                              ))}
                                          </ul>
                                          
                                      </div>
                                  </div>
      
                                  <div className="select for-mobile">
                                      <select defaultValue={selectDate} onChange={(e) => changeDate(423,e)}>
                                          {strDate.map((date,i) =>{
                                              if(date.releaseDate === selectDate) {
                                                  return (
                                                      <option disabled key={i} value={date.releaseDate} onClick={() => changeDate(424, date.releaseDate)}>{date.releaseDate}</option>
                                                  )
                                              }else{
                                                  return (
                                                      <option key={i} value={date.releaseDate} onClick={() => changeDate(424, date.releaseDate)}>{date.releaseDate}</option>
                                                  )
                                              }
                                              
                                          })}
                                      </select>
                                  </div>
      
                              </div>
                          </div>
                          <div className="rules-wrap">
      
                              <article>
                                  {/* <h3>제 1장 총칙</h3> */}
                                      <RulesDetail ruleData={ruleData} loading={loading}/>
                              </article>
      
                          </div>
                      </div>
      
                      <div className={`${catagory === 424 ? "active tab-content tab02" : "tab-content tab02"}`} id="rulesTab02">
                          <div className="aside-select">
                              <span className="label">시행일</span>
                              <div className="select-wrap">
      
                                  <div className="select for-pc">
                                      <div className="select-inner">
                                          <a href="#" onClick={e=> e.preventDefault()} className="selected">{selectDate}</a>
                                          <ul>
                                              {strDate.map((date,i) => (
                                                  <li key={i} onClick={()=>changeDate(424, date.releaseDate)}  data-value={date.releaseDate}>{date.releaseDate}</li>
                                              ))}
                                          </ul>
                                      </div>
                                  </div>
      
                                  <div className="select for-mobile">
                                      <select defaultValue={selectDate} onChange={(e) => changeDate(423,e)}>
                                          {strDate.map((date,i) =>{
                                              if(date.releaseDate === selectDate) {
                                                  return (
                                                      <option disabled key={i} value={date.releaseDate} onClick={() => changeDate(424, date.releaseDate)}>{date.releaseDate}</option>
                                                  )
                                              }else{
                                                  return (
                                                      <option key={i} value={date.releaseDate} onClick={() => changeDate(424, date.releaseDate)}>{date.releaseDate}</option>
                                                  )
                                              }
                                              
                                          })}
                                      </select>
                                  </div>
      
                              </div>
                          </div>
                          <div className="rules-wrap">
      
                              <article>
                                  {/* <h3>제 1장 총칙</h3> */}
                                  <RulesDetail ruleData={ruleData} loading={loading}/>
                              </article>
      
                             
                          </div>
                      </div>
      
                      <div className={`${catagory === 425 ? "active tab-content tab03" : "tab-content tab03"}`} id="rulesTab03">
                          <div className="aside-select">
                              <span className="label">시행일</span>
                              <div className="select-wrap">
      
                                  <div className="select for-pc">
                                      <div className="select-inner">
                                          <a href="#" onClick={e=> e.preventDefault()} className="selected">{selectDate}</a>
                                          <ul>
                                              {strDate.map((date,i) => (
                                                  <li key={i} onClick={()=>changeDate(425, date.releaseDate)}  data-value={date.releaseDate}>{date.releaseDate}</li>
                                              ))}
                                          </ul>
                                      </div>
                                  </div>
      
                                  <div className="select for-mobile">
                                      <select defaultValue={selectDate} onChange={(e) => changeDate(423,e)}>
                                          {strDate.map((date,i) =>{
                                              if(date.releaseDate === selectDate) {
                                                  return (
                                                      <option disabled key={i} value={date.releaseDate} onClick={() => changeDate(424, date.releaseDate)}>{date.releaseDate}</option>
                                                  )
                                              }else{
                                                  return (
                                                      <option key={i} value={date.releaseDate} onClick={() => changeDate(424, date.releaseDate)}>{date.releaseDate}</option>
                                                  )
                                              }
                                              
                                          })}
                                      </select>
                                  </div>
      
                              </div>
                          </div>
                          <div className="rules-wrap">
       
                              <article>
                                  {/* <h3>제 1장 총칙</h3> */}
                                  <RulesDetail ruleData={ruleData} loading={loading}/>
                              </article>
                          </div>
                      </div>
      
                  </div>
              </div>
      
      
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
                          <a href="#" className={catagory === 423 ? "emphasis rule-catagory": "rule-catagory"} onClick={(e)=> {catagorys(e,423);changeCatagory(e,423)}}>서비스이용약관</a>
                              <a href="#" className={catagory === 424 ? "emphasis rule-catagory": "rule-catagory"} onClick={(e)=> {catagorys(e,423);changeCatagory(e,424)}}>위치기반서비스이용약관</a>
                              <a href="#" className={catagory === 425 ? "emphasis rule-catagory": "rule-catagory"}onClick={(e)=> {catagorys(e,423);changeCatagory(e,425)}}>개인정보처리방침</a>
                              <a target="_blank" rel="noopener noreferrer" href="http://211.253.27.6:8033/">회사소개</a>
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
              
            </>
          );
    }else{
        // articles 값이 유효할 때
    return (
        <>
          <div className="content-primary">
              <div className="tab-wrap">
  
                  <div className="tab-inner">
                      <ul className="tabs medium type01">
                          <li className={`${catagory === 423 ? "active" : ""}`}><a href="#rulesTab01" className="rule-catagory" onClick={(e)=> {catagorys(e,423)}}>Terms of Service</a></li>
                          <li className={`${catagory === 424 ? "active" : ""}`}><a href="#rulesTab02" className="rule-catagory" onClick={(e)=> {catagorys(e,424)}}>Terms and Conditions of Location-Based Services</a></li>
                          <li className={`${catagory === 425 ? "active" : ""}`}><a href="#rulesTab03" className="rule-catagory" onClick={(e)=> {catagorys(e,425)}}>Privacy Policy</a></li>
                      </ul>
                  </div>
  
                  <div className={`${catagory === 423 ? "active tab-content tab01" : "tab-content tab01"}`} id="rulesTab01">
                      <div className="aside-select">
                          <span className="label">Enforcement date</span>
                          <div className="select-wrap">
  
                              <div className="select for-pc">
                                  <div className="select-inner">
                                      <a href="#" onClick={e=> e.preventDefault()} className="selected">{selectDate}</a>
                                      <ul>
                                          {strDate.map((date,i) => (
                                              <li key={i} onClick={()=>changeDate(423, date.releaseDate)} data-value={date.releaseDate}>{date.releaseDate}</li>
                                          ))}
                                      </ul>
                                      
                                  </div>
                              </div>
  
                              <div className="select for-mobile">
                                  <select defaultValue={selectDate} onChange={(e) => changeDate(423,e)}>
                                      {strDate.map((date,i) =>{
                                          if(date.releaseDate === selectDate) {
                                              return (
                                                  <option disabled key={i} value={date.releaseDate} onClick={() => changeDate(424, date.releaseDate)}>{date.releaseDate}</option>
                                              )
                                          }else{
                                              return (
                                                  <option key={i} value={date.releaseDate} onClick={() => changeDate(424, date.releaseDate)}>{date.releaseDate}</option>
                                              )
                                          }
                                          
                                      })}
                                  </select>
                              </div>
  
                          </div>
                      </div>
                      <div className="rules-wrap">
  
                          <article>
                              {/* <h3>제 1장 총칙</h3> */}
                                  <RulesDetail ruleData={ruleData} loading={loading}/>
                          </article>
  
                      </div>
                  </div>
  
                  <div className={`${catagory === 424 ? "active tab-content tab02" : "tab-content tab02"}`} id="rulesTab02">
                      <div className="aside-select">
                          <span className="label">Enforcement date</span>
                          <div className="select-wrap">
  
                              <div className="select for-pc">
                                  <div className="select-inner">
                                      <a href="#" onClick={e=> e.preventDefault()} className="selected">{selectDate}</a>
                                      <ul>
                                          {strDate.map((date,i) => (
                                              <li key={i} onClick={()=>changeDate(424, date.releaseDate)}  data-value={date.releaseDate}>{date.releaseDate}</li>
                                          ))}
                                      </ul>
                                  </div>
                              </div>
  
                              <div className="select for-mobile">
                                  <select defaultValue={selectDate} onChange={(e) => changeDate(423,e)}>
                                      {strDate.map((date,i) =>{
                                          if(date.releaseDate === selectDate) {
                                              return (
                                                  <option disabled key={i} value={date.releaseDate} onClick={() => changeDate(424, date.releaseDate)}>{date.releaseDate}</option>
                                              )
                                          }else{
                                              return (
                                                  <option key={i} value={date.releaseDate} onClick={() => changeDate(424, date.releaseDate)}>{date.releaseDate}</option>
                                              )
                                          }
                                          
                                      })}
                                  </select>
                              </div>
  
                          </div>
                      </div>
                      <div className="rules-wrap">
  
                          <article>
                              {/* <h3>제 1장 총칙</h3> */}
                              <RulesDetail ruleData={ruleData} loading={loading}/>
                          </article>
  
                         
                      </div>
                  </div>
  
                  <div className={`${catagory === 425 ? "active tab-content tab03" : "tab-content tab03"}`} id="rulesTab03">
                      <div className="aside-select">
                          <span className="label">Enforcement date</span>
                          <div className="select-wrap">
  
                              <div className="select for-pc">
                                  <div className="select-inner">
                                      <a href="#" onClick={e=> e.preventDefault()} className="selected">{selectDate}</a>
                                      <ul>
                                          {strDate.map((date,i) => (
                                              <li key={i} onClick={()=>changeDate(425, date.releaseDate)}  data-value={date.releaseDate}>{date.releaseDate}</li>
                                          ))}
                                      </ul>
                                  </div>
                              </div>
  
                              <div className="select for-mobile">
                                  <select defaultValue={selectDate} onChange={(e) => changeDate(423,e)}>
                                      {strDate.map((date,i) =>{
                                          if(date.releaseDate === selectDate) {
                                              return (
                                                  <option disabled key={i} value={date.releaseDate} onClick={() => changeDate(424, date.releaseDate)}>{date.releaseDate}</option>
                                              )
                                          }else{
                                              return (
                                                  <option key={i} value={date.releaseDate} onClick={() => changeDate(424, date.releaseDate)}>{date.releaseDate}</option>
                                              )
                                          }
                                          
                                      })}
                                  </select>
                              </div>
  
                          </div>
                      </div>
                      <div className="rules-wrap">
   
                          <article>
                              {/* <h3>제 1장 총칙</h3> */}
                              <RulesDetail ruleData={ruleData} loading={loading}/>
                          </article>
                      </div>
                  </div>
  
              </div>
          </div>
  
  
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
                            <dd>4-11 Neuti-ro 51beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea</dd>
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
                      <a href="#" className={catagory === 423 ? "emphasis rule-catagory": "rule-catagory"} onClick={(e)=> {catagorys(e,423);changeCatagory(e,423)}}>Terms of Service</a>
                          <a href="#" className={catagory === 424 ? "emphasis rule-catagory": "rule-catagory"} onClick={(e)=> {catagorys(e,423);changeCatagory(e,424)}}>Terms and Conditions of Location-Based Services</a>
                          <a href="#" className={catagory === 425 ? "emphasis rule-catagory": "rule-catagory"}onClick={(e)=> {catagorys(e,423);changeCatagory(e,425)}}>Privacy Policy</a>
                          <a target="_blank" rel="noopener noreferrer" href="http://211.253.27.6:8033/">Company</a>
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
          
        </>
      );
    }
    
  };



export default RulesList;

