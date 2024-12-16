import { Link } from "react-router-dom";

export default function Subjects() {
    return (<>
        <Link to="/subjects/algorithm" className="bg-card p-6 rounded-3xl shadow-md flex items-center justify-center aspect-square z-10">
            <h1 className="text-card-foreground text-md font-bold text-center">
                산학협력캡스톤설계1
            </h1>
        </Link>
        <Link to="/subjects/programming" className="bg-primary p-6 rounded-3xl shadow-md flex items-center justify-center aspect-square z-10">
            <h1 className="text-white text-md font-bold text-center">
                소프트웨어공학
            </h1>
        </Link>
        <Link to="/subjects/algorithm" className="bg-card p-6 rounded-3xl shadow-md flex items-center justify-center aspect-square z-10">
            <h1 className="text-card-foreground text-md font-bold text-center">
                딥러닝실습
            </h1>
        </Link>
        <Link to="/subjects/algorithm" className="bg-primary p-6 rounded-3xl shadow-md flex items-center justify-center aspect-square z-10">
            <h1 className="text-white text-md font-bold text-center">
                정보시스템응용
            </h1>
        </Link>
        <Link to="/subjects/algorithm" className="bg-card p-6 rounded-3xl shadow-md flex items-center justify-center aspect-square z-10">
            <h1 className="text-card-foreground  text-md font-bold text-center">
                네트워크보안
            </h1>
        </Link>
        <Link to="/subjects/programming" className="bg-primary p-6 rounded-3xl shadow-md flex items-center justify-center aspect-square z-10">
            <h1 className="text-white text-md font-bold text-center">
                무선네트워크
            </h1>
        </Link>
        <Link to="/subjects/algorithm" className="bg-card p-6 rounded-3xl shadow-md flex items-center justify-center aspect-square z-10">
            <h1 className="text-card-foreground text-md font-bold text-center">
                기계학습
            </h1>
        </Link>
        <Link to="/subjects/programming" className="bg-primary p-6 rounded-3xl shadow-md flex items-center justify-center aspect-square z-10">
            <h1 className="text-white text-md font-bold text-center">
                가상세계
            </h1>
        </Link>
        <Link to="/subjects/algorithm" className="bg-card p-6 rounded-3xl shadow-md flex items-center justify-center aspect-square z-10">
            <h1 className="text-card-foreground text-md font-bold text-center">
                데이터통신
            </h1>
        </Link>
        <Link to="/subjects/programming" className="bg-primary p-6 rounded-3xl shadow-md flex items-center justify-center aspect-square z-10">
            <h1 className="text-white text-md font-bold text-center">
                운영체제
            </h1>
        </Link>
        <Link to="/subjects/algorithm" className="bg-card p-6 rounded-3xl shadow-md flex items-center justify-center aspect-square z-10">
            <h1 className="text-card-foreground text-md font-bold text-center">
                디지털논리
            </h1>
        </Link>
        <Link to="/subjects/programming" className="bg-primary p-6 rounded-3xl shadow-md flex items-center justify-center aspect-square z-10">
            <h1 className="text-white text-md font-bold text-center">
                이산수학
            </h1>
        </Link>  
        </>
    )
}