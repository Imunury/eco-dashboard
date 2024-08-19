'use client'

import { useParams } from 'next/navigation';

const CCTV: React.FC = () => {

    const params = useParams();
    const id = params?.id as string | undefined

    return (
        <iframe src={`https://ecobotdashboard1.co.kr/${id}/`} className='w-full h-full'>

        </iframe>
    )
}

export default CCTV