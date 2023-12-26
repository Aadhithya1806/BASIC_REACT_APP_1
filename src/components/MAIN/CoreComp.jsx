export default function CoreComp({ image, title, description }) {
    // console.log(props);
    return (
        <li>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    );
}
