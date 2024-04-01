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
                <Typography level="h1" sx={{py:2}}>Create Room</Typography>
                <div style={{display:'flex', alignItems:'left', justifyContent:'left'}}>
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
                      style={{width:175}}
                      variant="outlined" />
                    {/*<FormHelperText>Help!</FormHelperText>*/}
                  </FormControl>
                    </div>
                <div style={{display:'flex', alignItems:'right', justifyContent:'right'}}>
                    <Button sx={{width:100, mx:"auto", py:2, px: 3}}><a href="">Create</a></Button>
                </div>
            </Sheet>
        </Box>
    
        );
}
