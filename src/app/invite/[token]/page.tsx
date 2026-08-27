import { redirect } from "next/navigation";

/** Backwards-compatible deep link for QR scanners and external invite links. */
export default function InviteTokenPage({
  params,
}: {
  params: { token: string };
}) {
  redirect(`/join/${encodeURIComponent(params.token)}`);
}
