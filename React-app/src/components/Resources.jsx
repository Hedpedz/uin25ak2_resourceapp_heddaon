import resources from "../data/ressurser.js";

export default function Resources({ category }) {
  const filteredResources = resources.filter((res) => res.category === category);

  if (filteredResources.length === 0) {
    return <section><p>Ingen ressurser funnet for {category}.</p></section>;
  }

  return (
    <section>
      <ul>
        {filteredResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}