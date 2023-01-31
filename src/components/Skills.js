/* import git from "../assets/img/Keras.svg"; */
import meter1 from "../assets/img/meter1.svg";
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
                        
                        <h3><br></br>Languages<br></br></h3>
                        <div class="column" responsive={responsive} infinite={true} className="owl-theme skill-slider">
                        
                            <div class="column" >
                                <img src="./images/python.png" alt="" />
                                <h6>Python</h6>
                            </div>
                            <div class="column" >
                            <img src="./images/html-5.png" alt="" />
                                <h6>HTML</h6>
                            </div>
                            <div class="column" >
                            <img src="./images/css.png" alt="" />
                                <h6>CSS</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/js.png" alt="" />
                                <h6>Java Script</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/java.png" alt="" />
                                <h6>Java</h6>
                            </div>
                            {/* jupiter notebook pycharm vanila js android js */}
                                                     
                        </div>
                        
                        <h3><br></br>UT Framework<br></br></h3>
                        <div class="column" responsive={responsive} infinite={true} className="owl-theme skill-slider">
                        
                            <div class="column" >
                                <img src="./images/pandas.png" alt="" />
                                <h6>Pandas</h6>
                            </div>
                            <div class="column" >
                            <img src="./images/numpy.png" alt="" />
                                <h6>NumPy</h6>
                            </div>
                            <div class="column" >
                            <img src="./images/matplotlib.png" alt="" />
                                <h6>Matplotlib</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/seaborn.png" alt="" />
                                <h6>Seaborn</h6>
                            </div>                           
                        </div>
                        <h3><br></br>Database<br></br></h3>
                        <div class="column" responsive={responsive} infinite={true} className="owl-theme skill-slider">
                        
                            <div class="column" >
                                <img src="./images/mysql.png" alt="" />
                                <h6>MySQL</h6>
                            </div>
                            <div class="column" >
                            <img src="./images/sql-server.png" alt="" />
                                <h6>SQL</h6>
                            </div>
                            <div class="column" >
                            <img src="./images/mongodb.png" alt="" />
                                <h6>MongoDB</h6>
                            </div>
                                                       
                        </div>
                        
                        {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src="./images/python.png" alt="" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src="./images/html-5.png" alt="" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src="./images/css.png" alt="" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src="./images/js.png" alt="" />
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Java</h5>
                            </div>
                        </Carousel>
                        <h3><br></br>UT Framework<br></br></h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Pandas</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>NumPy</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Matplotlib</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Seaborn</h5>
                            </div>
                        </Carousel>
                        <h3><br></br>Database<br></br></h3>
                        
                            <Carousel responsive={responsive} infinite={true}  className="owl-carousel owl-theme skill-slider"> 
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src="./images/sql.png" alt="" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src="./images/mongodb.png" alt="" />
                                <h5>MongoDB</h5>
                            </div>
                            
                            

                        </Carousel> 
                         */} 
                        <h3><br></br>Tools<br></br></h3>
                        <div class="column" responsive={responsive} infinite={true} className="owl-theme skill-slider">
                        
                            <div class="column" >
                                <img src="./images/git.png" alt="" />
                                <h6>Git</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/github.png" alt="" />
                                <h6>Github</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/flutter.png" alt="" />
                                <h6>Power BI</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/tableau.png" alt="" />
                                <h6>Tableau</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/keras.png" alt="" />
                                <h6>Keras</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/jupyter.png" alt="" />
                                <h6>Jupyter Notebook</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/android.jpeg" alt="" />
                                <h6>Android Studio</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/vanilla.jpeg" alt="" />
                                <h6>Vanilla JS</h6>
                            </div>
                            {/* jupiter notebook pycharm vanila js android js */}
                            <div class="column" >
                                <img src="./images/pytorch.png" alt="" />
                                <h6>PyTorch</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/pycharm.png" alt="" />
                                <h6>PyCharm</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/opencv.png" alt="" />
                                <h6>OpenCV</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/react.png" alt="" />
                                <h6>React</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/react-native.png" alt="" />
                                <h6>React Native</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/java.png" alt="" />
                                <h6>Java</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/kotlin.png" alt="" />
                                <h6>Kotlin</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/flutter.png" alt="" />
                                <h6>Flutter</h6>
                            </div>
                            <div class="column" >
                                <img src="./images/dart.png" alt="" />
                                <h6>Dart</h6>
                            </div>    
                        </div>               
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
