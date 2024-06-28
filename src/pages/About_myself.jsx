import img from '../assets/human.jpg'
export default function Home(){
    return (
        <div>
            <h2>About Me</h2>
            <div className="profile">
                <div>
                    <img src={img} alt="my Photograph" width="20%" height="20%" />
                    <p>國立台灣大學，機械所，鄭國彬</p>
                </div>
                <div className="intro">
                    <h3>introduction</h3>
                    <p>
                        welcome!我是台大學生，目前就讀機械所
                    </p>
                </div>
            </div>
        </div>
    );
}