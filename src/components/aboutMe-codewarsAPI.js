import React, { Component } from 'react'

class AboutMeCodewarsAPI extends Component {
    state ={
        codewarsData: null,
        githubData: []

    }

    renderGithubAPI() {
        let repos = []
        let reposData = this.state.githubData

        for (let repo in reposData) {
            repo = JSON.parse(repo)
            let repoName = reposData[repo].name
            let repoURL = reposData[repo].html_url
            console.log(repoName, repoURL)

            repos.push(
                <li>
                    <a target="_blank" href={repoURL}>
                        { repoName }
                    </a>
                </li>
            )
        }

        return (
            <div className="asfd">{repos}</div>
        );

    }

    render() {
        return (
            <div className="api-container">
                <div className="github">
                    <span>Github Repositories</span>
                    { this.renderGithubAPI() }
                </div>
            </div>
        );
    }


    getGithubAPI() {

        let fetchData = {
            method: 'GET',
            mode: 'cors',
            redirect: 'follow'
        }

        return fetch('https://api.github.com/users/AJ971011/repos', fetchData)
            .then(res => res.text())
            .catch(err => console.log('Error has occured:', err))
    }


    componentDidMount() {
        this.getGithubAPI()
            .then(res => {
                // console.log(res)
                this.setState({githubData: JSON.parse(res)})
            })
    }
}

export default AboutMeCodewarsAPI