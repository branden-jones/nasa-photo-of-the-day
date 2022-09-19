import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const StyledInput = styled.input`
    background-color: black;
    color: white;
    font-family: san-serif;
    // border: 1px solid white;
    margin-right: 3%;
    text-align: center;
    padding-left: 2%;
    border: none;
`
 
export default function Search(props) {
    const changeHandler = event => {
        // console.log(`Event`, event)
        props.setSearchDate(event.target.value);
    }

    return (
        <div className='header-bar' onSubmit={props.inputDate}>
            {/* <img src={`../images/magnifier2/`} /> */}
            <StyledInput type='date' onChange={changeHandler} />
        </div>
    )
}
