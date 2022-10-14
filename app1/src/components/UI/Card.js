import './Card.css'

const Card = (props) => {
    const class_name = "card " + props.className
    return <div className={class_name}>{props.children}</div>
}
export default Card