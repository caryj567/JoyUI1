import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';

import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input'

export default function BasicButtons() 
{
    const [popUpMenu, setPopUpMenu] = React.useState(false);
    return (
    
        <Box alignItems="center">
            <Sheet color="primary" variant="soft" sx={{width: 350, mx:"auto", my:"auto"}}>
                <div style={{display:'flex', alignItems:'left', justifyContent:'left'}}>
                    <Button sx={{width:"auto", mx:"auto", py:0, px: 0}}>Menu</Button>
                    <Button sx={{width:"auto", mx:"auto", py:0, px: 0}}>size1</Button>
                    <Button sx={{width:"auto", mx:"auto", py:0, px: 0}}>size2</Button>
                    <Button sx={{width:"auto", mx:"auto", py:0, px: 0}}>size3</Button>
                    <Button sx={{width:"auto", mx:"auto", py:0, px: 0}}>eraser</Button>
                    <Button sx={{width:"auto", mx:"auto", py:0, px: 0}}>X</Button>
                </div>
            </Sheet>
        </Box>
    
        );
}
