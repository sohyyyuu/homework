import './App.css';
import ProfileCard from './components/ProfileCard';
import profileImg from './assets/images/coffee.png'; ///이미지

function App() {
  return (
    <div className="main-container">
      <h1 className="title">차소현의 리액트 ✨</h1>

      <ProfileCard
        image={profileImg}
        name="차소현"
        description="커피를 사랑하는 개발자입니다."
      />

      <div className="link-area">
        <a
          className="link-button"
          href="https://chapter3-react1.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📘 coffee
        </a>
        <a
          className="link-button"
          href="https://chapter3-react2.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📙 non-coffee
        </a>
        <a
          className="link-button"
          href="https://chapter3-react3.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📗 cake
        </a>
      </div>
    </div>
  );
}

export default App;
