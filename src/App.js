import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Layout from './components/Layout'
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <Switch>
                <Layout>
                    <Route exact path="/">
                        <Notes />
                    </Route>
                    <Route path="/create">
                        <Create />
                    </Route>
                    <Route component={NotFound}/>
                </Layout>
            </Switch>
        </Router>
    );
}

export default App;