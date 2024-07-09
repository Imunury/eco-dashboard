import ONOFF from '../components/ONOFF'
import RobotInfo from '../components/RobotInfo'
import CCTV from '../components/CCTV'

export default async function Control() {

    return (
        <section>
            <ONOFF />
            <RobotInfo />
            <CCTV />
        </section>
    )
}
