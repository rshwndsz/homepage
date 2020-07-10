import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

const Timeline = () => (
  <VerticalTimeline className="vertical-timeline-custom-line">

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="DEC 2019 - FEB 2020"
      icon={<StarIcon />}
    >
      <h3 className="vertical-timeline-element-title">Publication</h3>
      <h4 className="vertical-timeline-element-subtitle">Deep Learning Lab, NITK</h4>
      <p>
        Lorem ipsum
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="DEC 2019 - FEB 2020"
      icon={<SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title">Winter Research Intern</h3>
      <h4 className="vertical-timeline-element-subtitle">Deep Learning Lab, NITK</h4>
      <p>
        Lorem ipsum
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="MAY 2019 - JUL 2019"
      icon={<SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title">Summer Research Intern</h3>
      <h4 className="vertical-timeline-element-subtitle">Deep Learning Lab, NITK</h4>
      <p>
        Lorem ipsum
      </p>
    </VerticalTimelineElement>


    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="AUG 2018 - APR 2019"
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">IRIS, NITK</h4>
      <p>
        Lorem ipsum
      </p>
    </VerticalTimelineElement>


  </VerticalTimeline>
)

export default Timeline
