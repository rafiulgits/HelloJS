import {Component} from 'react';
import {Layout} from '../../generic/base';
import axios from 'axios';


function Related(props){
    return (
        <div class="card p-3">
            <blockquote class="blockquote mb-0 card-body">
                <p>{props.item.Title}</p>
                <footer class="blockquote-footer">
                    <small class="text-muted">
                    {props.item.SourceName} <cite title="Source Title">{props.item.Duration}</cite>
                    </small>
                </footer>
            </blockquote>
        </div>
    );
}

function Item(props){
    return (
        <h1>Item</h1>
    );
}

class News extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded : false,
            data : []
        };
    }

    componentDidMount(){
        this.loadDate();
    }

    async loadDate(){
        try{
            let res = await axios.get("https://myallies-breaking-news-v1.p.rapidapi.com/GetTopNews",{
            headers : {
                "X-RapidAPI-Host" :  "myallies-breaking-news-v1.p.rapidapi.com",
                "X-RapidAPI-Key" : "70e504a94dmsh1da56da5870d57ep1935dbjsnf911a24d999b"
            }
            });
            let resultData = res.data;
            this.setState({
                data : resultData.Data,
                isLoaded : true
            });
            console.log('data loaded');
        } catch(e){
            console.log(e);
        }
    }
    
    render(){
        if(!this.state.isLoaded){
            return(
                <Layout>
                    <h1 className="display-3 text-center mt-3">Loading...</h1>
                </Layout>
            );
        }

        return(
            <Layout>
                <div className="d-flex justify-content-center mt-4">
                    <div className="col-md-8">
                        {this.state.data.map((item) =>
                            <div className="list-group-item list-group-item-dark">
                                <blockquote className="blockquote text-center">
                                    <p className="mb-0">{item.MainTitle}</p>
                                    <footer className="blockquote-footer">
                                        {item.SourceName} <cite title="Source Title"> {item.Duration}</cite>
                                    </footer>
                                </blockquote>
                                <p className="lead">Related</p>
                                <div className="card-columns">
                                    {item.OtherNewsViews.map((related) =>
                                        <Related item={related}/>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Layout>
        );
    }
}
export default News;