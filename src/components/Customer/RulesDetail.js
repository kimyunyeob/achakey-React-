import React from 'react';
import parse from 'html-react-parser';

const RulesDetail = ({ ruleData, loading }) => {
    if(loading) {
        return <h2>loading...</h2>;
    }
    // return (
    //     <React.Fragment>
    //         {ruleData.map(ruleDatas => (
    //             <React.Fragment key={ruleDatas.id}>
    //                 <h4>{ruleDatas.title}</h4>
    //                 <p>
                        
    //                     {ruleDatas.contents.split('\r\n').map((item,idx) =>{
                            
    //                         return (
    //                             <React.Fragment key={idx}>
    //                                 {/* {item.replace("\"","")} */}
    //                                 {item}
    //                                 <br/>
    //                             </React.Fragment>
    //                         );
    //                     })}
    //                 </p>
    //             </React.Fragment>
    //         ))}
    //     </React.Fragment>
    // )
    return (
        <React.Fragment>
            {parse(`${ruleData}`)}
        </React.Fragment>
    )
}
export default RulesDetail;