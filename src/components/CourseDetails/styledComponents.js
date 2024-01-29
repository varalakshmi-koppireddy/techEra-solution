import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
`
export const ImageText = styled.img`
  height: 180px;
  width: 180px;
`
export const FailureText = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  color: #475569;
`
export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
`
export const RetryButton = styled.button`
  border: none;
  font-family: 'Roboto';
  font-size: 16px;
  background-color: #4656a1;
  height: 30px;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: #ffffff;
  outline: none;
`
export const CourseItemContainer = styled.div`
  background-color: #ffffff;
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CourseImg = styled.img`
  height: 300px;
  width: 250px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
export const NameDesCon = styled.div`
  padding: 20px;
  background-color: #e8e8e8;
  height: 300px;
  width: 450px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #1e293b;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: #475569;
`
