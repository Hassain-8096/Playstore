import React, { Component } from 'react'
import "./playStoreMainPage.css"
import Tabitems from './Tabitems'
import Appcard from './Appcards'

const tabDetails=[
    {tabId:"APP",displayText:"Apps", className: "tab-button"},
    {tabId:"GAME",displayText:"Games", className: "tab-button"},
    {tabId:"BOOK",displayText:"Books", className: "tab-button"},
]
const appDetails =[
    {
        id:0,
        name:"whatsapp",
        category:"APP",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png?20220228223904",
    },
    {
        id:1,
        name:"facebook",
        category:"APP",
        imageUrl:"https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg",
    },
    {
        id:2,
        name:"instagram",
        category:"APP",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
    },
    {
        id:3,
        name:"pubg",
        category:"GAME",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/PUBGCorpABHC.png/640px-PUBGCorpABHC.png",
     },
    {
        id:4,
        name:"cod",
        category:"GAME",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Call_of_Duty_2023_logo.svg/640px-Call_of_Duty_2023_logo.svg.png",
    },
    {
        id:5,
        name:"candy crush",
        category:"GAME",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Candy_bomb.png/640px-Candy_bomb.png",
    },
    {
        id:6,
        name:"the secrete",
        category:"BOOK",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Question_book-new.svg/640px-Question_book-new.svg.png",
    },
    {
        id:7,
        name:"revolution 2020",
        category:"BOOK",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Question_book-new.svg/640px-Question_book-new.svg.png",
    },
    {
        id:8,
        name:"half girl friend",
        category:"BOOK",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Question_book-new.svg/640px-Question_book-new.svg.png",
    },


]

export class PlayStoreMainPage extends Component {

    state ={
        activeTabId:tabDetails[0].tabId,
        searchInput : ""
    }

    clickedTab = (tabId) => {
        this.setState({activeTabId:tabId})
    }
     onChangeSearch = (event) =>{
        this.setState({searchInput: event.target.value})
     }
     getfilteredApps =() => {
        const{activeTabId,searchInput}=this.state
        const searchResults = appDetails.filter((eachItem) => eachItem.name.includes(searchInput))
        const filteredApps= searchResults.filter(eachApp => eachApp.category === activeTabId)

        return filteredApps

    }
  render() {
    const {activeTabId} = this.state
    const filteredApps=this.getfilteredApps()
    return (
        <div className="app-container">
      <h1>play store</h1>
      <input type="search" onChange={this.onChangeSearch} />
      <ul className="tab-list">
        {
            tabDetails.map((eachItem) => (
                <Tabitems tabData={eachItem}
                clickedTab={this.clickedTab}
                isActive = {activeTabId === eachItem.tabId}
                />
            )
            )
        }
      </ul>
      <ul className="app-list">
        {
            filteredApps.map((eachApp) =>(
              <Appcard appData={eachApp} />  
            ))
        }
      </ul>
      </div>
    )
  }
}

export default PlayStoreMainPage
