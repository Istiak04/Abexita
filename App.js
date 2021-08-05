import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router-dom';
import { useDarkMode } from './components/useDarkMode';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import 'D:/shobuj/node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'D:/shobuj/node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';

//redux
import { setCurrentUser } from './redux/userActions';
import { connect } from 'react-redux';

//firebase
import { auth, handleUserProfile } from './firebase/utils';

//Components
import Footer from './components/Footer/Footer';
import Toggle from './components/Toggler';
import Nav from './components/Nav';
import SocialMediaSidebar from 'D:/shobuj/src/components/SocialIconSidebar/SocialIconSidebar.js';

//Pages
import Home from './pages/home';
import Form from './pages/Form/Form';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword.js';
import Graphics from './pages/Graphics/Graphics';
import Video from './pages/Video/Video';
import SocialMediaMarketing from './pages/SocialMediaMarketing/SocialMediaMarketing.js';
import Services from './pages/Services';
import Web from './pages/Web/Web';
import ApplicationAndSoftware from './pages/Application&Software/Application&Software';

//Sub-pages
import TshirtPricing from './pages/Graphics/T-shirtPricing';
import VideoEditingPricing from './pages/Video/VideoEditiongPricing';
import WebDesignPricing from './pages/Web/WebDesignPricing';
import ApplicationPricing from './pages/Application&Software/ApplicationPricing';
import SeoPricing from './pages/SocialMediaMarketing/SeoPricing';
import Three_DModeling from './pages/3_DModeling/3_DModeling';
import Three_DModelingPricing from './pages/3_DModeling/3_DModelingPricing';



const App = (props) => {

  //darkMode 

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  let authListener = null;

  useEffect(() => {
    authListener = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          const userRef = await handleUserProfile(userAuth)

          userRef.onSnapshot(snapshot => {
            props.setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            }
            )
          })
          props.setCurrentUser(userAuth)
          console.log(props.currentUser)
        }
      })
    return () => {
      authListener()
    };
  }, []
  )

  useEffect(() => {
    if (!mountedComponent) return <div />
  }, [theme])

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Router>
            <Nav currentUser={props.currentUser} theme={theme} />
            <SocialMediaSidebar />
            <Switch>
              <Route path='/seo'>
                <SeoPricing />
              </Route>
              <Route path='/socialMediaMarketing'>
                <SocialMediaMarketing />
              </Route>

              {/* Animation Routing */}
              <Route path='/application'>
                <ApplicationPricing />
              </Route>
              <Route path='/applicationAndSoftware'>
                <ApplicationAndSoftware />
              </Route>
              {/* Animation Routing end */}

              {/* Web Routing */}
              <Route path='/WebDesignPricing'>
                <WebDesignPricing />
              </Route>
              <Route path='/WebDesignPricing'>
                <WebDesignPricing />
              </Route>
              <Route path='/WebDesignPricing'>
                <WebDesignPricing />
              </Route>
              <Route path='/WebDesignPricing'>
                <WebDesignPricing />
              </Route>
              <Route path='/WebDesignPricing'>
                <WebDesignPricing />
              </Route>
              <Route path='/WebDesignPricing'>
                <WebDesignPricing />
              </Route>
              <Route path='/web'>
                <Web />
              </Route>
              {/* Web routing end */}

              {/* Video Editing page Routing */}
              <Route path='/videoEditing'>
                <VideoEditingPricing />
              </Route>
              <Route path='/videoEditing'>
                <VideoEditingPricing />
              </Route>
              <Route path='/videoEditing'>
                <VideoEditingPricing />
              </Route>
              <Route path='/videoEditing'>
                <VideoEditingPricing />
              </Route>
              <Route path='/videoEditing'>
                <VideoEditingPricing />
              </Route>
              <Route path='/videoEditing'>
                <VideoEditingPricing />
              </Route>
              <Route path='/video'>
                <Video />
              </Route>
              {/* Video Editing page Routing end */}

              <Route path='/services'>
                <Services />
              </Route>

              {/* Graphics page Routing */}
              <Route path='/t-shirt'>
                <TshirtPricing />
              </Route>
              <Route path='/t-shirt'>
                <TshirtPricing />
              </Route>
              <Route path='/t-shirt'>
                <TshirtPricing />
              </Route>
              <Route path='/t-shirt'>
                <TshirtPricing />
              </Route>
              <Route path='/t-shirt'>
                <TshirtPricing />
              </Route>
              <Route path='/t-shirt'>
                <TshirtPricing />
              </Route>
              <Route path='/t-shirt'>
                <TshirtPricing />
              </Route>
              <Route path='/graphics'>
                <Graphics />
              </Route>
              {/* Graphics routing end */}

              {/* 3D Modeling Routing start */}
              <Route path='/3DModelingPricing'>
                <Three_DModelingPricing />
              </Route>
              <Route path='/3Dmodeling'>
                <Three_DModeling />
              </Route>

              {/* 3D Modeling Routing end */}

              <Route path='/forgotPassword'>
                <ForgotPassword />
              </Route>
              <Route path='/form'
                render={() => props.currentUser ? <Redirect to='/' /> : (
                  <Form />
                )}
              >
              </Route>
              <Route path='/'>
                <Home theme={theme} />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);



