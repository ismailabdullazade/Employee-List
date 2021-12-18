import React, { useState,useEffect } from "react";

function Pagination ({pages,currentEmployees,setCurrentPage,employees}){
const numOfPage=[];

for(let i=1;i<=pages;i++){
    numOfPage.push(i);
}

const[currentButton,setCurrentButton]=useState(1);





useEffect(()=>{
    setCurrentPage(currentButton)
},[setCurrentPage,currentButton])

    return(
        <div className='clearfix'>
            <div className='hint-text'>Showing <b>{currentEmployees.length}</b> out of <b>{employees.length}</b> </div>
                <ul className='pagination'>
                    <li className={`${currentButton===1?'page-item disabled':'page-item'}`}
                    onClick={()=>setCurrentButton((prev)=>prev===1? prev:prev-1)}
                    ><a className='page-link' href='#!'>Previous</a></li>
                    {
                        numOfPage.map((page,index)=>{
                            return(
                                <li key={index} className={`${currentButton===page? 'page-item active':'page-item'}`}
                                onClick={()=>setCurrentButton(page)}
                                >
                                    <a className='page-link' href='#!'>{page}</a></li>
                            )
                        }
                            
                        )
                    }
                    <li className={`${currentButton===pages? 'page-item disabled':'page-item '}`}
                    onClick={()=>setCurrentButton((next)=>next===pages? next:next+1)}
                    ><a className='page-link' href='#!'>Next</a></li>
                </ul>

            
        </div>
    )
}

export default Pagination;