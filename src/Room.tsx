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
            <Sheet color="primary" variant="soft"  sx={{width: 350, mx:"auto", my:"auto"}}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Typography level="h1" sx={{mx:"auto", py:2}}>Create Room</Typography>
                </div>
                <FormControl id="Id" required size="sm" color="primary">
                    <Typography sx={{mx:"auto", py:2}}>Room name</Typography>
                    <Input
                      placeholder=""
                      name="Name"
                      type="tel"
                      autoComplete="on"
                      autoFocus
                        //error
                      fullWidth
                      defaultValue=""
                      variant="outlined" />
                    {/*<FormHelperText>Help!</FormHelperText>*/}
                  </FormControl>
                <div style={{display:'flex', alignItems:'center', justifyContent:'right'}}>
                    <Button sx={{width:100, mx:"auto", py:2, px: 3}}>Create</Button>
                </div>
            </Sheet>
        </Box>
    
        );
}
