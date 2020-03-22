import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Icon from './../../assets/img/home-left.png';

function AboutUs() {
    return (
        <section className="about-us">
            <div className="brave-content p-20">
                <Container>
                    <Grid container spacing={3} className="align-center">

                        <Grid item xs={12}>
                            <div className="about-header">
                                <img width={65} src={Icon} alt="about"/>
                                <span className="comp-name">About us</span>
                            </div>
                            <div className="p-20">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quo, vero. Consequatur
                                deleniti iusto nobis obcaecati, odit pariatur. A autem doloribus ducimus esse neque nisi
                                optio quibusdam rerum similique sit!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quo, vero. Consequatur
                                deleniti iusto nobis obcaecati, odit pariatur. A autem doloribus ducimus esse neque nisi
                                optio quibusdam rerum similique sit!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quo, vero. Consequatur
                                deleniti iusto nobis obcaecati, odit pariatur. A autem doloribus ducimus esse neque nisi
                                optio quibusdam rerum similique sit!
                            </div>
                        </Grid>

                    </Grid>
                </Container>
            </div>
        </section>
    )
}

export default AboutUs