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
    return (
    
        <Box alignItems="center">
            <Sheet color="primary" variant="soft" sx={{width: 350, mx:"auto", my:"auto"}}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Typography level="h4" sx={{mx:"auto", py:2}}>Welcome to BoardX</Typography>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <FormControl id="Id" required size="sm" color="primary" style={{width:250}}>
                        <Input placeholder="Email" name="Name" type="tel" autoComplete="on" autoFocus fullWidth defaultValue="" variant="outlined" />
                      </FormControl>
                    <FormControl id="Id" required size="sm" color="primary" style={{width:250}}>
                        <Input placeholder="Password" name="Name" type="tel" autoComplete="on" autoFocus fullWidth defaultValue="" variant="outlined" />
                      </FormControl>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Button sx={{width:250, mx:"auto", py:2, px: 3}}>Log in</Button>
                </div>
                <Typography sx={{mx:"auto", py:2}}>Forgot Password</Typography>
            </Sheet>
        </Box>
    
        );
}
