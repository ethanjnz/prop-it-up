

const PersonCard = (props) => {
    const { firstname, lastname, hair, age } = props;

    return (
        <>
            <h2>{lastname}, {firstname} </h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hair}</p>
        </>
    )
}

export default PersonCard;
