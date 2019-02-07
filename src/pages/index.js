import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/1-min.jpg'
import thumb02 from '../assets/images/thumbs/2-min.jpg'
import thumb03 from '../assets/images/thumbs/3-min.jpg'
import thumb04 from '../assets/images/thumbs/4-min.jpg'
import thumb05 from '../assets/images/thumbs/5-min.jpg'
import thumb06 from '../assets/images/thumbs/6-min.jpg'
import thumb07 from '../assets/images/thumbs/8-min.jpg'
import thumb08 from '../assets/images/thumbs/7-min.jpg'
import thumb09 from '../assets/images/thumbs/9-min.jpg'
import thumb10 from '../assets/images/thumbs/10-min.jpg'
import thumb11 from '../assets/images/thumbs/11-min.jpg'
import thumb12 from '../assets/images/thumbs/12-min.jpg'
import thumb13 from '../assets/images/thumbs/13-min.jpg'
import thumb14 from '../assets/images/thumbs/14-min.jpg'
import thumb15 from '../assets/images/thumbs/15-min.jpg'
import thumb16 from '../assets/images/thumbs/16-min.jpg'
import thumb17 from '../assets/images/thumbs/17-min.jpg'
import thumb18 from '../assets/images/thumbs/18-min.jpg'
import thumb19 from '../assets/images/thumbs/19-min.jpg'
import thumb20 from '../assets/images/thumbs/20-min.jpg'

import full01 from '../assets/images/fulls/1.jpg'
import full02 from '../assets/images/fulls/2.jpg'
import full03 from '../assets/images/fulls/3.jpg'
import full04 from '../assets/images/fulls/4.jpg'
import full05 from '../assets/images/fulls/5.jpg'
import full06 from '../assets/images/fulls/6.jpg'
import full07 from '../assets/images/fulls/8.jpg'
import full08 from '../assets/images/fulls/7.jpg'
import full09 from '../assets/images/fulls/9.jpg'
import full10 from '../assets/images/fulls/10.jpg'
import full11 from '../assets/images/fulls/11.jpg'
import full12 from '../assets/images/fulls/12.jpg'
import full13 from '../assets/images/fulls/13.jpg'
import full14 from '../assets/images/fulls/14.jpg'
import full15 from '../assets/images/fulls/15.jpg'
import full16 from '../assets/images/fulls/16.jpg'
import full17 from '../assets/images/fulls/17.jpg'
import full18 from '../assets/images/fulls/18.jpg'
import full19 from '../assets/images/fulls/19.jpg'
import full20 from '../assets/images/fulls/20.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01},
    { id: '2', src: full02, thumbnail: thumb02},
    { id: '3', src: full03, thumbnail: thumb03},
    { id: '4', src: full04, thumbnail: thumb04},
    { id: '5', src: full05, thumbnail: thumb05},
    { id: '6', src: full06, thumbnail: thumb06},
                        {id: '7', src: full07, thumbnail: thumb07},
                        { id: '8', src: full08, thumbnail: thumb08},
                        { id: '9', src: full09, thumbnail: thumb09},
                        { id: '10', src: full10, thumbnail: thumb10},
                        { id: '11', src: full11, thumbnail: thumb11},
                        { id: '12', src: full12, thumbnail: thumb12},
                        { id: '13', src: full13, thumbnail: thumb13},
                        { id: '14', src: full14, thumbnail: thumb14},
                        { id: '15', src: full15, thumbnail: thumb15},
                        { id: '16', src: full16, thumbnail: thumb16},
                       { id: '17', src: full17, thumbnail: thumb17},
                        { id: '18', src: full18, thumbnail: thumb18},
                        { id: '19', src: full19, thumbnail: thumb19},
                        { id: '20', src: full20, thumbnail: thumb20}
    
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Sarah Panzer - Personal Website"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                

                    <section id="one">
                        <h2>Photography Portfolio</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail }) => ({
                            src,
                            thumbnail
                        }))} />
                    </section>
                
               

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
