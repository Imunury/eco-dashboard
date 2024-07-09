import { ecobot_status_temp } from '@prisma/client';
import { useRouter } from 'next/navigation';

interface RobotListProps {
    robotStatus: ecobot_status_temp[];
}


const RobotList: React.FC<RobotListProps> = ({ robotStatus }) => {

    const router = useRouter();

    const handleRobotClick = (robotId: string) => {
        router.push(`/control/${robotId}`);
    };

    return (
        <section className='w-1/6 overflow-y-auto'>
            {robotStatus.length > 0 ? (
                <ul>
                    {robotStatus.map((data, index) => {
                        const firstValue = data.motor_values && data.motor_values.length > 0 ? data.motor_values[0] : null;
                        const isMotorOn = firstValue === 1;

                        return (
                            <li key={index} onClick={() => handleRobotClick(data.robot_id)} className='p-3'>
                                <p>로봇 아이디 : {data.robot_id}</p>
                                <p>ON / OFF : {firstValue !== null ? (isMotorOn ? "ON" : "OFF") : "NO DATA"}</p>
                                <p>배터리(%) : {data.ctr_bat_soc !== null ? data.ctr_bat_soc : "NO DATA"}</p>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>Loading...</p>
            )}

        </section>
    )
}

export default RobotList;