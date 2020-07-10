import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';
import BuildIcon from '@material-ui/icons/Build';
import ApartmentIcon from '@material-ui/icons/Apartment';

const getTimelineIcon = (type) => {
  switch (type) {
    case "research": 
      return <SchoolIcon />
      break
    case "work": 
      return <WorkIcon />
      break
    case "publication":
      return <StarIcon />
      break
    case "project": 
      return <BuildIcon />
      break
    case "education": 
      return <ApartmentIcon />
      break
  }
}

const getTimelineDate = (element) => {
  if (!element.startDate && !element.endDate)
    return ""
  if (!element.startDate)
    return `${element.endDate}`
  if (!element.endDate)
    return `${element.startDate}`
  return `${element.startDate} - ${element.endDate}`
}

const getClassName = (type) => {
  switch(type) {
    case "project":
    case "publication":
    case "research":
      return "vertical-timeline-element--work"
    case "work":
      return "vertical-timeline-element--work"
      break;
    case "education":
      return "vertical-timeline-element--education"
      break;
  }
}

const TimelineElements = ({data}) => (
  <>
    {data.map((element, index, _) => (
      <VerticalTimelineElement
        className = { getClassName(element.type) }
        date      = { getTimelineDate(element) }
        key       = { index }
        icon      = { getTimelineIcon(element.type) }
      >
        {element.title &&
          <h3 className="vertical-timeline-element-title">{element.title}</h3>
        }
        {element.subtitle &&
          <h4 className="vertical-timeline-element-subtitle">{element.subtitle}</h4>
        }
        {element.description &&
          <p>{element.description}</p>
        }
      </VerticalTimelineElement>
    ))}
  </>
)

const Timeline = ({ data }) => { 
  return (
    <VerticalTimeline className="vertical-timeline-custom-line">
      <TimelineElements data={data} />
    </VerticalTimeline>
  )
}

export default Timeline
