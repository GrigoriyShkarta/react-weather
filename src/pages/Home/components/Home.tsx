import ThisDay from "./ThisDay/ThisDay";
import ThisDayInfo from "./ThisDayInfo/ThisDayInfo";
import Days from "./Days/Days";

import s from './Home.module.scss'


interface Props {

}

const Home = (props: Props) => {
    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay/>
                <ThisDayInfo/>
            </div>
            <Days/>
        </div>
    )
}

export default Home