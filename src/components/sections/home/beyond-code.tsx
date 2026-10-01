"use client";

import Image from "next/image";
import together from "../../../../public/images/beyond-code/together.webp";
import running from "../../../../public/images/beyond-code/running.webp";
import cycling from "../../../../public/images/beyond-code/cycling.webp";
import swimming from "../../../../public/images/beyond-code/swimming.webp";
import walking from "../../../../public/images/beyond-code/walking.webp";
import { Box, Stack, Typography } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section } from "../../ui/section";

const photos = [
  {
    id: "together",
    image: together,
    area: "1 / 1 / 2 / 3",
    rotation: -3,
    color: "#fff1ce",
    ink: "#214f40",
    symbol: "♥",
  },
  {
    id: "running",
    image: running,
    area: "1 / 3 / 2 / 4",
    rotation: 3,
    color: "#ff806b",
    ink: "#222f29",
    symbol: "🏃",
  },
  {
    id: "cycling",
    image: cycling,
    area: "2 / 1 / 3 / 2",
    rotation: 3,
    color: "#214f40",
    ink: "#fff9ed",
    symbol: "🚲",
  },
  {
    id: "swimming",
    image: swimming,
    area: "2 / 2 / 3 / 3",
    rotation: 5,
    color: "#fff1ce",
    ink: "#214f40",
    symbol: "≋",
  },
  {
    id: "walking",
    image: walking,
    area: "2 / 3 / 3 / 4",
    rotation: -4,
    color: "#eef0ce",
    ink: "#214f40",
    symbol: "🍃",
  },
] as const;
const serif = 'Georgia, "Times New Roman", serif';

export function BeyondCode({
  content,
}: {
  content: Pick<
    Dictionary["homeContent"],
    | "personalLabel"
    | "personalTitle"
    | "personalDescription"
    | "togetherLabel"
    | "activities"
    | "personalNoteTitle"
    | "personalNote"
  >;
}) {
  return (
    <Section id="beyond-the-code">
      <Box
        sx={(theme) => ({
          bgcolor: "#faf8f2",
          borderRadius: { xs: 3, md: 4 },
          overflow: "hidden",
          ...theme.applyStyles("dark", {
            backgroundColor: "var(--mui-palette-background-paper)",
          }),
        })}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.15fr" },
            gap: { xs: 5, md: 4 },
            alignItems: "center",
            px: { xs: 3, sm: 5, md: 5 },
            pt: { xs: 5, md: 7 },
            pb: { xs: 5, md: 6 },
            position: "relative",
          }}
        >
          <Box
            component="svg"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
            aria-hidden="true"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 0,
              display: { xs: "none", md: "block" },
            }}
          >
            <path
              d="M720 445 C635 475 620 535 530 520 S385 470 315 525 S185 555 90 500"
              fill="none"
              stroke="#edbd52"
              strokeWidth="3"
              strokeDasharray="5 12"
              strokeLinecap="round"
            />
          </Box>
          <Stack
            spacing={3}
            sx={{
              position: "relative",
              zIndex: 1,
              top: { xs: -20, md: -50 },
            }}
          >
            <Typography
              variant="overline"
              sx={{ color: "secondary.main", letterSpacing: "0.14em" }}
            >
              {content.personalLabel}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: serif,
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.045em",
                color: "text.primary",
                textWrap: "balance",
              }}
            >
              {content.personalTitle}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.85,
              }}
            >
              {content.personalDescription}
            </Typography>
          </Stack>
          <Box
            sx={{
              position: "relative",
              minWidth: 0,
              px: { xs: 0, sm: 1 },
              py: 2,
              zIndex: 1,
            }}
          >
            <Box
              component="svg"
              viewBox="0 0 600 600"
              aria-hidden="true"
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                overflow: "visible",
                pointerEvents: "none",
                zIndex: 0,
              }}
            >
              <path
                d="M70 120 C-95 155 -75 250 25 305 S95 425 20 505 M545 130 C635 165 638 265 555 315 M270 280 Q340 300 355 365"
                fill="none"
                stroke="#edbd52"
                strokeWidth="3"
                strokeDasharray="5 12"
                strokeLinecap="round"
              />
              <path
                d="M3 36 l-25 -42 M23 27 l-5 -45 M-16 52 l-39 -15 M291 555 l-8 18 M306 563 l15 -5 M586 488 C600 450 625 430 644 418 C636 451 615 480 586 488 Z M586 488 C596 464 611 447 630 438 M586 488 C608 484 626 492 638 506"
                fill="none"
                stroke="#edbd52"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, minmax(0, 1fr))",
                  sm: "1.05fr 0.9fr 1.05fr",
                },
                gridTemplateRows: {
                  xs: "210px 210px 210px",
                  sm: "255px 235px",
                  md: "255px 240px",
                },
                gap: { xs: 2, sm: 2.25 },
                position: "relative",
              }}
            >
              {photos.map((photo) => (
                <Box
                  component="figure"
                  key={photo.id}
                  onMouseMove={(event) => {
                    if (
                      window.matchMedia("(prefers-reduced-motion: reduce)")
                        .matches
                    )
                      return;
                    const bounds = event.currentTarget.getBoundingClientRect();
                    const image = event.currentTarget.querySelector("img");
                    if (image) {
                      const x =
                        ((event.clientX - bounds.left) / bounds.width - 0.5) *
                        -14;
                      const y =
                        ((event.clientY - bounds.top) / bounds.height - 0.5) *
                        -14;
                      event.currentTarget.style.setProperty(
                        "--card-x",
                        `${x}px`,
                      );
                      event.currentTarget.style.setProperty(
                        "--card-y",
                        `${y}px`,
                      );
                    }
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.setProperty("--card-x", "0px");
                    event.currentTarget.style.setProperty("--card-y", "0px");
                  }}
                  sx={{
                    m: 0,
                    position: "relative",
                    minWidth: 0,
                    gridArea: {
                      xs: photo.id === "together" ? "1 / 1 / 2 / 3" : "auto",
                      sm: photo.area,
                    },
                    transform: {
                      xs: "none",
                      sm: `translate(var(--card-x, 0px), var(--card-y, 0px)) rotate(${photo.rotation}deg)`,
                    },
                    transition:
                      "transform 280ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                    "& img": {
                      transform: "scale(1.08)",
                      transition:
                        "transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 320ms ease-out",
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                      transform: "none",
                      transition: "none",
                      "& img": { transition: "none", transform: "none" },
                      "& figcaption": { transform: "none" },
                    },
                    filter: "drop-shadow(0 12px 18px rgba(30, 55, 43, 0.16))",
                    "&:hover": {
                      filter: "drop-shadow(0 18px 24px rgba(30, 55, 43, 0.22))",
                    },
                    "&:hover img": { filter: "saturate(1.06)" },
                    ...(photo.id === "swimming" ? { mt: { sm: 2 } } : {}),
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      overflow: "hidden",
                      borderRadius: { xs: "20px", sm: "26px" },
                      bgcolor: "#e3e8dd",
                      boxShadow: "0 12px 28px rgba(30, 55, 43, 0.14)",
                    }}
                  >
                    <Image
                      src={photo.image}
                      alt=""
                      fill
                      loading="lazy"
                      sizes={
                        photo.id === "together"
                          ? "(max-width: 600px) 90vw, (max-width: 900px) 60vw, 350px"
                          : "(max-width: 600px) 42vw, (max-width: 900px) 28vw, 190px"
                      }
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box
                    component="figcaption"
                    sx={{
                      position: "absolute",
                      zIndex: 1,
                      ...(photo.id === "together"
                        ? { top: 14, right: -5 }
                        : { bottom: 14, right: -5 }),
                      maxWidth: "calc(100% + 10px)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      px: { xs: 1.5, sm: 1.75 },
                      py: 1,
                      borderRadius: "40px",
                      bgcolor: photo.color,
                      color: photo.ink,
                      boxShadow: "0 3px 8px #183f2e16",
                      fontWeight: 700,
                      fontSize: { xs: 12, sm: 13 },
                      lineHeight: 1.3,
                      transform: {
                        xs: "rotate(-4deg)",
                        sm: `rotate(${photo.id === "together" ? -4 : photo.id === "running" ? 4 : photo.id === "cycling" ? -6 : photo.id === "swimming" ? 3 : -5}deg)`,
                      },
                      border: "1px solid rgba(255,255,255,0.32)",
                      backdropFilter: "blur(3px)",
                    }}
                  >
                    <Box
                      component="span"
                      aria-hidden="true"
                      sx={{
                        fontSize: 22,
                        lineHeight: 1,
                        color: photo.id === "together" ? "#ec765f" : "inherit",
                      }}
                    >
                      {photo.symbol}
                    </Box>
                    {photo.id === "together"
                      ? content.togetherLabel
                      : content.activities.find(
                          (activity) => activity.id === photo.id,
                        )?.label}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            bgcolor: "#1d493a",
            color: "#fbf7eb",
            borderRadius: "32px 32px 0 0",
            px: { xs: 3, sm: 5 },
            py: { xs: 4, md: 5 },
          }}
        >
          <Box
            component="svg"
            viewBox="0 0 600 250"
            preserveAspectRatio="xMaxYMid slice"
            aria-hidden="true"
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              height: "100%",
              width: "65%",
              opacity: 0.1,
              pointerEvents: "none",
            }}
          >
            {[0, 30, 60, 90, 120, 150].map((offset) => (
              <path
                key={offset}
                d={`M100 ${280 + offset} C180 ${70 + offset} 280 ${50 + offset} 340 ${85 + offset} S430 ${-30 + offset} 620 ${-20 + offset}`}
                fill="none"
                stroke="#c6ce9d"
                strokeWidth="1.5"
              />
            ))}
          </Box>
          <Typography
            sx={{
              position: "relative",
              typography: "h4",
              fontFamily: serif,
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              mb: 1.5,
            }}
          >
            {content.personalNoteTitle}
          </Typography>
          <Typography
            sx={{
              position: "relative",
              color: "#e0e9dc",
              lineHeight: 1.8,
            }}
          >
            {content.personalNote}
          </Typography>
        </Box>
      </Box>
    </Section>
  );
}
