import React, {Component} from 'react';

class Slider extends Component {

    render() {
        return (
            <section id="header-slider" className="section">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">

                    {/*Indicators*/}
                    {/*<ol className="carousel-indicators">*/}
                        {/*<li data-target="#myCarousel" data-slide-to="0" className="active"></li>*/}
                        {/*<li data-target="#myCarousel" data-slide-to="1"></li>*/}
                    {/*</ol>*/}

                    {/*Wrapper for slides */}
                    <div className="carousel-inner" role="listbox">
                        <div className="item active"><img src="images/slider/home.jpg" alt="home"/>
                            <div className="carousel-caption">
                                <h3 className="sliderH3">Hoje para jantar</h3>
                                <p className="sliderP">para os amantes da cozinha</p>
                            </div>
                        </div>
                        {/*<div className="item"><img src="images/slider/slid2.jpg" alt="Chania"/>*/}
                            {/*<div className="carousel-caption">*/}
                                {/*<h3>Minimal Agency Template</h3>*/}
                                {/*<p>We're Australia based branding & design agency</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>

                    {/*Controls*/}
                    {/*<a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">*/}
                        {/*<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>*/}
                        {/*<span className="sr-only">Previous</span>*/}
                    {/*</a>*/}
                    {/*<a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">*/}
                        {/*<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>*/}
                        {/*<span className="sr-only">Next</span>*/}
                    {/*</a>*/}
                </div>
            </section>
        )
    }
}

export default Slider;
