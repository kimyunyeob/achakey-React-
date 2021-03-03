import React, {useState,useEffect} from 'react';
import axios from 'axios';
import parse from 'html-react-parser';


const NewsList = (props) => {
    const [language] = useState(props.language);
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState(null);
    const [apiUrl] = useState(props.apiUrl);
    
    useEffect(() => {
      // async를 사용하는 함수 따로 선언
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            apiUrl+'/api/v1/achakey/help/427?lang='+language,
          );
          setArticles(response.data.data);
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
        
      };
      fetchData();
    }, []);
    
    // 대기 중일 때
    if (loading) {
      return <></>;
    }
    // 아직 articles 값이 설정되지 않았을 때
    if (!articles) {
      return null;
    }
    // articles 값이 유효할 때
    return (
        <React.Fragment>
        {/* {articles.map(article => (
            <ul key={article.id}>
                <li>{article.contents}</li>
            </ul>
        ))} */}
        {articles.map(article => {
            return (
                <React.Fragment key={article.id}>
                    {parse(`${article.contents}`)}
                    <img src={parse(`${article.imagePath}`)}/>
                    <br/>
                </React.Fragment>
                
            )
        })}
        
        
        </React.Fragment>
    );
  };



export default NewsList;