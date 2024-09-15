// Dependencies
import { FC, lazy, Suspense } from "react";

// Redux
import { store } from "@/redux/store";
import { Provider } from 'react-redux';

// Router
import { BrowserRouter as Router } from "react-router-dom";

// Assets
import "@/assets/librarys/fontawesome/css/all.min.css";
import "~bootstrap/bootstrap.scss";
import "@/assets/styles/style.scss";
import Loading from "./components/loading";

// Layout
const Layout = lazy(()=> import( "@/layout"));

const App:FC = ()=>{
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loading />} >
          <Layout />
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App;
