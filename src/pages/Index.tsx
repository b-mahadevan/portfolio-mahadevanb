import { TypeAnimation } from 'react-type-animation';
const Index = () => {
  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="portfolio-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">MAHADEVAN B</span>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

    {/* Hero Section */}
<section id="home" className="hero-section">
  <div className="particles-bg">
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
  </div>

  <div className="hero-content">
    {/* Left: Photo */}
    <div className="hero-left">
      <div className="hero-photo">
        <img
          src="assets\photo.jpg"
          alt="Mahadevan's photo"
          className="profile-image"
        />
      </div>
    </div>

    {/* Right: Text */}
    <div className="hero-right">
      <div className="hero-3d-icons">
        <div className="icon-3d icon-code"></div>
        <div className="icon-3d icon-design"></div>
        <div className="icon-3d icon-mobile"></div>
      </div>

      <h1 className="hero-title">
        <TypeAnimation
          sequence={[
            'Data Scientist', 2500,
            'Data Analyst', 2500,
            'ML Engineer', 2500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="title-line"
        />
      </h1>

      <p className="hero-subtitle">
        Transforming data into impactful insights and intelligent systems. <br />
        Bridging analytics and machine learning to drive real-world innovation.
      </p>

      <div className="hero-buttons">
        <a href="#contact" className="cta-button primary">Contact Me</a>
        <a href="assets\MAHADEVAN B.pdf" className="cta-button secondary" target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </div>

      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/mahadevanbdatascientist/"
          className="social-link linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img
            src="assets\linkedin.png"
            className="social-icon"
            width={20}
            height={20}
          />
        </a>
        <a 
          href="https://github.com/b-mahadevan"
          className="social-link github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img
            src="assets\github.png"
            className="social-icon"
            width={20}
            height={20}
          />
        </a>
      </div>
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-blur-bg"></div>
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-paragraph">
                I am a passionate Data Science graduate with a strong foundation in Statistics and hands-on experience in data analysis, machine learning, and AI. 
                I hold a B.Sc. in Statistics from Government Arts College, Coimbatore, where I developed a deep understanding of probability, statistical inference, and data modeling. 
                I further enhanced my skills by completing an M.Sc. in Data Science from Bharathiar University, where I worked extensively with Python, machine learning, deep learning, and data visualization tools such as Power BI and Matplotlib.
                I’ve also completed projects including an AI-powered waste classification system and a player recommendation engine for IPL 2024, both of which demonstrated my ability to apply data science to real-world challenges.
              </p>
              <p className="about-paragraph">
                I’m driven by curiosity and love turning raw data into meaningful insights. I’m currently seeking opportunities in Data Science, Machine Learning, or Data Analytics where I can contribute, learn, and grow. 
                Let’s connect if you’re looking for someone skilled in Python, data analytics, and AI-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="section-blur-bg"></div>
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-timeline">
            <div className="education-item">
              <div className="education-date">2023 - 2025</div>
              <div className="education-content">
                <h3 className="education-title">M.Sc. in Data Science</h3>
                <h4 className="education-institution">Bharathiar University, Coimbatore</h4>
                <p className="education-description">
                  This postgraduate program provided a strong foundation in both theoretical and applied aspects of data science.<br /><br />
                  <strong>Core Areas:</strong> Data Science, Statistics, Data Mining, Multivariate Data Analysis<br />
                  <strong>Foundational Skills:</strong> Python Programming, Probability and Statistics, DBMS, Matplotlib, Power BI<br />
                  <strong>Advanced Topics:</strong> Machine Learning, Deep Learning Techniques, Big Data Analytics<br /><br />
                  Throughout the program, I gained hands-on experience in building predictive models, performing statistical analysis, and working with large-scale datasets using modern tools and technologies like Python, SQL, TensorFlow, and more.
                </p>

                <div className="education-achievements">
                  <span className="achievement-tag">CGPA: 8.52/10.00</span>
                </div>
              </div>
            </div>
            
            <div className="education-item">
              <div className="education-date">2020 - 2023</div>
              <div className="education-content">
                <h3 className="education-title">B.Sc. in Statistics</h3>
                <h4 className="education-institution">Government of Arts College, Coimbatore</h4>
                <p className="education-description">
                  This undergraduate program provided a strong foundation in statistical theory and applied methods, with exposure to programming, analytics, and mathematical modeling.<br /><br />
                  <strong>Core Areas:</strong> Descriptive Statistics, Probability and Distributions, Time Series & Index Numbers, Statistical Inference, Design of Experiments, Basic Sampling Theory, Statistical Quality Control<br />
                  <strong>Applied Skills:</strong> Elements of Econometrics, Operations Research, Actuarial Science, Psychological Statistics, Demographic Methods<br />
                  <strong>Tools & Technologies:</strong> C Programming for Statistical Analysis, Numerical Analysis, Optimization Techniques, Office Automation<br /><br />
                  Completed practical labs and a final project with viva voce, demonstrating strong applied analytical skills.
                </p>

                <div className="education-achievements">
                  <span className="achievement-tag">CGPA: 8.83/10.00</span>
                </div>
              </div>
            </div>
            
            <div className="education-item">
              <div className="education-date">2018 - 2020</div>
              <div className="education-content">
                <h3 className="education-title">HSC Second Year</h3>
                <h4 className="education-institution">PACM Boys Higher Secondary School, Rajapalayam</h4>
                <p className="education-description">
                  Completed Higher Secondary (Class 12) with a focus on Mathematics, Physics, Chemistry and Biology under the Tamil Nadu State Board.
                </p>
                <div className="education-achievements">
                  <span className="achievement-tag">CGPA: 8.83/10.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-blur-bg"></div>
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Nov 2024 - Present</div>
              <div className="timeline-content">
                <h3 className="timeline-title"> Data Analyst Intern</h3>
                <h4 className="timeline-company">LETS UNBOUND (ONLINE EDUCATION PLATFORM)</h4>
                <p className="timeline-description">
                  During my internship, I automated data pipelines by scraping over 5,000 LinkedIn profiles using Apollo.io and Sales Navigator, significantly reducing lead generation time by 35%. 
                  I handled data cleansing for more than 10,000 records using Excel and Python, which improved the accuracy of university program datasets by 20%. 
                  Additionally, I developed scalable Python scripts to extract over 50,000 data points, cutting down manual work by 30% and streamlining data processing tasks.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">Nov 2023 - May 2025</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Maths Content Associate</h3>
                <h4 className="timeline-company">LETS UNBOUND</h4>
                <p className="timeline-description">
                  As a Math Content Associate at Lets Unbound, I developed over 100 A-level mathematics presentations using Canva, which have been adopted by more than 500 students worldwide. 
                  I also designed mock assessments for competitive exams like Math Kangaroo and SCAT, contributing to a 25% improvement in student performance through well-structured practice and evaluation tools.
                </p>
              </div>
            </div>
            
      
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-card-front">
                  <div className="project-image"></div>
                  <h3 className="project-title">IPL 2024 Best XI</h3>
                  <p className="project-description">IPL team selector using Python & Power BI</p>
                </div>
                <div className="project-card-back">
                  <div className="project-details">
                    <h3>IPL 2024 Best XI</h3>
                    <p>Developed a data-driven IPL 2024 Best XI selection tool using Python and Power BI by analyzing over 17,000 deliveries and 260+ player profiles from ESPNcricinfo.</p>
                    <div className="project-tech">
                      <span className="tech-tag">Microsoft Power BI</span>
                      <span className="tech-tag">Pandas</span>
                      <span className="tech-tag">Web Scraping</span>
                    </div>
                    <div className="project-links">
                      <a href="https://www.linkedin.com/posts/mahadevanbdatascientist_ipl2024-cricketanalytics-datascienceproject-activity-7332991575892910080-aZaY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFITlsoB-_Ii2IEvKj-UotTM8x0wyvK0MP8" className="project-link">View Demo</a>
                      <a href="https://github.com/b-mahadevan/ipl_2024_smart_xi_selector" className="project-link">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-card-front">
                  <div className="project-image project-image-2"></div>
                  <h3 className="project-title">Rubbish Resolver</h3>
                  <p className="project-description">AI waste classifier with TensorFlow & Django</p>
                </div>
                <div className="project-card-back">
                  <div className="project-details">
                    <h3>Rubbish Resolver</h3>
                    <p>AI-powered waste classification system using CNN and TensorFlow, deployed via Streamlit and Django with 80%+ test accuracy.</p>
                    <div className="project-tech">
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">Deep Learning</span>
                      <span className="tech-tag">Convolutional Neural Networks</span>
                      <span className="tech-tag">TensorFlow</span>
                      <span className="tech-tag">Django</span>
                      <span className="tech-tag">Streamlit</span>
                    </div>
                    <div className="project-links">
                      <a href="https://www.linkedin.com/posts/mahadevanbdatascientist_django-machinelearning-deeplearning-activity-7327929177960062976-pI1E?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFITlsoB-_Ii2IEvKj-UotTM8x0wyvK0MP8" className="project-link">View Demo</a>
                      <a href="https://github.com/b-mahadevan/rubbish-resolver" className="project-link">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-card-front">
                  <div className="project-image project-image-3"></div>
                  <h3 className="project-title">Visualizing Data with Python</h3>
                  <p className="project-description">Data visualization with Python, Matplotlib, Plotly</p>
                </div>
                <div className="project-card-back">
                  <div className="project-details">
                    <h3>Visualizing Data with Python</h3>
                    <p>Used Python, Matplotlib, and Plotly to create static and interactive visualizations for simulations, weather analysis, and global earthquake mapping, showcasing skills in data extraction and transformation.</p>
                    <div className="project-tech">
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">Matplotlib</span>
                      <span className="tech-tag">Plotly</span>
                    </div>
                    <div className="project-links">
                      <a href="https://www.linkedin.com/posts/mahadevanbdatascientist_python-datavisualization-plotly-activity-7332264338864431104-ZaHK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFITlsoB-_Ii2IEvKj-UotTM8x0wyvK0MP8" className="project-link">View Demo</a>
                      <a href="https://github.com/b-mahadevan/visualizing_data_with_python" className="project-link">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-blur-bg"></div>
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-container">
            <div className="skills-category">
              <h3 className="category-title">Industry Knowledge</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon skill-icon-ml"></div>
                  <h4 className="skill-name">Machine Learning</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-dl"></div>
                  <h4 className="skill-name">Deep Learning</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '70%'}}></div>
                  </div>
                  <span className="skill-percentage">70%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-cnn"></div>
                  <h4 className="skill-name">CNNs</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '65%'}}></div>
                  </div>
                  <span className="skill-percentage">65%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-datascience"></div>
                  <h4 className="skill-name">Data Science</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-statistics"></div>
                  <h4 className="skill-name">Statistics</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                  <span className="skill-percentage">95%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-scraping"></div>
                  <h4 className="skill-name">Web Scraping</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-timeseries"></div>
                  <h4 className="skill-name"> Time Series Analysis</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-cleaning"></div>
                  <h4 className="skill-name">Data Cleaning</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '92%'}}></div>
                  </div>
                  <span className="skill-percentage">92%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-visualization"></div>
                  <h4 className="skill-name">Data Visualization</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '93%'}}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-gcp"></div>
                  <h4 className="skill-name">Google Cloud Platform</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-dbms"></div>
                  <h4 className="skill-name">DBMS</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                  <span className="skill-percentage">80%</span>
                </div>
              </div>
            </div>
            
            <div className="skills-category">
              <h3 className="category-title">Tools & Technologies</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon skill-icon-python"></div>
                  <h4 className="skill-name">Python</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '96%'}}></div>
                  </div>
                  <span className="skill-percentage">96%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-pandas"></div>
                  <h4 className="skill-name">Pandas</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-numpy"></div>
                  <h4 className="skill-name"> NumPy</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-scikit"></div>
                  <h4 className="skill-name"> Scikit-learn</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-tensorflow"></div>
                  <h4 className="skill-name"> TensorFlow</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '87%'}}></div>
                  </div>
                  <span className="skill-percentage">87%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-keras"></div>
                  <h4 className="skill-name"> Keras </h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-pytorch"></div>
                  <h4 className="skill-name"> PyTorch</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-powerbi"></div>
                  <h4 className="skill-name"> Power BI</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '94%'}}></div>
                  </div>
                  <span className="skill-percentage">94%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-matplotlib"></div>
                  <h4 className="skill-name"> Matplotlib</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '94%'}}></div>
                  </div>
                  <span className="skill-percentage">94%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-seaborn"></div>
                  <h4 className="skill-name"> Seaborn</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-plotly"></div>
                  <h4 className="skill-name"> Plotly</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '93%'}}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-tableau"></div>
                  <h4 className="skill-name"> Tableau</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '77%'}}></div>
                  </div>
                  <span className="skill-percentage">77%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-streamlit"></div>
                  <h4 className="skill-name"> Streamlit</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-django"></div>
                  <h4 className="skill-name"> Django</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-sql"></div>
                  <h4 className="skill-name"> SQL</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '87%'}}></div>
                  </div>
                  <span className="skill-percentage">87%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-git"></div>
                  <h4 className="skill-name"> Git</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '96%'}}></div>
                  </div>
                  <span className="skill-percentage">96%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-excel"></div>
                  <h4 className="skill-name"> Microsoft Excel</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '97%'}}></div>
                  </div>
                  <span className="skill-percentage">97%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-canva"></div>
                  <h4 className="skill-name"> Canva</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '98%'}}></div>
                  </div>
                  <span className="skill-percentage">98%</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-subtitle">Let's work together</h3>
              <p className="contact-text">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>mahadevanb2002@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+91 7339658543</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>
            <form
              className="contact-form"
              action="https://formspree.io/f/xblyddzg"
              method="POST"
            >
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" className="form-input" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" className="form-textarea" rows={5} required></textarea>
              </div>
                <button type="submit" className="form-submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
