const LeftSideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img src="/assets/logo2_23.png" alt="Logo"/>
            </div>

            <div className="sidebar-icons">
                <img src="/assets/Group 12_10.png" alt="Home"/>
                <img src="/assets/Group 52_22.png" alt="Notification"/>
                <img src="/assets/bookmark2_25.png" alt="Bookmark"/>
                <img src="/assets/page2_24.png" alt="List"/>
                <div className="sidebar-divider"></div>
                <img src="/assets/write2_18.png" alt="Write"/>
            </div>

            <div className="sidebar-bottom">
                <img className="profile-img" src="/assets/Ellipse 12_27.png" alt="Profile"/>
            </div>
        </div>
    );
}

export default LeftSideBar;