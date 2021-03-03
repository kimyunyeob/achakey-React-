import React, {useState,useEffect} from 'react';
import Posts from './Posts';
import axios from 'axios';



const FaqList = (props) => {
    const [apiUrl] = useState(props.apiUrl);
    const [language] = useState(props.language);
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [catagory, setCatagory] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    var pageUnit;
    if(window.innerWidth > 960){
        pageUnit = 10;
    }else {
        pageUnit = 5;
    }
    
    var totalCount;
    const pageNumbers = [];
    
    
    useEffect(() => {
      // async를 사용하는 함수 따로 선언
      const fetchPosts = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            apiUrl+'/api/v1/achakey/faq/0?lang='+language,
          );
          totalCount = response.data.data.list[0].totalCount;
        } catch (e) {
          console.log(e);
        }
        try {
            const response2 = await axios.get(
              apiUrl+'/api/v1/achakey/faq/0?lang='+language+'&rowCount='+totalCount,
            );
            setPosts(response2.data.data.list);
            setLoading(false);
          } catch (e) {
            console.log(e);
          }
        setLoading(false);
      };
      fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const lastPage = Math.ceil(posts.length / postsPerPage);

    //change page
    const paginate = (e,pageNumber) => {
      e.preventDefault();
      setCurrentPage(pageNumber);
    }
    
    const handleClick = pageNumbers => setCurrentPage(pageNumbers);
    
    const catagorys = (e,catagory) => {
        e.preventDefault();
        setCatagory(catagory);
        const fetchPosts = async () => {
            setLoading(true);
            try {
              const response = await axios.get(
                apiUrl+'/api/v1/achakey/faq/'+catagory+'?lang='+language,
              );
              totalCount = response.data.data.list[0].totalCount;
              
            } catch (e) {
              console.log(e);
            }
            try {
                const response2 = await axios.get(
                  apiUrl+'/api/v1/achakey/faq/'+catagory+'?lang='+language+'&rowCount='+totalCount,
                );
                setPosts(response2.data.data.list);
                setLoading(false);
              } catch (e) {
                console.log(e);
              }
            setLoading(false);
          };
          fetchPosts();
          setCurrentPage(1);
    };

    //pageUnit
    let start;
    let end;
    //start = (currentPage/pageUnit)*pageUnit+1;
    start = (Math.floor((currentPage-1)/pageUnit)*pageUnit)+1 ;
    end = start + pageUnit-1;
    let index=start;
    while(index <= end){
      pageNumbers.push(index);
      index++;
        if(index===lastPage+1){
          break;
        }
    }

    // 대기 중일 때
    if (loading) {
      return <></>;
    }
    if(language === 'ko'){
      return (
        <>
          <div className="tab-content tab01 active" id="customerTab01">
              <div className="sub-tab">
                  <ul className="tabs medium type01">
                      <li className={`${catagory === 0 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,0)}>전체</a></li>
                      <li className={`${catagory === 413 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,413)}>아차키 제품주문</a></li>
                      <li className={`${catagory === 414 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,414)}>아차키 제품설치</a></li>
                      <li className={`${catagory === 415 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,415)}>아차키 앱 설치</a></li>
                      <li className={`${catagory === 416 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,416)}>아차키 회원</a></li>
                      <li className={`${catagory === 417 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,417)}>추가하기</a></li>
                      <li className={`${catagory === 418 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,418)}>공유하기</a></li>
                      <li className={`${catagory === 419 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,419)}>차량연결</a></li>
                      <li className={`${catagory === 420 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,420)}>오토 도어락</a></li>
                      <li className={`${catagory === 421 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,421)}>수동제어</a></li>
                      <li className={`${catagory === 422 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,422)}>발렛키</a></li>
                  </ul>
              </div>
  
              <ul className="faq-list">
                  <Posts pages={currentPage} posts={currentPosts} loading={loading}/>
              </ul>
  
              <div className="pagination tab01">
              <button onClick={handleClick.bind(null, start -10)} type="button" className={`${currentPage < 11 ? "disabled for-pc" : "prev for-pc"}`} title="이전"></button>
              <button onClick={handleClick.bind(null, start -5)} type="button" className={`${currentPage < 6 ? "disabled for-mobile" : "prev for-mobile"}`} title="이전"></button>
              {pageNumbers.map(number => (
                 <a className={`${currentPage === number && "active"}`} onClick={(e)=> paginate(e,number)} key={number} href="#">{number}</a>
              ))}
              <button onClick={handleClick.bind(null, start+10)} type="button" className={`${index===lastPage+1 ? "next for-pc disabled" : "next for-pc"}`} title="다음"></button>
              <button onClick={handleClick.bind(null, start+5)} type="button" className={`${index===lastPage+1 ? "next for-mobile disabled" : "next for-mobile"}`} title="다음"></button>
          </div>
  
          </div>
  
          
        </>
      );
    } else {
      return (
        <>
          <div className="tab-content tab01 active" id="customerTab01">
              <div className="sub-tab">
                  <ul className="tabs medium type01">
                      <li className={`${catagory === 0 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,0)}>All</a></li>
                      <li className={`${catagory === 413 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,413)}>order Achakey</a></li>
                      <li className={`${catagory === 414 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,414)}>install Achakey</a></li>
                      <li className={`${catagory === 415 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,415)}>install Achakey app</a></li>
                      <li className={`${catagory === 416 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,416)}>Member</a></li>
                      <li className={`${catagory === 417 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,417)}>add</a></li>
                      <li className={`${catagory === 418 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,418)}>share</a></li>
                      <li className={`${catagory === 419 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,419)}>connect vehicle</a></li>
                      <li className={`${catagory === 420 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,420)}>auto door lock</a></li>
                      <li className={`${catagory === 421 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,421)}>manual control</a></li>
                      <li className={`${catagory === 422 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,422)}>Valet-key</a></li>
                  </ul>
              </div>
  
              <ul className="faq-list">
                  <Posts pages={currentPage} posts={currentPosts} loading={loading}/>
              </ul>
  
              <div className="pagination tab01">
              <button onClick={handleClick.bind(null, start -10)} type="button" className={`${currentPage < 11 ? "disabled for-pc" : "prev for-pc"}`} title="이전"></button>
              <button onClick={handleClick.bind(null, start -5)} type="button" className={`${currentPage < 6 ? "disabled for-mobile" : "prev for-mobile"}`} title="이전"></button>
              {pageNumbers.map(number => (
                 <a className={`${currentPage === number && "active"}`} onClick={(e)=> paginate(e,number)} key={number} href="#">{number}</a>
              ))}
              <button onClick={handleClick.bind(null, start+10)} type="button" className={`${index===lastPage+1 ? "next for-pc disabled" : "next for-pc"}`} title="다음"></button>
              <button onClick={handleClick.bind(null, start+5)} type="button" className={`${index===lastPage+1 ? "next for-mobile disabled" : "next for-mobile"}`} title="다음"></button>
          </div>
  
          </div>
  
          
        </>
      );
    }
    // articles 값이 유효할 때
    
  };



export default FaqList;
