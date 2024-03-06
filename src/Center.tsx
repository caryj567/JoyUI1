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
    
        <Box >
            <Sheet color="primary" variant="soft" sx={{width: 350, mx:"auto"}}>
                <Typography level="h1">Create Team</Typography>
                <FormControl id="Id" required size="sm" color="primary">
                    
                    <Input
                      placeholder="Placeholder"
                      name="Name"
                      type="tel"
                      autoComplete="on"
                      autoFocus
                      error
                      fullWidth
                      defaultValue="Team name here"
                      variant="outlined" />
                    {/*<FormHelperText>Help!</FormHelperText>*/}
                  </FormControl>
                <Button>Create</Button>
            </Sheet>
        </Box>
    
        );
}
