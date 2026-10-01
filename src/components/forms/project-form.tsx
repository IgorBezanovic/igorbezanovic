"use client";
import { useState, type FormEvent } from "react";
import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import { profile } from "@/lib/site";
export type ProjectFormLabels = Pick<
  Dictionary,
  | "nameLabel"
  | "emailLabel"
  | "detailsLabel"
  | "projectTitle"
  | "formHint"
  | "submit"
  | "draftReady"
>;
export function ProjectForm({ t }: { t: ProjectFormLabels }) {
  const [prepared, setPrepared] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `${t.nameLabel}: ${data.get("name")}\n${t.emailLabel}: ${data.get("email")}\n\n${data.get("details")}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(t.projectTitle)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return (
    <Stack
      component="form"
      onSubmit={submit}
      spacing={3}
      sx={{ maxWidth: 680, mt: 5 }}
    >
      <TextField
        name="name"
        label={t.nameLabel}
        required
        autoComplete="name"
        slotProps={{ htmlInput: { maxLength: 120 } }}
      />
      <TextField
        name="email"
        label={t.emailLabel}
        type="email"
        required
        autoComplete="email"
        slotProps={{ htmlInput: { maxLength: 254 } }}
      />
      <TextField
        name="details"
        label={t.detailsLabel}
        multiline
        minRows={5}
        required
        slotProps={{ htmlInput: { maxLength: 2000 } }}
      />
      <Typography variant="body2" color="text.secondary">
        {t.formHint}
      </Typography>
      <Button
        type="submit"
        variant="contained"
        sx={{ alignSelf: "flex-start" }}
      >
        {t.submit} ↗
      </Button>
      {prepared && (
        <Alert severity="info" role="status">
          {t.draftReady}
        </Alert>
      )}
    </Stack>
  );
}
