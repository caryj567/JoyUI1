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
    
        <Box>
            <Sheet color="primary" variant="soft">
                <Typography>Fuck you</Typography>
                <FormControl id="Id" required size="sm" color="primary">
                    <FormLabel>Label</FormLabel>
                    <Input
                      placeholder="Placeholder"
                      name="Name"
                      type="tel"
                      autoComplete="on"
                      autoFocus
                      error
                      fullWidth
                      defaultValue="DefaultValue"
                      variant="outlined" />
                    <FormHelperText>Help!</FormHelperText>
                  </FormControl>
            </Sheet>
        </Box>
    
        );
}
