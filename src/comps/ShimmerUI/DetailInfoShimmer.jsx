import { Box, Container, Grid, Skeleton, Stack } from "@mui/material";
import React, { memo } from "react";

const DetailInfoShimmer = () => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#0a0a0a", py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">

          {/* Poster */}
          <Grid size={{ xs: 12, sm: 4, md: 4, lg: 3.5 }}>
            <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
              <Skeleton
                variant="rounded"
                animation="wave"
                sx={{
                  bgcolor: "grey.900",
                  borderRadius: "20px",
                  width: "100%",
                  maxWidth: { xs: "260px", sm: "100%" },
                  aspectRatio: "2/3",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>

          {/* Info */}
          <Grid size={{ xs: 12, sm: 8, md: 8, lg: 8.5 }}>
            <Stack spacing={2} sx={{ pt: { xs: 0, md: 3 } }}>

              {/* Title */}
              <Skeleton variant="text" animation="wave" width="75%" sx={{ bgcolor: "grey.900", fontSize: "3rem" }} />

              {/* Tagline */}
              <Skeleton variant="rounded" animation="wave" width="55%" height={22} sx={{ bgcolor: "grey.900", borderRadius: "4px" }} />

              {/* Genre chips */}
              <Stack direction="row" gap={1}>
                {[60, 90, 72].map((w, i) => (
                  <Skeleton key={i} variant="rounded" animation="wave" width={w} height={24} sx={{ bgcolor: "grey.900", borderRadius: "6px" }} />
                ))}
              </Stack>

              {/* Divider */}
              <Skeleton variant="rounded" animation="wave" width="100%" height={1} sx={{ bgcolor: "grey.800" }} />

              {/* Meta row: rating ring + chips */}
              <Stack direction="row" alignItems="center" gap={1.5}>
                <Skeleton variant="circular" animation="wave" width={68} height={68} sx={{ bgcolor: "grey.900" }} />
                <Skeleton variant="rounded" animation="wave" width={90} height={32} sx={{ bgcolor: "grey.900", borderRadius: "20px" }} />
                <Skeleton variant="rounded" animation="wave" width={110} height={32} sx={{ bgcolor: "grey.900", borderRadius: "20px" }} />
              </Stack>

              {/* Social icons */}
              <Stack direction="row" gap={1.5}>
                {Array(3).fill("").map((_, i) => (
                  <Skeleton key={i} variant="circular" animation="wave" width={36} height={36} sx={{ bgcolor: "grey.900" }} />
                ))}
              </Stack>

              {/* Overview label */}
              <Skeleton variant="text" animation="wave" width={80} height={16} sx={{ bgcolor: "grey.900" }} />

              {/* Overview lines */}
              <Stack spacing={1}>
                <Skeleton variant="text" animation="wave" width="100%" sx={{ bgcolor: "grey.900", fontSize: "1rem" }} />
                <Skeleton variant="text" animation="wave" width="100%" sx={{ bgcolor: "grey.900", fontSize: "1rem" }} />
                <Skeleton variant="text" animation="wave" width="65%" sx={{ bgcolor: "grey.900", fontSize: "1rem" }} />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default memo(DetailInfoShimmer);
