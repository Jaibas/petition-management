import Container from "@mui/material/Container";
import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";

function PetitionCard() {
    return (
      <React.Fragment>
        <Container>
          <Card>
            <CardHeader
              title="Money Laundering"
              subheader="2025 June 28 | Nellore AP"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                The drug seekers would come into the emergency room and scream
                about how much pain they were in. When you told them that you
                would start elevating their pain with Tylenol or Advil instead of
                a narcotic they became nasty and combative. They would start
                telling you what drug and dose they had to have to make their pain
                tolerable. After dealing with the same drug seekers several times
                a month it gets old. Some of the doctors would give in and give
                them a dose of morphine and send them away
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row" spacing={3}>
                <Stack direction="row" spacing={3}>
                  <Chip label="Kidnapping" color="primary" variant="outlined" />
                  <Chip
                    icon={<GradeOutlinedIcon />}
                    label="Good"
                    color="success"
                  />
                </Stack>
                <Chip label="In Progress" color="info" variant="outlined" />
              </Stack>
            </CardActions>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
  
  export default PetitionCard;
  