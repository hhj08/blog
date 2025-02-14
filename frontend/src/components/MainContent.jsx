const MainContent = () => {
    return (
        <div className="content-wrapper">
            <div className="main-content">
                <div className="header">
                    <div className="header-title">Keep up with the latest in any topic</div>
                    <div className="nav-tabs">
                        <div>Following</div>
                        <div className="active">Recommended</div>
                    </div>
                </div>

                {/* 게시글 목록 */}
                <div className="post">
                    <div className="text-content">
                        <div className="author">
                            <img src="/assets/Ellipse 32_37.png" width="24" height="24" alt="Author"/>
                            Amit Das · 4 days ago
                        </div>
                        <div className="title">Your portfolio is stopping you from getting that job</div>
                        <div className="description">
                            An intense way to learn about the process and practice your designs skills —
                            My 1st hackathon Hackathons have been on my mind...
                        </div>
                        <div className="meta">
                            <div className="tag">Portfolio</div>
                            <div>3 min read</div>
                            <div>· Selected for you</div>
                        </div>
                    </div>
                    <img src="/assets/image 12_60.png" width="140" height="139" alt="Thumbnail"/>
                </div>
            </div>
        </div>
    );
}

export default MainContent;