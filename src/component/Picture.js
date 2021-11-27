

const Picture = ({data}) => {

    return ( 


<div className="container">
    <div className="left">
       <img src={data.url} alt=" Pic of the day" />

    </div>
    <div className="right">
        <h1>{data.title}</h1>
         <p>{data.date}</p>
        <article>
        {data.explanation}
        </article>
    </div>
</div>

   
 );
}
 
export default Picture;