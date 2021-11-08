import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}
