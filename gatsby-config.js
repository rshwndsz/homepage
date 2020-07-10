module.exports = {
  siteMetadata: {
    title: `Russel's Homepage`,
    author: {
      name: `Russel Shawn Dsouza`,
      education: `Electronics & Communications @ NITK, India`,
      summary: `Undergrad @ National Institute of Technology Karnataka, India`,
    },
    description: `My personal website`,
    siteUrl: `https://rshwndsz.github.io/`,
    social: {
      twitter: `rshwndsz`,
      github: `rshwndsz`,
      linkedin: `rshwndsz`,
    },
    timelineData: [ 
      {
        "type": "publication",
        "endDate": "FEB 2020",
        "description" : "Lal, S., Dsouza, R., Maneesh, M., Kanfade, A., Kumar, A., Perayil, G., Alabhya, K., Chanchal,A.K. and Kini, J. \
          'A Robust Method for Nuclei Segmentation of H&E Stained Histopathology Images.' \
          2020,  7th  International  Conference  on  Signal  Processing  and  Integrated  Networks  (SPIN)(pp. 453–458).  IEEE"
      },
      {
        "type": "research",
        "startDate": "DEC 2019",
        "endDate": "FEB 2020",
        "title": "Winter Research Intern",
        "subtitle": "Deep Learning Lab, NITK",
        "description": "Worked on the segmentation and grading of kidney, liver, and bladder cancer from histopathology images",
      },
      {
        "type": "research",
        "startDate": "MAY 2019",
        "endDate": "JUN 2019",
        "title": "Summer Research Intern",
        "subtitle": "Deep Learning Lab, NITK",
        "description": "Worked on the nuclear segmentation of H&E stained histopathology images of kidney tissues",
      },
      {
        "type": "work",
        "startDate": "AUG 2018",
        "endDate": "APR 2019",
        "title": "Frontend Developer & UI Designer",
        "subtitle": "IRIS, NITK",
        "description": "Worked on the frontend of IRIS-the student managed digital portal of NITK.",
      },
      {
        "type": "work",
        "startDate": "MAY 2018",
        "endDate": "JUN 2018",
        "title": "Python Developer",
        "subtitle": "Pinnacle Media, Manipal",
        "description": "Worked on real-time face detection and recognition with OpenCV on a Rasbperry Pi",
      },
    ],
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'blog',
        link: '/blog'
      },
      {
        name: 'resume/cv',
        link: '/cv'
      }
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Russel's Homepage`,
        short_name: `rshwndsz`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `assets/images/profile-pic.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
