import { ComponentAnatomyName, getComponent } from "@zag-js/anatomy-icons";

export function Anatomy(props: { component: string }) {
  const Component = getComponent(props.component as ComponentAnatomyName);

  if (!Component) return null;
  return <Component accentColor="#6eeb6e" className="anatomy-icon" />;
}
