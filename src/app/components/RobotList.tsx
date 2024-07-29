import { ecobot_status_temp } from '@prisma/client';
import { useRouter, usePathname } from 'next/navigation';

interface RobotListProps {
    robotList: ecobot_status_temp[];
}

const RobotList: React.FC<RobotListProps> = ({ robotList }) => {
    const router = useRouter();
    const pathname = usePathname() || '';

    const handleRobotClick = (robotId: string) => {
        if (pathname.startsWith('/control')) {
            router.push(`/control/${robotId}`);
        } else if (pathname.startsWith('/tracking_map')) {
            router.push(`/tracking_map/${robotId}`);
        }
    };

    console.log(robotList)

    return (
        <section className='w-1/6 overflow-y-auto'>
            {robotList.length > 0 ? (
                <ul>
                    {robotList.map((data, index) => {
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
    );
};

export default RobotList;
