import { Skeleton, Stack } from "@mui/material";

export const CardSkeleton = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Stack spacing={1} style={{ borderRadius: "20px" }}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton
          variant="rectangular"
          sx={{ fontSize: "1rem" }}
          width={350}
          height={350}
          style={{ borderRadius: "20px" }}
        />

        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="text" width={350} height={40} />
        <Skeleton variant="text" width={350} height={40} />
        <div
          style={{
            borderRadius: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Skeleton
            variant="rectangular"
            width={110}
            height={40}
            style={{
              borderRadius: "40px",
            }}
          />
        </div>
      </Stack>
    </div>
  );
};
