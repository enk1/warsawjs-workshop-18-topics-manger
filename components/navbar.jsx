const Navbar = ({login}) => {
    return <div className="section">
                <div className="container">
                    <nav className="navbar">
                        <div className="navbar-menu">
                            <div className="navbar-start">
                                <h1 className="title navbar-item">WarsawJS Workshop: Topics Manager</h1>
                            </div>
                            {login && <div className="navbar-end">
                                <button id="login" className="button is-primary">Witaj, {login}</button>
                            </div>}
                            
                        </div>
                    </nav>
                    <AddTopic />
                </div>
            </div>
}
