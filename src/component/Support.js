import face from "./face.jpg";
const Support = () => {


const mail = 'patryk@gmail.com'
const phone = '+48 123123123';


    return ( 

<div className="support">

<div className="info">
    <div className="left">
        <img src={face} alt="Picture"/>
    </div>
    <div className="right2">
        <h2>About me</h2>
        
        <article>
        Hi my name is Patryk, iam form Poland, also iam a student of computer science and cybersecurity. I enjoy working out and playing hockey.

        <h5>Mail: {mail}</h5>
        <h5>Phone number: {phone}</h5>
        </article>
    </div>
</div>

</div>
 );
}
 
export default Support;