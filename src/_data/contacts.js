import meta from "./meta.json" with { type: "json" };

export default function contacts() {
  return Object.entries(meta.contacts).map(([type, object]) =>
    Object.assign(object, { type }),
  );
}
