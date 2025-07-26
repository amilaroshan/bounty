import Link from "next/link";

import { ticketsPath } from "@/paths";


export default function Home() {
  return (
   <div>
    <h1>bounty is here</h1>
    <Link href={ticketsPath}>View Tickets</Link>
   </div>
  );
}
