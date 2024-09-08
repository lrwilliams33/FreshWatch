import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AiPopUp({ open, handleClose, itemName }) {
  
  // save meal idea as a text file
  const [mealIdea, setMealIdea] = React.useState("This is a sample meal idea for " + itemName + ".");
  const handleSaveIdea = () => {
    const blob = new Blob([mealIdea], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${itemName}_meal_idea.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          AI Generated Meal Idea for {itemName}:
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Discard</Button>
          <Button>Generate New Idea</Button>
          <Button onClick={handleSaveIdea}>Save Idea</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}