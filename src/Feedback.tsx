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
                <Typography level="h2" sx={{mx:"auto", py:2}}>Submit Feedback</Typography>
                <FormControl id="Id" required size="sm" color="primary">
                    <Input placeholder="Feedback here" name="Name" type="tel" autoComplete="on" autoFocus fullWidth defaultValue="" variant="outlined" />
                  </FormControl>
                <Typography sx={{mx:"auto", py:2}}>+ Upload Attachment</Typography>
                <Button sx={{width:300, mx:"auto", py:2, px: 3}}>Submit</Button>
                <Typography sx={{mx:"auto", py:2}}>Cancel</Typography>
            </Sheet>
        </Box>
    
        );
}

