import React from 'react'

import ImgWText from '../ImgWText'
import imgStaff from '../../images/lacasa/staffcasa.jpg'

import InitialFade from '../initialFade'

const Presentation = function () {
    
    return (<InitialFade>
            <ImgWText Text="La communauté d'agglomération Sophia Antipolis regroupe de nombreuses communes (Antibes, Vallauris, Biot, Villeneuve-Loubet, Valbonne...). La CASA a pour mission de promouvoir la culture au sein de son agglomération. Elle organise donc de nombreux évènements et notamment le salon du livre jeunesse." Img={imgStaff}></ImgWText>
    </InitialFade>)
}

export default Presentation; 