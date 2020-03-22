import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import BraveImg from './../../assets/img/brave.png';

function BraveSection() {
    return (
        <section className="brave-section">
            <div className="brave-content p-20">
                <Container>
                    <Grid container spacing={3} className="align-center">
                        <Grid item xs={12} md={6}>
                            <div className="comp-name">INTRODUCING BRAVE
                            </div>
                            <p>It's a web browser based on Google Chrome.</p>
                            <div className="comp-name">
                                Why should I download it?
                            </div>
                            <p>
                                It is the exact same thing as Chrome. And was built by the guy who created the Mozilla
                                Firefox browser.
                            </p>
                            <p>
                                Literally same code with enhanced security features
                            </p>
                            <div className="comp-name">
                                Want EVEN MORE REASONS???!!
                            </div>
                            <p>
                                Native Ad blocking
                                Native Crypto Wallet (NEEDED LATER TO GET PAID)
                            </p>
                            <button className="join-btn">join us</button>

                        </Grid>
                        <Grid item xs={12} md={6} className="right-img">
                            <div className="brave-img-wrapper">
                                <img src={BraveImg} alt="brave"/>
                            </div>
                        </Grid>

                    </Grid>
                </Container>
            </div>
        </section>
    )
}

export default BraveSection