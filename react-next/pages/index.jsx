import {Footer,Header, Layout, Navbar} from '../generic/base';
import Link from 'next/link'

function Option(props){
    return (   
        <figure className="card-container dash-card">
            <img src={props.logo}/>
            <figcaption>
                <h5 className="title">{props.name}</h5>
            </figcaption>
            <Link href={props.url}>
                <a></a>
            </Link>
        </figure>
    )
}



function Index (){

    return(
        <div>
            <Header>
                <link rel="stylesheet" href="/static/css/generic/card.css"/>
            </Header>
            <Navbar/>
            <div className="d-flex justify-content-center mt-4">
                <Option logo="/static/res/worldwide.svg" url="/news" name="Trending News"/>
            </div>
        </div>
    );
}

export default Index;