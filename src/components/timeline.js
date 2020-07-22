import React from 'react'
import { rhythm } from '../utils/typography'
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
    case "work": 
      return <WorkIcon />
    case "publication":
      return <StarIcon />
    case "project": 
      return <BuildIcon />
    case "education": 
      return <ApartmentIcon />
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
    case "publication":
      return "vertical-timeline-element--publication"
    case "project":
    case "research":
    case "work":
      return "vertical-timeline-element--work"
    case "education":
      return "vertical-timeline-element--education"
  }
}

const contentTitleStyle = (type) => {
  switch(type) {
    case "publication":
      return {
        fontSize: `${rhythm(3/4)}`,
      }
    case "project":
    case "research":
    case "work":
    case "education":
      return {
        fontSize: `${rhythm(3/4)}`,
      }
  }
}

const contentSubtitleStyle = (type) => {
  switch(type) {
    case "publication":
      return {
        fontSize: `${rhythm(1/2)}`,
        paddingTop: `${rhythm(1/4)}`,
        fontStyle: 'italic',
      }
    case "project":
    case "research":
    case "education":
    case "work":
      return {
        fontSize: `${rhythm(5/8)}`,
        marginTop: `${rhythm(1/8)}`,
      }
  }
}

const contentDescriptionStyle = (type) => {
  switch(type) {
    case "publication":
      return {
        fontSize: `${rhythm(5/8)}`,
      }
    case "project":
    case "research":
    case "education":
    case "work":
      return {
        fontSize: `${rhythm(5/8)}`,
      }
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
        <h3 className="vertical-timeline-element-title" style={contentTitleStyle(element.type)}>
          {element.title}
        </h3>
        }
        {element.subtitle &&
        <h4 className="vertical-timeline-element-subtitle" style={contentSubtitleStyle(element.type)}>
          {element.subtitle}
        </h4>
        }
        {element.description &&
        <p style={contentDescriptionStyle(element.type)} dangerouslySetInnerHTML={{__html: element.description}}></p>
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
