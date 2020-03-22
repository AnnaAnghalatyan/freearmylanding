import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import IntroImg from './../../assets/img/home-left.png'

let style = {
    alignItems: 'center'
}
function Header() {
    return (
        <section className="intro">
            <nav className='p-20 '>
                <Container>
                    <Grid container spacing={3} style={style}>
                        <Grid item xs={12} sm={6}>
                            <div className="comp-name">FREE.ARMY</div>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <div className="btn-wrapper">
                                <button className="join-btn">join us</button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </nav>
            <Container>
                <div className="intro-section">
                    <Grid container style={style}>
                        <Grid item xs={12} sm={6}>
                            <div className="intro-img">
                                <img src={IntroImg} alt="home" />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <div className="comp-name">
                                WHAT IS FREE ARMY?
                            </div>
                            <p>Free Army is very simply a method by which we show you how to cash out on referral programs that are available.

                                Some companies will pay you anywhere from $5-$100 just to set up an account... Even if you never use it.

                                Whats in it for us?

                                We make money by sending you to them. No gimmicks. This is a simple site.

                                Let's get started.</p>
                        </Grid>
                    </Grid>
                </div>

            </Container>

        </section>
    )
}

export default Header