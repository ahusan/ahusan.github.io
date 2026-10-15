import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found">
      <h1>Off the chart</h1>
      <p>There’s nothing at this address. It may have moved when the site was rebuilt.</p>
      <Link className="button button-primary" to="/">
        Back to the home page
      </Link>
    </section>
  );
}
