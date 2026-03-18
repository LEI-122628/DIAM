import EntityCard from "./EntityCard";
import companies from "../companies.json";

function Gallery() {
    return (
        <div>
            <h3>Participating Companies</h3>
            <div className="gallery">
                {companies.map((company) => (
                    <EntityCard
                        key={company.name}
                        name={company.name}
                        image={company.image}
                        description={company.description}
                        participation={company.participation}
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;