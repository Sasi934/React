import logo from './logo.svg';
import StyledButton from './components/Button/Button.js';
import './App.css';
import {FancyButton, SubmitButton, AnimatedLogo, DarkButton} from './components/Button/Button.styles.js';
import { ThemeProvider, createGlobalStyle} from 'styled-components';
import Form from './components/Form.js';
import LifeCycle from './components/LifeCycle.js';
import LifeCycleB from './components/LifeCycleB.js';
import FragmentDemo from './components/FragmentDemo.js';
import Table from './components/Table.js';
import PureComp from './components/Purecomp.js';
import Parentcomp from './components/Parentcomp.js';
import RefsDemo from './components/RefsDemo.js';
import FocusInput from './components/FocusInput.js';
import FRParentInput from './components/FRParentInput.js';
/*import Greet from './components/Greet.js';
import Intro from './components/Intro.js';
import Welcome from './components/Welcome.js';
import Greetprops from './components/Greetprops.js';
import Message from './components/Message.js';
import FunctionalClick from './components/FunctionalClick.js';
import ClassClick from './components/ClassClick.js';
import EventBing from './components/Eventbing.js';
import Example from './components/Example.js';
import Counter from './components/miniproject.js';
import ParentComponents from './components/ParentComponents.js';
import UserGreeting from './components/UserGreeting.js';
import NameList from './components/NameList.js';
import Stylesheet from './components/Stylesheet.js';
import Inline from './components/Inline.js';
import './components/appStyles.css';
import styles from './components/appStyles.module.css';*/

/*const theme = {
  dark: {
    primary:'#000',
    text:'#fff'
  },
  light:{
    primary:'#fff',
    text:'#000'
  },
  fontFamily: 'Segoe UI'

}
const GlobalStyle= createGlobalStyle`
button{
  font-family: ${(props) => props.theme.fontFamily};
}
`*/

function App() {
  return (
    <div className="App-header">
      {/* <Parentcomp/> */}
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}
      <FRParentInput/>
      
      {/*<ParentComponents/>
      <Stylesheet primary={true}/>
      <UserGreeting/>
       <NameList/>
       <h1 className='error'>Error</h1>
      <h1 className={styles.sucess}>Sucess</h1>
      <Inline/>
      <Form/>


      <AnimatedLogo src = {logo}/>
       <StyledButton type='submit'>Styled Button</StyledButton>
       <div>
        <br/>
         </div>
       <StyledButton variant="outline">Styled Button</StyledButton>
       <div>
        <br/>
         </div>
       <FancyButton>Fancy Button</FancyButton>
       <div>
        <br/>
       </div>
       <SubmitButton>Submit Button</SubmitButton>
       <div><br/></div>
       <DarkButton>Dark Button</DarkButton>
       <div><br/></div>
     */}

    </div>
   /* </ThemeProvider>*/
  );
}

export default App;
