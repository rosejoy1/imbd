import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Row from './components/Row';
import VideoList from './components/VideoList';
import request from './request';



function App() {
  return (
    <div className="App">
  <Header/>
  <Banner  fetchUrl={request.popular}/>
  <VideoList  fetchUrl={request.toprated}/>
 

  <Row isPoster={true} title="Up coming" fetchUrl={request.upcoming}/>
  {/* <Row isPoster={true} title="Top Rated" fetchUrl={request.toprated}/> */}
  <Row title="Now Playing" fetchUrl={request.nowplaying}/>
  {/* <Row title="Up coming" fetchUrl={request.upcoming}/> */}



  <Footer/>
    </div>
  );
}

export default App;
