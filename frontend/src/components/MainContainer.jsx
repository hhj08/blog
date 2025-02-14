import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import MainContent from './MainContent';

const MainContainer = () => {
    return(
        <div className="main-container">
            <LeftSideBar/>
            <MainContent/>
            <RightSideBar/>
        </div>
    );
}

export default MainContainer;