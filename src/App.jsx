import { Box, Card, CardContent, CardHeader, Container } from "@mui/material";

const App = () => {
  return (
    <Container>
      <Box>
        <Card sx={{ width: "100%", height: "100%" }}>
          <CardHeader
            title="card"
            sx={{ height: "2rem", backgroundColor: "lightgrey" }}
          />
          <CardContent>aaa</CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default App;
