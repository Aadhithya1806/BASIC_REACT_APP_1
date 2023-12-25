export default function CoreComp({ img, title, desc }) {
    return (
        <li>
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{desc}</p>
        </li>
    );
}
