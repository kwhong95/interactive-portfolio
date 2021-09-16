import { Nav, NavList, Link } from './elements';
import { List } from './list';

const Navgation: React.FC = () => {
  return (
    <Nav>
      <NavList>
        {List.map((n, idx) => 
        <Link 
          to={`/${n.href}`} 
          activeStyle={{ color: "#8c8c8c" }} 
          key={idx} >{n.title}
          </Link>
        )
}
      </NavList>
    </Nav>
  );
}

export default Navgation;