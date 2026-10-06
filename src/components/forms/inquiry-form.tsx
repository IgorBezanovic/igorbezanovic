"use client";
import { useState, type FormEvent } from "react";
import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import { profile } from "@/lib/site";
export type InquiryFormProps = Pick<
  Dictionary,
  "nameLabel" | "emailLabel" | "formHint" | "submit" | "draftReady"
> & {
  fields: Dictionary["collaboration"]["forms"]["project-delivery"]["fields"];
  formTitle: string;
  directEmail: string;
};
export function InquiryForm({
  fields,
  formTitle,
  directEmail,
  nameLabel,
  emailLabel,
  formHint,
  submit: submitLabel,
  draftReady,
}: InquiryFormProps) {
  const [prepared, setPrepared] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `${nameLabel}: ${data.get("name")}`,
      `${emailLabel}: ${data.get("email")}`,
      ...fields.map((field) => `${field.label}\n${data.get(field.id) || "—"}`),
    ].join("\n\n");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(formTitle)}&body=${encodeURIComponent(body)}`;
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
        label={nameLabel}
        required
        autoComplete="name"
        slotProps={{ htmlInput: { maxLength: 120 } }}
      />
      <TextField
        name="email"
        label={emailLabel}
        type="email"
        required
        autoComplete="email"
        slotProps={{ htmlInput: { maxLength: 254 } }}
      />
      {fields.map((field) => (
        <TextField
          key={field.id}
          name={field.id}
          label={field.label}
          helperText={field.hint}
          multiline
          minRows={3}
          required={field.required}
          slotProps={{ htmlInput: { maxLength: 500 } }}
        />
      ))}
      <Typography variant="body2" color="text.secondary">
        {formHint}
      </Typography>
      <Typography variant="body2">
        <a href={`mailto:${profile.email}`}>
          {directEmail}: {profile.email}
        </a>
      </Typography>
      <Button
        type="submit"
        variant="contained"
        sx={{ alignSelf: "flex-start" }}
      >
        {submitLabel} ↗
      </Button>
      {prepared && (
        <Alert severity="info" role="status">
          {draftReady}
        </Alert>
      )}
    </Stack>
  );
}
