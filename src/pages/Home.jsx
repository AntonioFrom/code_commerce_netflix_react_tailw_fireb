import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from "../request";

 const Home = () => {
  return (
    <div>
        <Main/>
        <Row rowId="1" title="UpComing" fetchUrl={requests.requestUpcoming}/>
        <Row rowId="2" title="Popular" fetchUrl={requests.requestPopular}/>
        <Row rowId="3" title="Trending" fetchUrl={requests.requestTrending}/>
        <Row rowId="4" title="Top Rated" fetchUrl={requests.requestTopRated}/>
        <Row rowId="5" title="Horror" fetchUrl={requests.requestHorror}/>
    </div>
  )
}

export default Home