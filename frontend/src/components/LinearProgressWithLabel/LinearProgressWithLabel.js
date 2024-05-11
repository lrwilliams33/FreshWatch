import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function LinearProgressWithLabel({ value }) {
  const getBackgroundColor = (value) => {
    const percent = value / 100;
    const red = percent * 255;
    const green = (1 - percent) * 255;
    return `linear-gradient(to right, rgb(${red}, ${green}, 0), rgb(${red}, ${green}, 0))`;
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            borderRadius: 10,
            '& .MuiLinearProgress-bar': {
              borderRadius: 10,
              backgroundImage: getBackgroundColor(value),
            },
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};
