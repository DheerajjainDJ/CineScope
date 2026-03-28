import React, {
  useEffect,
  lazy,
  Suspense,
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";
import {
  Container,
  Box,
  Typography,
  Divider,
  CircularProgress,
  Skeleton,
} from "@mui/material";
import { useGetVideoKeyQuery } from "../../services/tmdbCore";
import RoundedShimmer from "../ShimmerUI/RoundedShimmer";
const CastAndCrew = lazy(() => import("./CastAndCrew"));
const MoreCarousel = lazy(() => import("./MoreCarousel"));

const MoreInfo = ({ id, type }) => {
  const { data: video, isFetching: isVideoFetching } = useGetVideoKeyQuery({
    type,
    id,
  });
  const castObserverRef = useRef(null);
  const moreInfoObserverRef = useRef(null);
  const [isCastAndCrewIntersected, setIsCastAndCrewIntersected] =
    useState(false);

  const [isMoreInfoIntersected, setIsMoreInfoIntersected] = useState(false);

  let videoKey = useMemo(() => {
    if (video && video?.results?.length) {
      let trailer = video?.results?.find((res) => res?.type === "Trailer");
      if (trailer) {
        return trailer?.key;
      } else {
        let teaser = video?.results?.find((res) => res.type === "Teaser");
        if (teaser) {
          return teaser?.key;
        } else {
          return video?.results[0].key;
        }
      }
    }
  }, [video]);

  const handleCastAndCrewIntersecting = useCallback((node) => {
    if (castObserverRef.current) {
      castObserverRef.current.disconnect();
    }

    castObserverRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsCastAndCrewIntersected(true);
        castObserverRef.current.disconnect();
      }
    });

    if (node) {
      castObserverRef.current?.observe(node);
    }
  }, []);

  const handleMoreInfoIntersecting = useCallback((node) => {
    if (moreInfoObserverRef.current) {
      moreInfoObserverRef.current.disconnect();
    }

    moreInfoObserverRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsMoreInfoIntersected(true);
        moreInfoObserverRef.current.disconnect();
      }
    });

    if (node) {
      moreInfoObserverRef.current?.observe(node);
    }
  }, []);

  return (
    <>
      <Box py={3} sx={{ backgroundColor: "#151515" }}>
        <Container maxWidth="md">
          {isVideoFetching ? (
            <Skeleton
              variant="rectangular"
              animation="wave"
              height={360}
              sx={{ bgcolor: "grey.900" }}
            />
          ) : (
            videoKey && (
              <Box
                sx={{
                  position: "relative",
                  paddingTop: "42%",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="iframe"
                  src={`https://www.youtube.com/embed/${videoKey}`}
                  title="Trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              </Box>
            )
          )}
        </Container>
      </Box>

      <Divider color="gray" />
      <div style={{ paddingTop: "10px" }} ref={handleCastAndCrewIntersecting}>
        {isCastAndCrewIntersected && (
          <Suspense fallback={<RoundedShimmer />}>
            <CastAndCrew id={id} type={type} />
          </Suspense>
        )}
      </div>

      <Box ref={handleMoreInfoIntersecting}>
        {isMoreInfoIntersected && (
          <Suspense fallback={<RoundedShimmer />}>
            <MoreCarousel id={id} type={type} />
          </Suspense>
        )}
      </Box>
    </>
  );
};

export default React.memo(MoreInfo);
