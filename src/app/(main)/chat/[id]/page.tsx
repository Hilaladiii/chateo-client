import { use } from "react";

type Params = Promise<{ id: string }>;

export default function ChatDetailPage(props: { params: Params }) {
  const params = use(props.params);
  return <div>hello</div>;
}
