import { Box, Container } from "@mui/material";
export function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <Box component="section" id={id} sx={{ py: { xs: 6, md: 10 } }}>
      <Container>{children}</Container>
    </Box>
  );
}
