import React from 'react';
import {Route, Switch } from 'react-router-dom';


const board= () => {

    return(
        <div className="right_middle">
 
            <table className="table">
                <tr>
                    <th className="number">번호</th>
                    <th className="title">제목</th>
                    <th className="writer">글쓴이</th>
                    <th className="date">날짜</th>
                    <th className="count">조회</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        <a className="title_" href="">test</a></td>
                    <td>202000000</td>
                    <td>03-03</td>
                    <td>10000</td>
                </tr>
                <tr>
                    
                </tr>
            </table>
        </div>
    );
};

export default board;


