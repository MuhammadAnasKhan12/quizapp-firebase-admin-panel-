import React, { useState, ChangeEvent } from 'react';
type inputprop = {
    value: any;
    change: (value: any) => void;
    type: string;
    placeholder:string
}

function SInput(props: inputprop) {
    // const Change = (e: ChangeEvent<HTMLInputElement>) => {
    //     props.change(e.target.value)
    // }
    return(
        <input type={props.type} value={props.value} placeholder={props.placeholder} onChange={props.change} />    
    )
}
export default SInput;