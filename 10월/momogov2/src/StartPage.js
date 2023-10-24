import { Link } from 'react-router-dom';
function StartPage() {
 
  return (
    <div className="content-overall">
      <h1 className='text-main'>나는 어떤 취향일까?</h1>
      <Link to="/test">
        <button className="button-main">시작하기</button>
      </Link>
    </div>
  );
}

export default StartPage;
