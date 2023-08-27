// import logo from './logo.svg';
import './App.css';
// import { FetchDataContext } from './components/step4-use-context/FetchDataContext';
// import { DoughNutChart } from './components/step6-charts/DoughNutChart';
// import { LineChart } from './components/step6-charts/LineChart';
// import { PieChart } from './components/step6-charts/PieChart';
// import { VerticalBarChart } from './components/step6-charts/VerticalBarChart';
// import { User } from './components/step5-render-props-pattern/User';
// import { UseReducer } from './components/step2-use-reducer/UseReducer';
import { Home } from './views/Home';
// import { RenderPropsTesting } from './views/RenderPropsTesting';
// import { MUITesting } from './views/MUITesting';
import { Test } from './views/Test';
// import { UseStateAll } from './components/step1-use-state/UseStateAll';

// import { UseStateArray } from './components/step1-use-state/UseStateArray';
// import { UseStateObject } from './components/step1-use-state/UseStateObject';
// import MyButton from './components/MyButton';
// import { UseStateSingleVariable } from './components/step1-use-state/UseStateSingleVariable';
// import MyTypography from './components/MyTypography';

// BT - Step3: import the below

import { Routes, Route } from 'react-router-dom'
// import { RenderPropsTesting } from './views/RenderPropsTesting';
import { AreaTesting } from './views/AreaTesting';

function App() {
  return (
    <div className='App'>
      {/* <MyTypography /> */}
      {/* <MyButton /> */}
      {/* <UseStateSingleVariable /> */}
      {/* <GridLayout /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateAll /> */}
      {/* <UseReducer /> */}
      {/* BT - Create a parent Routes and child Route. The child Route will be for your route.*/}
      {/* <FetchDataContext> */}
      <Routes>
        {/* <Route path='/' element={<MUITesting />}></Route> */}
        {/* BT -  Passing in using name as an argument. Now we want to pass into this User component
                  with a function.
                  Now, you want to pass the params in.
         */}
        {/* <Route path='/' element={<User render={(isLogging) => isLogging ? 'Trong Tran' : 'Guest'}/>}></Route> */}
        {/* <Route path='/' element={<RenderPropsTesting />}></Route> */}
        {/* <Route path='/' element={<VerticalBarChart />}></Route> */}
        {/* <Route path='/' element={<PieChart />}></Route> */}
        {/* <Route path='/' element={<DoughNutChart />}></Route> */}
        {/* <Route path='/' element={<LineChart />}></Route> */}
        <Route path='/' element={<AreaTesting />}></Route>
        <Route path='test' element={<Test />}></Route>
        <Route path='home' element={<Home />}></Route>
      </Routes>
      {/* </FetchDataContext> */}

    </div>
  );
}

export default App;
