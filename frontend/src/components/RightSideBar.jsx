const RightSideBar = () => {
    return (
        <div className="right-sidebar">
            <div className="subscription-button">Get unlimited access</div>
            <input className="search-box" type="text" placeholder="Search"/>

            <div className="reading-list">
                <h3>What We’re Reading Today</h3>
                <div>Amit Das - Your portfolio is stopping you from getting that job</div>
            </div>

            <div className="recommended-topics">
                <h3>Recommended Topics</h3>
                <div className="topic">Technology</div>
                <div className="topic">Money</div>
                <div className="topic">Business</div>
                <div className="topic">Productivity</div>
                <div className="topic">Mindfulness</div>
            </div>
        </div>
    );
}

export default RightSideBar;