const WaterQuality: React.FC = () => {
    return (
        <div className="w-full h-full">
            <iframe className="w-full h-1/2" src="http://ecobotdashboard1.co.kr:3200/d/homepage_dashboard_wq/dashboard-wq?orgId=1&">

            </iframe>
            <iframe className="w-full h-1/2" src="/grafana/d/homepage_dashboard_wq/dashboard-wq?orgId=1">

            </iframe>
        </div>
    )
}

export default WaterQuality