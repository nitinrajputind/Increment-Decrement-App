import React, { useState } from "react";


const MainApp =()=>{
    const[num,setValue]= useState(0);

    const incNum =()=> {
        setValue(num+1)
    };

    const decNum=()=>{
        if(num > 0){
            setValue(num-1);
        }
        else{
            alert("You can not Go to Negative number or less than zero!");
            setValue(0);
        }
    };

    const reset = ()=>{
        setValue(0);
    };


    return(
        <div className="main_div">
            <div className="center_div">
                <h1> {num} </h1>
                <div className="btn_div">
                    <button onClick={incNum} >Increment</button>
                    <button onClick={decNum}>Decrement</button>
                </div>
                    <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default MainApp;