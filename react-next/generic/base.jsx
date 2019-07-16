import Head from 'next/head';

function Navbar(){
    return(
        <div id="site-nav-bar">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top navbar-height navbar-bg">
                <a href="/" className="navbar-brand display-4">Cloud Portal</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapseNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="http://github.com/rafiulgits" className="lead nav-link">Github Repo</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

function Footer(){
    return (
        'Hello From Footer'
    );
}

function Header(props){
    return (
        <Head>
            <meta charset="utf-8"/>
	        <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="/static/lib/css/bootstrap.min.css"/>
            <script src="/static/lib/js/jquery.min.js"></script>
            <script src="/static/lib/js/popper.min.js"></script>
            <script src="/static/lib/js/bootstrap.min.js"></script>
            
            <link rel="stylesheet" href="/static/css/generic/base.css"/>
            {props.children}
        </Head>

    );
}

function Layout(props){
  return  (
    <div>
        <Header/>
        <Navbar/>
        <div>
            {props.children}
        </div>
    </div>
    );
}

export {Header, Navbar, Footer, Layout};