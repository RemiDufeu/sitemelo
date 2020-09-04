import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import Carousel from '../carousel'

import mail1 from '../../images/newsletter/mailplage.JPG'
import mail2 from '../../images/newsletter/marquepage.JPG'
import mail3 from '../../images/newsletter/promolivre.JPG'
import mail4 from '../../images/newsletter/boxfetedesmeres.JPG'
import mail5 from '../../images/newsletter/commandeexpedie.JPG'
import mail6 from '../../images/newsletter/aviscommande.JPG'



const useStyles = makeStyles((theme) => ({
    titreSect : {
        padding: "15px 0",
        paddingTop: "35px"
    },
}));

const Newsletter = function () {
    const classes = useStyles()

    return (<div  >
        <Typography variant="h4" color="primary" className={classes.titreSect}>Mise en place d'une Newsletter</Typography>
        <Carousel imgs={[mail1,mail2,mail3,mail4,mail5,mail6]} nbImgScroll={2} nbImgVisible={2} />
    </div>)
}

export default Newsletter;