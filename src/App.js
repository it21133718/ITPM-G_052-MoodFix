
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom"
import { Browser, Home, Layout,Chart, Artis,Homes} from "./router"
import { SinglePage } from "./watch/SinglePage"





function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/browser'
          element={
            <Layout>
              <Browser />
            </Layout>
          }
        />
        <Route
          path='/charts'
          element={
            <Layout>
              <Chart />
            </Layout>
          }
        />
        <Route
          path='/artists'
          element={
            <Layout>
              <Artis />
            </Layout>
          }
        />
        <Route
          path='/videos'
          element={
            <Layout>
              <Homes/>
            </Layout>
          }
        />
       
       
           <Route path='/singlePage/:id' component={SinglePage} 
           
         
           
        
          
           
          
        />
        
        
      </Routes>
    </Router>
  )
}

export default App
