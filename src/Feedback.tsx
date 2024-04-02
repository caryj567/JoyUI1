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
                    <Typography level="h2" sx={{mx:"auto", py:2}}>Submit Feedback</Typography>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <FormControl id="Id" required size="sm" color="primary" style={{width:300}}>
                        <Input placeholder="Feedback here" name="Name" type="tel" autoComplete="on" autoFocus fullWidth defaultValue="" variant="outlined" />
                      </FormControl>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Typography sx={{mx:"auto", py:2}}>+ Upload Attachment</Typography>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <a href="#top">
                        <Button style={{color:'black'}} sx={{width:250, mx:"auto", py:2, px: 3}}>Submit</Button>
                    </a>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Typography sx={{mx:"auto", py:2}}>Cancel</Typography>
                </div>
            </Sheet>
        </Box>
    
        );
}

