import './App.css';
import BlogInformation from './compponents/blog-information/BlogInformation';
import Bibliography from './compponents/bibliography/Bibliography';

function App() {
  return (
    <div className="App">
      <h1 className="App-title">What are the companies doing for sustainability in the cloud and carbon footprint reduction?</h1>
      <h3 className="App-author">By Vivian Kayi Mui Fang</h3>
      <img src="https://cdn.discordapp.com/attachments/946996181635059714/947025457826627584/Data-center-trends.png"
      width = "500px"/>
      <BlogInformation></BlogInformation>
      <Bibliography></Bibliography>
    </div>
  );
}

export default App;
