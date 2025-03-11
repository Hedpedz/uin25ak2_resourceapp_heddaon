import resources from "../data/ressurser.js";

export default function Resources({ category }) {
  const resource = resources.find((res) => res.category === category);

  if (!resource) {
    return <section><p>Ingen ressurser funnet for {category}.</p></section>;
  }

  return (
    <section>
      <p>{resource.text}</p>
      <ul>
        {resource.sources && resource.sources.length > 0 ? (
          resource.sources.map((source, index) => (
            <li key={index}>
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                {source.title}
              </a>
            </li>
          ))
        ) : (
          <li>Ingen kilder tilgjengelig.</li>
        )}
      </ul>
    </section>
  );
}