import React from "react"
import "./Widgets.scss"
import InfoIcon from "@mui/icons-material/Info"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("This is new news", "Top news - 5678 readers")}
      {newsArticle("Coronavirus: India updates", "Top news - 223 readers")}
      {newsArticle("Tesla hits new highs", "cars & auto - 679 readers")}
      {newsArticle("Redux is too good?", "code - 665 readers")}
      {newsArticle("Is the firebase good?", "Top news - 765 readers")}
    </div>
  )
}

export default Widgets
