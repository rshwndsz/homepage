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
    skillData: [
      {
        "type": "Programming Languages",
        "skills": ["C++", "Python", "MATLAB", "JavaScript", "C", "Verilog", "ngSPICE"]
      },
      {
        "type": "Deep Learning",
        "skills": ["Pytorch", "Keras", "scikit-learn"]
      },
      {
        "type": "Data Science",
        "skills": ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
      },
      {
        "type": "Image Processing",
        "skills": ["OpenCV", "Pillow", "MATLAB"],
      },
      {
        "type": "Web Development",
        "skills": ["React", "Gatsby", "Express", "Node", "MongoDB", "GraphQL"],
      },
      {
        "type": "Hardware",
        "skills": ["Raspberry Pi", "Arduino", "Xilinx Artix 7 FPGA"],
      },
      {
        "type": "Spoken Languages",
        "skills": ["English", "Hindi", "Kannada", "Konkani"],
      },
    ],
    timelineData: [ 
      {
        "type": "publication",
        "endDate": "FEB 2020",
        "title": "A Robust Method for Nuclei Segmentation of H&E Stained Histopathology Images",
        "subtitle": "Lal, S., Dsouza, R., Maneesh, M., Kanfade, A., Kumar, A., Perayil, G., Alabhya, K., Chanchal, A.K. and Kini, J. ",
        "description": "- 7th International Conference on Signal Processing and Integrated Networks(SPIN) (pp. 453–458). IEEE <br /> \
        - Published in IEEE Xplore effective from 20-04-2020. \
        ",
      },
      {
        "type": "research",
        "startDate": "DEC 2019",
        "endDate": "FEB 2020",
        "title": "Winter Research Intern",
        "subtitle": "Deep Learning Lab, NITK",
        "description": "- Worked on the segmentation and grading of kidney, liver cancer from histopathology images <br/> \
        - Worked on the detection of Urothelial Carcinoma from whole slide images with average dimensions of 80000x50000 <br/> \
        - Built an open-source repository benchmarking segmentation models on histopathology datasets <br/> \
        - Presented a report on various semantic and instance segmentation methods <br/> \
        ",
      },
      {
        "type": "research",
        "startDate": "MAY 2019",
        "endDate": "JUN 2019",
        "title": "Summer Research Intern",
        "subtitle": "Deep Learning Lab, NITK",
        "description": "- Worked on the efficient implementation of image processing algorithms on large datasets <br/> \
        - Worked on reproducing the results of seminal papers in the field of automated histopathology for the nuclear segmentation of histopathology images of kidney tissues.  ",
      },
      {
        "type": "work",
        "startDate": "AUG 2018",
        "endDate": "APR 2019",
        "title": "Frontend Developer & UI Designer",
        "subtitle": "IRIS, NITK",
        "description": "- Worked on building the frontend of IRIS-the official student managed digital portal of NITK, with more than \
        five thousand daily active users including students, faculty, administrators, and alumni.",
      },
      {
        "type": "work",
        "startDate": "MAY 2018",
        "endDate": "JUN 2018",
        "title": "Python Developer",
        "subtitle": "Pinnacle Media, Manipal",
        "description": "- Built and deployed real-time face detection and recognition, using OpenCV, dlib, and scikit-learn, on a Raspberry Pi as a part of an 'Employee Attendance' system.",
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
