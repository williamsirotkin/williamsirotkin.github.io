import './App.css';
import React from 'react';
import './style.css'

function NCR() {
    return (
        <img src = "https://assets.ncr.com/content/experience-fragments/ncr-carousels/ncr-news-newsroom/_jcr_content/root/container_copy/carousel_copy_copy/item_1620319384705.coreimg.90.1000.jpeg/1657162206960/ncr-building-at-dusk.jpeg" alt = "ncr"></img>
    )
}

function Tutoring() {
    return (
        <img src = "https://dae.uga.edu/_resources/images/rsz_36963-061.jpg" alt = "tutoring"></img>
    )
}

function ExperienceImageRow() {
    return (
        <React.Fragment>
            <NCR/>
            <Tutoring/>
        </React.Fragment>
    )
}

export { ExperienceImageRow }