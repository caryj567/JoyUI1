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
                <Typography level="h1" sx={{mx:"auto", py:2}}>Create Team</Typography>
                <FormControl id="Id" required size="sm" color="primary">
                    
                    <Input
                      placeholder="Team name here"
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
                <Button sx={{width:300, mx:"auto", py:2, px: 3}}>Create</Button>
            </Sheet>
        </Box>
    
        );
}