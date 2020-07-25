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
      "Neuroscience of Vision",
      "Neuroscience of Motor control",
      "Computer Vision",
      "Cybernetics",
      "Mixed Reality",
    ],
    skillData: [
      {
        "type": "Research Areas",
        "skills": ["Computer Vision", "Image Processing", "Signal Processing", "Medical Imaging"]
      },
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
        "type":        "project",
        "startDate":   "PRESENT",
        "title":       "Satellite Detection",
        "subtitle":    "Detecting satellites in images from low-cost telescopes",
        "description": "Working on the design and development of a model to detect orbiting objects in the geostationary ring, \
        from sequences of consecutive frames imaging unknown portions of the sky, \
        as a part of the the <a href='https://kelvins.esa.int/spot-the-geo-satellites/'>spotGEO</a> competition \
        organised by the European Space Agency (ESA). \
        "
      },
      {
        "type":        "project",
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
        "type":        "project",
        "startDate":   "JUN 2020",
        "endDate":     "PRESENT",
        "title":       "Melanoma Classification",
        "subtitle":    "Identifying skin Melanoma in images of skin lesions",
        "description": "Working on building an ensemble network of multiple detection models to accurately detect skin cancer, \
        specifically Melanoma, in images of skin lesions as a part of the \
        <a href='https://www.kaggle.com/c/siim-isic-melanoma-classification'>SIIM-ISIC Melanoma Classification Challenge</a> on Kaggle. \
        "
      },
      {
        "type":        "publication",
        "endDate":     "FEB 2020",
        "title":       "A Robust Method for Nuclei Segmentation of H&E Stained Histopathology Images",
        "subtitle":    "Lal, S., Dsouza, R., Maneesh, M., Kanfade, A., Kumar, A., Perayil, G., Alabhya, K., Chanchal, A.K. and Kini, J. ",
        "description": "- 7th International Conference on Signal Processing and Integrated Networks(SPIN) (pp. 453–458). IEEE <br /> \
        - Published in IEEE Xplore effective from 20-04-2020. \
        ",
      },
      {
        "type":        "research",
        "startDate":   "DEC 2019",
        "endDate":     "FEB 2020",
        "title":       "Winter Research Intern",
        "subtitle":    "Deep Learning Lab, NITK",
        "description": "- Worked on the segmentation and grading of kidney, liver cancer from histopathology images <br/> \
        - Worked on the detection of Urothelial Carcinoma from whole slide images with average dimensions of 80000x50000 <br/> \
        - Built an open-source repository benchmarking segmentation models on histopathology datasets <br/> \
        - Presented a report on various semantic and instance segmentation methods <br/> \
        ",
      },
      {
        "type":        "project",
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
        "type": "project",
        "startDate": "JUL 2019",
        "endDate": "AUG 2019",
        "title": "Fake news detector",
        "subtitle": "Predicting the truth level of news articles",
        "description": "- Built a model to classify news articles into 6 different categories based on their truth level. <br/> \
        - The model was trained on the LIAR-PLUS dataset containing news articles and fact-checking justifications from trusted sources. \
        "
      },
      {
        "type":        "research",
        "startDate":   "MAY 2019",
        "endDate":     "JUN 2019",
        "title":       "Summer Research Intern",
        "subtitle":    "Deep Learning Lab, NITK",
        "description": "- Worked on the efficient implementation of image processing algorithms on large datasets <br/> \
        - Worked on reproducing the results of seminal papers in the field of automated histopathology for the nuclear segmentation of histopathology images of kidney tissues.  ",
      },
      {
        "type":        "work",
        "startDate":   "AUG 2018",
        "endDate":     "APR 2019",
        "title":       "Frontend Developer & UI Designer",
        "subtitle":    "IRIS, NITK",
        "description": "- Worked on building the frontend of IRIS-the official student managed digital portal of NITK, with more than \
        five thousand daily active users including students, faculty, administrators, and alumni.",
      },
      {
        "type": "project",
        "endDate": "APR 2019",
        "title": "STAP Radar",
        "subtitle": "Space Time Adaptive Processing",
        "description": "- This project involved presenting a report on the current state of STAP in Radar Signal Processing. <br /> \
        - The report contained a MATLAB simulation of a radar implementing STAP. \
        "
      },
      {
        "type":        "work",
        "startDate":   "MAY 2018",
        "endDate":     "JUN 2018",
        "title":       "Python Developer",
        "subtitle":    "Pinnacle Media, Manipal",
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
