export interface ContactInfoValues {
  type: string;
  value: string;
}

export default function ContactInfo({
  infoValues,
}: {
  infoValues: ContactInfoValues[];
}) {
  return (
    <div className="flex flex-row">
      {infoValues.map((value) => {
        switch (value.type) {
          case "email":
            return <a href="mailto:{value.value}">{value.value}</a>;
          case "phone":
            return <a href="tel:{value.value}">{value.value}</a>;
          case "url":
            return <a href="{value.value}">{value.value}</a>;
          default:
            return <></>;
        }
      })}
    </div>
  );
}
