import styled from "styled-components";
import { transparentize } from 'polished'

export const Container = styled.form`
 h2 {
    color: var(--white);
    font-size: 1.5rem;
    margin-bottom: 2rem;
 }

 input {
    width: 100%;
    color: var(--text-head);
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--background);
    background: var(--black2);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
        color: var(--text-head);
    }

    & + input {
        margin-top: 1rem;
    }
 }

 button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green-light);
        color:#fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9) ;
        }
    }
  
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

 
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#6a994e',
    red: '#bc4749'
}

export const RadioBox = styled.button<RadioBoxProps>`
  
  height: 4rem;
    border: 1px solid #505059;
    border-radius: 0.25rem;
    color: #fff;
    
    background: ${(props) =>props.isActive
     ? transparentize(0.9,colors[props.activeColor] )
     : '#121214' };

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        border-color: var(--text-head );
    }

    img {
        width: 20px;
        height: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title)
    }



`