import React from 'react'
import './Achivements.scss'

import { GiProgression } from 'react-icons/gi'
import { HiOutlineSupport } from 'react-icons/hi'
import { VscServerProcess } from 'react-icons/vsc'

const Achivements = () => {
    return (
        <>
            <div className="achivements__header">
                <h2>Achivements</h2>
            </div>
            <div className="achivements__blocks">
                <div className="blocks__item">
                    <div className="blocks-icon">
                        <GiProgression size={40}/>
                    </div>
                    <div className="blocks-content">
                        <h3>100% percentage visa successful rate</h3>
                        <p>We have a 100 % success rate for obtaining visa approvals for Germany. Our visa approval rate is higher when compared to other institutes.</p>
                    </div>
                </div>

                <div className="blocks__item">
                    <div className="blocks-icon">
                        <VscServerProcess size={43}/>
                    </div>
                    <div className="blocks-content">
                        <h3>500+ students already enrolled</h3>
                        <p>More than 500 students have enrolled in career@germany to learn German, with enrollment gradually increasing day by day.</p>
                    </div>
                </div>

                <div className="blocks__item">
                    <div className="blocks-icon">
                        <HiOutlineSupport size={45}/>
                    </div>
                    <div className="blocks-content">
                        <h3>Online and offline section by experts</h3>
                        <p>Our B2 qualified experts offer both online and offline courses for successful language learning, providing students with an initial learning curve.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Achivements