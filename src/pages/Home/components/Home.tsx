import ThisDay from "./ThisDay/ThisDay";
import ThisDayInfo from "./ThisDayInfo/ThisDayInfo";

import s from './Home.module.scss'

interface Props {

}

const Home = (props: Props) => {
    return (
        <div className={s.home}>
            <ThisDay/>
            <ThisDayInfo/>
        </div>
    )
}

export default Home