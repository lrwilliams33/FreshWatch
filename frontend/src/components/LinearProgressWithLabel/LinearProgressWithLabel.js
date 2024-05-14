import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function LinearProgressWithLabel({ value }) {
  const getBackgroundColor = (value) => {
    const hue = (1 - value / 100) * 120; // 0 is red, 120 is green
    return `linear-gradient(to right, hsl(${hue}, 100%, 50%), hsl(${hue}, 100%, 50%))`;
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
