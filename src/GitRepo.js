import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'

export class GitRepo extends Component{
    constructor(props){
        super(props)
        this.state={
            details : [],
            loading:false
        }
    }

    componentDidMount(){
        this.setState({loading : true})
        fetch('https://api.github.com/users/JawakarD')
                .then(response=>response.json())
                .then(data=>this.setState({
                    details :data,
                    loading : false
                }))
    }

    render(){
        const {details ,loading} = this.state
        return(
            <div className="container">
                <h1 className ="mb-2">GitHub Details fetched from <a href ="https://api.github.com">GitHub RestV3 api</a></h1>


                <div class="card border-light rounded p-3">
                    <img class="card-img-top rounded-circle" src={details.avatar_url} alt="Card image cap" />
                                        <div class="card-body">
                        <h1 class="card-title text-dark ml-0 pl-0">{details.login}</h1>
                        <p class="card-text"><span className ="font-weight-bold">Bio:: </span> {details.bio}</p>
                        <p class="card-text"><span className ="font-weight-bold">repos:: </span>{details.public_repos}</p>
                        <p class="card-text"><span className ="font-weight-bold">last Udated::</span> {details.updated_at}</p>
                        <a href={details.html_url} class="card-link h3 text-primary pl-3">Go to Profile</a>
                    </div>
                </div>
            </div>
        )
    }
}
