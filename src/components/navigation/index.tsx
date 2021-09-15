import { Nav, NavList } from './elements';
import { List } from './list';

const Navgation: React.FC = () => {
  return (
    <Nav>
      <NavList>
        {List.map((n) => <h3>{n.title}</h3>)}
      </NavList>
    </Nav>
  );
}

export default Navgation;