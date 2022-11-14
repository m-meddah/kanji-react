import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import './KanjiCard.css';

function KanjiCard() {
  return (
    <Card className='kanji--card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 26 }} color='text-secondary' gutterBottom>
          Kanji of the Day
        </Typography>
        <Typography className='kanji--kanji' variant='h3' component='div'>
          蛍 {/**kanji */}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          kunyomi: ほたる{/**kun_readings */}
          <br></br>
          ONYOMI: ケイ{/**on_readings */}
        </Typography>
        <Typography variant="body2">
          lightning-bug
          <br></br>
          firefly{/**meanings */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default KanjiCard;