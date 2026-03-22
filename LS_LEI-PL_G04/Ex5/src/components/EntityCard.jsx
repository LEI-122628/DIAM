function EntityCard({ name, image, description, participation }) {
    return (
        <div className="entity-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Participation: {participation}</p>
        </div>
    )
}

export default EntityCard
