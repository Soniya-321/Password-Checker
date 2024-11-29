// Style your elements here
import styled from 'styled-components'
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color:  #24263c;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:  #383a4e;
    padding: 20px;
    border-radius: 10px;
`
export const Heading = styled.h1`
    font-family: Roboto;
    font-size: 30px;
    color: #ffffff;
`
export const Para = styled.p`
    font-size: 16px;
    color: #f8fafc;
    margin-top: 0px;
`
export const ErrorMsg = styled.p`
    font-size: 14px;
    color: #ef4444;
    margin-top: 4px;
`

export const Input = styled.input`
    font-size: 15px;
    width: 100%;
    background-color: #edeeff;
    padding: 8px;
    margin-top: 2rem;
    border: none;
    outline: none;
`
