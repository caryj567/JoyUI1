import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import Demo from './Demo';
import Center from './Center';
import StepsSlider from './component2';

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        {/*<Demo />*/}
         <Center />
        <StepsSlider />
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
