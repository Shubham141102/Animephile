import AiringCard from "./AiringCard";
export default function Following(props) {
    
      const cards = props.name.map((item) => {
        return (
            // <AiringCard item={item}/>
            <h1>{item}</h1>
        )
      })
    return(
        <>
            <h1>Followers</h1>
            {cards}
        </>
    );
}