import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import ImgWText from '../ImgWText'
import imgStaff from '../../images/lacasa/staffcasa.jpg'

const useStyles = makeStyles((theme) => ({
    test : {

    }
}));

const Presentation = function () {
    const classes = useStyles()

    return (<>
            <ImgWText Text="blabla bla pendant mon stage blabla bla bla" Img={imgStaff}></ImgWText>
    </>)
}

export default Presentation;