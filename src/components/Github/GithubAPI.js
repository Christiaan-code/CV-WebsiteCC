import React, { Component } from 'react'
import GithubCard from './/GithubCard.js'

class GithubAPI extends Component {
    state ={
        githubData: []
    }

    renderGithubAPI() {
        let repos = []
        let reposData = this.state.githubData

        for (let repo in reposData) {
            repo = JSON.parse(repo)
            let repoName = reposData[repo].name
            let repoUrl = reposData[repo].html_url
            console.log(repoName, repoUrl)

            repos.push(
                <GithubCard
                    path={repoUrl}
                    text={ repoName }
                />
            )
        }

        return (
            <ul className="cards__items">{repos}</ul>
        );

    }

    render() {
        return (
            <>
                { this.renderGithubAPI() }
            </>
        );
    }


    getGithubAPI() {

        let fetchData = {
            method: 'GET',
            mode: 'cors',
            redirect: 'follow'
        }

        return fetch('https://api.github.com/users/Christiaan-code/repos', fetchData)
            .then(res => res.text())
            .catch(err => console.log('Error has occured:', err))
    }


    componentDidMount() {
        this.getGithubAPI()
            .then(res => {
                console.log(res)
                this.setState({githubData: JSON.parse(res)})
            })
    }
}

export default GithubAPI