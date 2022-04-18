## ChuTube (Youtube clone)
## 페이지 : https://chuseungdeok.github.io/react_youtube/
<img width="70%" src="https://user-images.githubusercontent.com/101231647/163802931-88bac319-f637-4eb7-b081-a3182bbe6605.png"/>

## 사용 기술
1. React
2. Postman
3. PostCSS
4. javascript
5. Axios

PostCss 사용이유
기존 Css or Sass로 사용하여도 문제는 없으나 계속 사용할때마다 클래스명을 다르게 지정해줘야하며 그렇게 진행하다보면 내가 사용한 클래스명이 뭐였는지도 헷갈리는 불편한 상황이 발생하여 모듈화가 가능한 PostCss 사용

Axios 사용이유
처음 작성할때는 웹API인 fetch를 사용하였는데 query params를 작성할때 가독성이 떨어지는 긴 url을 사용하여야했고, 또한 받은 response를 JSON으로 일일이 변환해 줘야 하는 불편함이 발생하여 query params를 조금 더 가독성있고, response를 JSON으로 일일이 변환하지 않아도 되는 라이브러리인 Axios를 사용

## 주요기능

- 반응형 웹사이트 : 미디어 쿼리를 사용


homepage

<img src="https://user-images.githubusercontent.com/101231647/163804741-43434ba2-29ff-48b3-b33b-1a6da3469ad9.gif"/>



detailpage

<img src="https://user-images.githubusercontent.com/101231647/163806177-53e094f2-2e72-4eb6-a492-960ffb37e949.gif"/>




- 검색기능

input을 이용하여 원하는 키워드 검색가능

<img src="https://user-images.githubusercontent.com/101231647/163806395-e5f6a7cf-f56e-4150-aefa-ceada7275290.gif"/>
