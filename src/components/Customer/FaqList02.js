import React, {useState,useEffect} from 'react';
import Posts from './Posts';
import axios from 'axios';



const FaqList02 = (props) => {
    const [apiUrl] = useState(props.apiUrl);
    const [language] = useState(props.language);
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [catagory, setCatagory] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    var totalCount;
    const pageNumbers = [];
    var pageUnit;
    if(window.innerWidth > 960){
        pageUnit = 10;
    }else {
        pageUnit = 5;
    }
    
    
    useEffect(() => {
      // async를 사용하는 함수 따로 선언
      const fetchPosts = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            apiUrl+'/api/v1/achakey/notice/0?lang='+language,
          );
          totalCount = response.data.data.list[0].totalCount;
          
          
        } catch (e) {
          console.log(e);
        }
        try {
            const response2 = await axios.get(
              apiUrl+'/api/v1/achakey/notice/0?lang='+language+'&rowCount='+totalCount,
            );
            response2.data.data.list = response2.data.data.list.sort(function(a,b){
                return b['id']-a['id'];
            });
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
    };
    
    const handleClick = pageNumbers => setCurrentPage(pageNumbers);
    
    const catagorys = (e,catagory) => {
        e.preventDefault();
        setCatagory(catagory);
        const fetchPosts = async () => {
            setLoading(true);
            try {
              const response = await axios.get(
                apiUrl+'/api/v1/achakey/notice/'+catagory+'?lang='+language,
              );
            if(response.data.data.list[0] === undefined) {
                totalCount=0;
            }else{
                totalCount = response.data.data.list[0].totalCount;
            };
              
              
            } catch (e) {
              console.log(e);
            }
            try {
                const response2 = await axios.get(
                  apiUrl+'/api/v1/achakey/notice/'+catagory+'?lang='+language+'&rowCount='+totalCount,
                );
                response2.data.data.list = response2.data.data.list.sort(function(a,b){
                    return b['id']-a['id'];
                });
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
        if(lastPage === 0 ){break;}
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
              <div className="sub-tab">
                  <ul className="tabs medium type01">
                      <li className={`${catagory === 0 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,0)}>전체</a></li>
                      <li className={`${catagory === 433 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,433)}>아차키 제품주문</a></li>
                      <li className={`${catagory === 434 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,434)}>서비스 점검</a></li>
                      <li className={`${catagory === 435 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,435)}>이용약관</a></li>
                      <li className={`${catagory === 436 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,436)}>앱 업데이트</a></li>
                  </ul>
              </div>
  
              <ul className="faq-list">
                  <Posts catagory="notice" pages={currentPage} posts={currentPosts} loading={loading}/>
              </ul>
  
            
              <div className="pagination tab02">
              <button onClick={handleClick.bind(null, start -10)} type="button" className={`${currentPage < 11 ? "disabled for-pc" : "prev for-pc"}`} title="이전"></button>
              <button onClick={handleClick.bind(null, start -5)} type="button" className={`${currentPage < 6 ? "disabled for-mobile" : "prev for-mobile"}`} title="이전"></button>
              {pageNumbers.map(number => (
                 <a href="#" className={`${currentPage === number && "active"}`} onClick={(e)=> paginate(e,number)} key={number}>{number}</a>
              ))}
              <button onClick={handleClick.bind(null, start+10)} type="button" className={`${index===lastPage+1 ? "next for-pc disabled" : "next for-pc"}`} title="다음"></button>
              <button onClick={handleClick.bind(null, start+5)} type="button" className={`${index===lastPage+1 ? "next for-mobile disabled" : "next for-mobile"}`} title="다음"></button>
          </div>
  
      
        </>
      );
    } else {
      return (
        <>
              <div className="sub-tab">
                  <ul className="tabs medium type01">
                      <li className={`${catagory === 0 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,0)}>All</a></li>
                      <li className={`${catagory === 433 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,433)}>Achaki products</a></li>
                      <li className={`${catagory === 434 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,434)}>service inspection</a></li>
                      <li className={`${catagory === 435 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,435)}>terms and conditions</a></li>
                      <li className={`${catagory === 436 ? "active" : ""}`}><a href="#" onClick={(e)=> catagorys(e,436)}>app update</a></li>
                  </ul>
              </div>
  
              <ul className="faq-list">
                  <Posts catagory="notice" pages={currentPage} posts={currentPosts} loading={loading}/>
              </ul>
  
            
              <div className="pagination tab02">
              <button onClick={handleClick.bind(null, start -10)} type="button" className={`${currentPage < 11 ? "disabled for-pc" : "prev for-pc"}`} title="이전"></button>
              <button onClick={handleClick.bind(null, start -5)} type="button" className={`${currentPage < 6 ? "disabled for-mobile" : "prev for-mobile"}`} title="이전"></button>
              {pageNumbers.map(number => (
                 <a href="#" className={`${currentPage === number && "active"}`} onClick={(e)=> paginate(e,number)} key={number}>{number}</a>
              ))}
              <button onClick={handleClick.bind(null, start+10)} type="button" className={`${index===lastPage+1 ? "next for-pc disabled" : "next for-pc"}`} title="다음"></button>
              <button onClick={handleClick.bind(null, start+5)} type="button" className={`${index===lastPage+1 ? "next for-mobile disabled" : "next for-mobile"}`} title="다음"></button>
          </div>
  
      
        </>
      );
    }
    // articles 값이 유효할 때
    
  };



export default FaqList02;
