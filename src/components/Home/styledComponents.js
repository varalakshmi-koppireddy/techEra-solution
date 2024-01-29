import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #ffffff;
  height: 90vh;
  width: 100%;
  padding-top: 150px;
  padding-left: 100px;
  padding-right: 100px;
`
export const CoursesHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: #1e293b;
`
export const ListOfCourses = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
`
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
