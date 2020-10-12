import React, { Component } from 'react'

class DogsImg extends Component {
    state = {
        data: []
    }

    render() {
        return (
            <>
                <div>
                    <img alt="asfd" src='https://www.codewars.com/users/Andriesjs1997/badges/large'/>
                </div>
                <div>
                    <span>Github Repositories</span>
                    { this.renderDogAPI() }
                </div>
            </>
        );
    }
    
    renderDogAPI() {
        let repos = []
        let reposData = this.state.data
        
        for(let counter in reposData) {
            counter= JSON.parse(counter)
            let fileSize = reposData[counter].fileSizeBytes
            let fileURL = reposData[counter].url
            console.log(fileSize,fileURL)

            repos.push(
                <li>
                    <a rel ="noopener noreferrer" target="_blank" href={fileURL}>
                        { fileSize }
                    </a>
                </li>
            )
        }


        return (
            <div>
                <img alt ="asdf" src={this.state.data.url} />
            </div>)
        
}
    getDogs() {

        let fetchData = {
            method: 'GET'
        }
        return fetch("https://random.dog/woof.json", fetchData)
            .then(response => response.text())
            .catch(err => console.log('Error has occured:', err))
    }

}

export default DogsImg