import resources from '../data/ressurser.js'; 

export default function Resources({ category }) {
  const filteredResources = resources.filter((resource) => resource.category === category);

  return (
    <section className="resources">
      <ul>
        {filteredResources.map((resource) => (
          <li key={resource.id}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title}</a> {resource.description}
          </li>
        ))}
      </ul>
    </section>
  );
}