
interface Props {
    title: string
    img: string
    descreption: string
    color:string
}

function Card(props: Props) {
    let color = props.color

    const myStyle = {width: '200px', border: '1px solid black', borderRadius: '15px', backgroundColor: color};

  
   

  return (
    <div style={myStyle}>
        <h2 >{props.title}</h2>
        <img src={props.img} width={'100px'}/>
        <p>{props.descreption}</p>
    </div>
  )
}

export default Card