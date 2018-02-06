import React, {Component} from 'react';

class Footer extends Component {

    render() {
        return (
            <footer id="contact" className="footer">
                <div className="container-fluid">
                    <div className="col-md-2 left">
                        <h4>Office Location</h4>
                        <p> Collins Street West Victoria 8007 Australia.</p>
                    </div>
                    <div classNameName="col-md-2 left">
                        <h4>Contact</h4>
                        <p> Call: 612.269.8419 <br/>
                            Email : <a href="mailto:hello@agency.com"> hello@agency.com </a></p>
                    </div>
                    <div className="col-md-2 left">
                        <h4>Social presense</h4>
                        <ul className="footer-share">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 right">
                        <p>© 2015 All rights reserved. All Rights Reserved<br/>
                            Made with <i className="fa fa-heart pulse"></i> by <a href="http://www.designstub.com/">Designstub</a></p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
