import { Container, Grid, Skeleton, Box } from "@mui/material";
import React, { memo } from "react";

const Shimmer = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        spacing={5}
        alignItems="center"
        justifyContent="center"
        pb="10px"
      >
        {Array(8)
          .fill("")
          .map((it, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2.4 }} key={index}>
              <Box
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                  position: "relative",
                }}
              >
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  sx={{
                    bgcolor: "grey.900",
                    borderRadius: "20px",
                    transform: "none",
                    aspectRatio: "2/3",
                    height: "auto",
                    width: "100%",
                  }}
                />
                {/* Simulate rating badge */}
                <Skeleton
                  variant="circular"
                  height={44}
                  width={44}
                  animation="wave"
                  sx={{
                    bgcolor: "grey.800",
                    position: "absolute",
                    top: 12,
                    right: 12,
                  }}
                />
                {/* Simulate title bar at bottom */}
                <Skeleton
                  variant="rounded"
                  height={18}
                  animation="wave"
                  sx={{
                    bgcolor: "grey.800",
                    position: "absolute",
                    bottom: 28,
                    left: 16,
                    right: 16,
                    borderRadius: "6px",
                  }}
                />
                <Skeleton
                  variant="rounded"
                  height={14}
                  animation="wave"
                  sx={{
                    bgcolor: "grey.800",
                    position: "absolute",
                    bottom: 10,
                    left: 16,
                    width: "55%",
                    borderRadius: "6px",
                  }}
                />
              </Box>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default memo(Shimmer);
