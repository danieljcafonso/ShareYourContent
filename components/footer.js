import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="flex">
          <div className="p-1 m-auto">{`Daniel Afonso \u00A9 ${new Date().getFullYear()}`} </div>
        </div>
      </Container>
    </footer>
  );
}
