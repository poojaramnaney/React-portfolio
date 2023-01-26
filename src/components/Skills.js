import git from "../assets/img/Keras.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>As a Data Analyst, I am skilled in analyzing, interpreting, and communicating data. I have the ability to identify patterns, trends, and insights from large data sets using various analytical tools and techniques. I have good problem-solving skills and I am able to communicate effectively, and have an understanding of data governance and management.</p>
                        <h3>Languages<br></br></h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Java</h5>
                            </div>
                        </Carousel>
                        <h3><br></br>UT Framework<br></br></h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Pandas</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>NumPy</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Matplotlib</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Seaborn</h5>
                            </div>
                        </Carousel>
                        <h3><br></br>Database<br></br></h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div class="item">
                                <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"></img>
                                <hr />
                                <p class="text-box">GLASS</p>
                            </div>
                        </Carousel>
                        <div class="col-xs-2 col-sm-1 col-md-1 skill">
                                <img class="img-responsive" alt="" src="https://res.cloudinary.com/jawadrashid/image/upload/v1472747175/Portfolio/Skills/Data%20Science/Python.jpg" data-toggle="skills" title="Python" />
                        </div>
                        {/* 
                        <h3><br></br>Tools<br></br></h3>
                        
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Github</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Power BI</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Tableau</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Keras</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>PyTorch</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>OpenCV</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>React Native</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Kotlin</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Dart</h5>
                            </div>
 */}                      
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
