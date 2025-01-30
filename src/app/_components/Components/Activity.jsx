import  { useEffect, useState } from 'react';
import { Card, Typography, Grid, Box } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import { useNavigate } from 'react-router-dom';

const Activity = () => {
  const [recentCards, setRecentCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get clicked cards history from localStorage
    const history = JSON.parse(localStorage.getItem('clickedCardsHistory')) || [];
    setRecentCards(history);
  }, []);

  const handleCardClick = () => {
    // navigate(`/detail-page/${card.id}`);
    navigate(`/detail-page`);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 ,fontSize:'20px'}}>
        <HistoryIcon /> Recent Activity
      </Typography>

      <Grid container spacing={3} sx={{width:'100%'}}>
        {recentCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card 
              onClick={() => handleCardClick(card)}
              sx={{ 
                p: 2,
                height: '100%',
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                width: '100%',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s ease-in-out'
                }
              }}
            >
              <Box
                component="img"
                src={card.backgroundImage}
                alt={card.title}
                sx={{ 
                  width: '150px',
                  height: '110px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
              <Box  style={{display:'flex',flexDirection:'column'}}>
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="body1" color="text.secondary">
                {card.description}
              </Typography>
              <Typography variant="body1" color="primary" sx={{ mt: 1 }}>
                {card.descriptionPrice}
              </Typography>
              
              {/* <Box sx={{ mt: 2 }}>
                {card.iconCardData?.map((iconData, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Box
                      component="img"
                      src={iconData.img}
                      alt={iconData.title}
                      sx={{ width: 24, height: 24, mr: 1 }}
                    />
                    <Typography variant="body2">
                      <strong>{iconData.title}:</strong> {iconData.description}
                    </Typography>
                  </Box>
                ))}
              </Box> */}
              
              {/* <Typography color="text.secondary" sx={{ mt: 2 }}>
                Visited on: {new Date(card.timestamp).toLocaleDateString()}
              </Typography> */}

              </Box>
             
            </Card>
          </Grid>
        ))}

        {recentCards.length === 0 && (
          <Grid item xs={12}>
            <Typography color="text.secondary" align="center">
              No recent activity found
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Activity;
