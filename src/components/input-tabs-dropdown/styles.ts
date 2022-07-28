import Styled from 'styled-components'

export const Container = Styled.div`
  height: 20%;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  margin-left: 25px;
`

export const InputContainer = Styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  position: relative;
  width: 300px;
`

export const SearchInput = Styled.input`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 300px;
  height: 30px;
  border-radius: 8px;
  border-width: 1px;
  border-color: gray;
`

export const Searchicon = Styled.img`
    height: 22px;
    width: 22px;
    position: absolute;
    right: 10px;
`
