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
    interestData: [
      "Computer Vision",
      "Mixed Reality",
      "Low power computing",
      "Information Security"
    ],
    skillData: [
      {
        "type": "Research Areas",
        "skills": ["Computer Vision", "Image Processing", "Signal Processing", "Medical Imaging"]
      },
      {
        "type": "Programming Languages",
        "skills": ["Python", "C", "C++", "Golang", "JavaScript", "Verilog", "ngSPICE"]
      },
      {
        "type": "Deep Learning",
        "skills": ["Pytorch", "Keras", "scikit-learn"]
      },
      {
        "type": "Data Science",
        "skills": ["Pandas", "NumPy", "Matplotlib", "Google BigQuery", "SQL"]
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
        "type": "Tools",
        "skills": ["git", "vim", "PyCharm", "bash/zsh/fish", "Linux", "Docker", "TravisCI"]
      },
      {
        "type": "Spoken Languages",
        "skills": ["English", "Hindi", "Kannada", "Konkani"],
      },
    ],
    timelineData: [ 
      {
        "type":        "project",
        "icon":        "tool",
        "startDate":   "AUG 2020",
        "endDate":     "PRESENT",
        "title":       "Night Sight",
        "subtitle":    "Low light image enhancement on low power devices",
        "description": "Working on the design of hardware and software optimized algorithms to enable people to \
        capture vibrant and detailed low-light photos with inexpensive camera sensors.\
        "
      },
      {
        "type": "research",
        "icon": "flare",
        "endDate": "JUL 2020",
        "title": "Full-time Research Intern",
        "subtitle": "ML Lab, RBCCPS, IISc",
        "description": "- Selected to work as a full-time intern on a project involving Simultaneous Localization & Mapping (SLAM) <br /> \
        - <strong>Rescinded due to schedule conflicts arising from COVID-19.</strong> \
        "
      },
      {
        "type":        "project",
        "icon":        "tool",
        "endDate":     "JUL 2020",
        "title":       "Image denoising",
        "description": "- Reproduced a very deep persistent memory network to perform image restoration by removing noise and \
        predicting uncorrupted images. <br />\
        - The model was trained on images from the \
        <a href='https://www2.eecs.berkeley.edu/Research/Projects/CS/vision/bsds/'>Berkeley Segmentation Dataset</a> (BSDS300) \
        and tested on a modified version of the CIFAR10 dataset. \
        "
      },
      {
        "type":        "research",
        "icon":        "flare",
        "endDate":     "MAR 2020",
        "title":       "NavTrack: A portable obstacle tracker for the rehabilitation of spatial neglect",
        "subtitle":    "HEPIA, Geneva",
        "description": "- Recieved a grant of CHF 4200 to conduct research at \
        Haute École Du Paysage, D'ingénierie Et D'architecture De Genève under Prof. Flörent Gluck. <br />\
        - <strong>Rescinded due to COVID-19.</strong>"
      },
      {
        "type": "project",
        "icon": "tool",
        "startDate": "MAR 2020",
        "endDate": "JUN 2020",
        "title": "Muon Physics",
        "subtitle": "Using deep learning for particle physics",
        "description": "- Designed a custom model to classify muon momenta using a tabular dataset of variables and parameters. <br /> \
        - The model was trained on monte-carlo simulated data from the Cathode Strip Chambers (CSC) \
        at the CMS experiment of the Large Hadron Collider at CERN.\
        "
      },
      {
        "type":        "publication",
        "icon":        "star",
        "endDate":     "FEB 2020",
        "title":       "A Robust Method for Nuclei Segmentation of H&E Stained Histopathology Images",
        "subtitle":    "Lal, S., Dsouza, R., Maneesh, M., Kanfade, A., Kumar, A., Perayil, G., Alabhya, K., Chanchal, A.K. and Kini, J. ",
        "description": "- 7th International Conference on Signal Processing and Integrated Networks(SPIN) (pp. 453–458). IEEE <br /> \
        - Published in IEEE Xplore effective from 20-04-2020. \
        ",
      },
      {
        "type":        "research",
        "icon":        "hat",
        "startDate":   "DEC 2019",
        "endDate":     "FEB 2020",
        "title":       "Winter Research Intern",
        "subtitle":    "Deep Learning Lab, NITK",
        "description": "- Worked on the segmentation and grading of kidney, liver cancer from histopathology images. <br/> \
        - Worked on the detection of Urothelial Carcinoma from whole slide images with average dimensions of 80000x50000. <br/> \
        - Built an open-source repository benchmarking segmentation models on histopathology datasets. <br/> \
        - Presented a report comparing various semantic and instance segmentation methods \
        for the nuclear segmentation of histopathology images. <br/> \
        ",
      },
      {
        "type":        "project",
        "icon":        "tool",
        "endDate":     "DEC 2019",
        "title":       "Brain tumour Segmentation",
        "description": "Reproduced state-of-the-art multi-class semantic segmentation models in Keras/TFv1 \
        and trained them on a part of the \
        <a href='http://braintumorsegmentation.org/'>BraTS</a> dataset \
        to segment brain tumours and the surrounding edema from MRI images. \
        "
      },
      {
        "type":        "project",
        "icon":        "tool",
        "startDate":   "AUG 2019",
        "endDate":     "SEP 2019",
        "title":       "Ponzi detector",
        "subtitle":    "Detecting Ponzi schemes in smart contracts",
        "description": "- Built a custom model to detect Ponzi smart contracts deployed on the Ethereum blockchain \
        using CNNs and stacked autoencoders. <br/> \
        - The model was trained on the raw bytecode of Ethereum smart contracts mined from the Ethereum blockchain using Google BigQuery, \
        publicly available Solidity source code of popular smart contracts, \
        and a publicly available dataset of known Ponzi schemes. <br /> \
        - The model was built in under 48h as a part of a deep-learning coding sprint. \
        "
      },
      {
        "type":        "project",
        "icon":        "tool",
        "startDate":   "JUL 2019",
        "endDate":     "AUG 2019",
        "title":       "Fake news detector",
        "subtitle":    "Predicting the truth level of news articles",
        "description": "- Built a model to classify news articles into 6 different categories based on their truth level. <br/> \
        - The model was trained on the LIAR-PLUS dataset containing news articles and fact-checking justifications from trusted sources. \
        "
      },
      {
        "type":        "research",
        "icon":        "hat",
        "startDate":   "MAY 2019",
        "endDate":     "JUN 2019",
        "title":       "Summer Research Intern",
        "subtitle":    "Deep Learning Lab, NITK",
        "description": "- Worked on the efficient implementation of image processing algorithms on large datasets. <br/> \
        - Worked on reproducing the results of seminal papers in the field of automated histopathology for the nuclear segmentation of histopathology images of kidney tissues.  ",
      },
      {
        "type":        "project",
        "icon":        "tool",
        "endDate":     "APR 2019",
        "title":       "STAP Radar",
        "subtitle":    "Space Time Adaptive Processing",
        "description": "- This project involved presenting a report on the current state of STAP in Radar Signal Processing. <br /> \
        - The report contained a MATLAB simulation of a radar implementing STAP. \
        "
      },
      {
        "type":        "work",
        "icon":        "work",
        "startDate":   "AUG 2018",
        "endDate":     "APR 2019",
        "title":       "Frontend Developer & UI Designer",
        "subtitle":    "IRIS, NITK",
        "description": "- Worked on building the frontend of IRIS-the official student managed digital portal of NITK, with more than \
        five thousand daily active users including students, faculty, administrators, and alumni.",
      },
      {
        "type":      "work",
        "icon":      "work",
        "startDate": "MAY 2018",
        "endDate":   "JUN 2018",
        "title":     "Python Developer",
        "subtitle":  "Pinnacle Media, Manipal",
        "description": "- Built and deployed real-time face detection and recognition, using OpenCV, dlib, and scikit-learn, on a Raspberry Pi as a part of an 'Employee Attendance' system.",
      },
    ],
    menuLinks: [
      {
        name: 'home',
        link: '/'
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
