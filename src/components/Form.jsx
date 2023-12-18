import { AccountCircle, Email } from '@mui/icons-material';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

function Form() {
  const [fullName, setName] = useState('');
  const [eMail, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    switch (name) {
      case 'fullName':
        return setName(value);
      case 'e-Mail':
        return setEmail(value);
      case 'Message':
      default:
        return setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    fetch('https://send.spinda.dev', {
      method: 'POST',
      body: JSON.stringify({ name: fullName, email: eMail, message: message }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 'success') {
          alert('Message Sent.');
          setName('');
          setEmail('');
          setMessage('');
        } else if (response.status === 'fail') {
          alert('Message failed to send.');
        }
      });
  };

  return (
    <Box
      component="form"
      onSubmit={handleFormSubmit}
      sx={{
        width: { xs: '100%', sm: '90%', md: '80%', lg: '80%' },
        padding: 0,
        '& .MuiTextField-root': { m: 1, width: { xs: '90%' } },
        '& .MuiButtonBase-root': { m: 1, width: { xs: '90%' } }
      }}
    >
      <TextField
        required
        value={fullName}
        name="fullName"
        label="Name"
        onChange={handleInputChange}
        type="text"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <AccountCircle />
            </InputAdornment>
          )
        }}
      />
      <TextField
        required
        value={eMail}
        name="e-Mail"
        label="e-Mail"
        onChange={handleInputChange}
        type="text"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <Email />
            </InputAdornment>
          )
        }}
      />
      <TextField
        value={message}
        name="Message"
        label="Message"
        onChange={handleInputChange}
        type="text"
        rows={4}
        multiline
        helperText="Use the form above to contact me, or use your preferred method below."
      />
      <Button type="submit" variant="outlined">
        Submit
      </Button>
    </Box>
  );
}

export default Form;
